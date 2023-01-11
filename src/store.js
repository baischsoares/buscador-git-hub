import { createStore } from 'vuex';

const store = createStore({
  state: {
    busca: '',
    repositorios: null,
    usuarios: null,
    favoritos: null,
    pagina: 1,
  },
  mutations: {
    REPOSITORIOS_RESULTADO(state, payload) {
      let url = `https://api.github.com/search/repositories?q=${payload}&page={state.pagina}`;
      fetch(url)
        .then((r) => r.json())
        .then((r) => {
          state.repositorios = r.items;
        });
    },
    USUARIOS_RESULTADO(state, payload) {
      let url = `https://api.github.com/search/users?q=${payload}&page={state.pagina}`;
      fetch(url)
        .then((r) => r.json())
        .then((r) => {
          state.usuarios = r.items;
        });
    },
  },
});

export default store;
