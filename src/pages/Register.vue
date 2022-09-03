<template>
  <div class="antialiased bg-purple-100 min-h-screen flex flex-row justify-center items-center py-10">
    <div class="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300 md:w-6/12">
      <h1 class="text-4xl font-medium">Cadastrar no DevBook</h1>
      <form class="my-10">
        <div class="flex flex-col space-y-5">
          <label for="name">
            <InputLoginRegister id="name" type="text" label="Nome" placeholder="Entre com seu nome" />
          </label>
          <label for="nick">
            <InputLoginRegister id="nick" type="text" label="Apelido" placeholder="Entre com seu apelido" />
          </label>
          <label for="email">
            <InputLoginRegister id="email" type="email" label="Endereço de Email"
              placeholder="Entre com seu endereço de email" />
          </label>
          <label for="password">
            <InputLoginRegister id="password" type="password" label="Senha" placeholder="Entre com sua senha" />
          </label>
          <label for="password_confirmation">
            <InputLoginRegister id="password_confirmation" type="password" label="Confirme sua senha"
              placeholder="Confirme sua senha" />
          </label>
          <ButtonLoginRegister @click-btn="handleRegister">Cadastrar</ButtonLoginRegister>
          <p class="text-center">Ja tem uma conta? <a href="#" v-on:click="handleRedirectLogin"
              class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Fazer login
              </span><span><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg></span></a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import InputLoginRegister from '../components/Inputs/InputLoginRegister.vue'
import ButtonLoginRegister from '../components/Buttons/ButtonLoginRegister.vue'
import api from './../service/api'

export default {
  name: 'RegisterPage',
  components: {
    InputLoginRegister: InputLoginRegister,
    ButtonLoginRegister: ButtonLoginRegister,
  },
  data() {
    return {
      name: '',
      nick: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  },
  methods: {
    handleRedirectLogin() {
      this.$router.push('/login')
    },
    handleRegister() {
      api.post("/register", {
        name: this.name,
        nick: this.nick,
        email: this.email,
        password: this.password,
        password_confirmation: this.password_confirmation
      }).then(() => {
        this.$router.push('/login')
      }).catch((error) => {
        console.log(error)
      })
    },
  }
}
</script>