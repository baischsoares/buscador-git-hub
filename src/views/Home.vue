<template>
  <section class="container">
      <div v-if="!repositorios && !usuarios">
        <div class="view">
          <div class="img">
            <img src="../images/Vector.png" alt="">
          </div>
          <div class="btn-home">
            <button @click="selecionado = true" :class="selecionado ? 'ativo' : ''">Repositório</button>
            <button  @click="selecionado = false" :class="!selecionado ? 'ativo' : ''">Usuário</button> 
          </div>
          <div class="busca">
            <input  v-on:keyup.enter="pesquisar" type="text" placeholder="Buscar..." v-model="busca"/>
          </div>
        </div>
      </div>
    </section>
</template>

<script>


export default {
  name: 'home',
  data(){
    return{
      busca: '',
      selecionado: true
    }
  },
  methods:{
    pesquisar(){
      if(this.selecionado){
        this.buscarRepositorio()
      } else{
        this.buscarUsuario();
      }
    },
    buscarRepositorio(){
      this.$store.commit("REPOSITORIOS_RESULTADO", this.busca)
      this.$router.push('repositorios')
    },
    buscarUsuario(){
      this.$store.commit("USUARIOS_RESULTADO", this.busca)
      this.$router.push('usuarios')
    }
  }
}
</script>

<style scoped>
.img{
  text-align: center;
  margin-bottom: 70px;
}
.btn-home{
  text-align: center;
}
.btn-home button{
  margin: 0px 20px;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid #000;
  border-radius: 5px;
  background: #fff;
  width: 186px;
  height: 51px;
  cursor: pointer;
}
 button.ativo{
  background: #000;
  color: white;
} 
.selecionado{
  color: red;
}
.busca{
  margin-top: 45px;
  text-align: center;
}
.busca input{
  border: 2px solid #000;
  border-radius: 5px;
  width: 780px;
  height: 70px;
  font-size: 24px;
  padding-left: 20px;
  box-sizing: border-box;
}
</style>
