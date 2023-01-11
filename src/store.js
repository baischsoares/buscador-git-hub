import { createStore } from 'vuex';

const store = createStore({
  state: {
    busca: '',
    repositorios: null,
    favoritos: null,
    usuarios: null,
    usuario: null,
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
    REPOSITORIOS_DECRESCENTE(state, payload) {
      let url = `https://api.github.com/users/${payload}/repos?direction=desc`;
      fetch(url)
        .then((r) => r.json())
        .then((r) => {
          state.repositorios = r;
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
    USUARIO_ESCOLHIDO(state, payload) {
      let url = `https://api.github.com/users/${payload}`;
      fetch(url)
        .then((r) => r.json())
        .then((r) => {
          state.usuario = r;
        });
    },
  },
});

export default store;
