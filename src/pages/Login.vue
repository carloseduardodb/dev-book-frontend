<template>
  <div class="antialiased bg-purple-100 min-h-screen flex flex-row justify-center items-center py-10">
    <div class="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300 md:w-6/12">
      <h1 class="text-4xl font-medium">Entrar no DevBook</h1>
      <br />
      <p class="text-slate-500">Olá, Bem vindo de volta 👋</p>
      <form action="" autocomplete="on" class="my-10">
        <div class="flex flex-col space-y-5">
          <label for="email">
            <InputLoginRegister id="email" type="email" v-model="email" label="Endereço de Email"
              placeholder="Entre com seu endereço de email" />
          </label>
          <label for="password">
            <InputLoginRegister id="password" type="password" v-model="password" label="Senha"
              placeholder="Entre com sua senha" />
          </label>
          <div class="flex flex-row justify-between">
            <div>
              <label for="remember" class="">
                <input type="checkbox" id="remember" class="w-4 h-4 border-slate-200 focus:bg-indigo-600">
                Lembrar de mim
              </label>
            </div>
          </div>
          <ButtonLoginRegister @click-btn="handleLogin">Entrar</ButtonLoginRegister>
          <p class="text-center">Ainda não tem uma conta? <a href="#" v-on:click="handleRedirectRegister"
              class="text-indigo-600 font-medium inline-flex space-x-1 items-center"><span>Cadastre-se agora
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
import { useToast } from "vue-toastification";
import { api, setToken } from '@/service/api';
import { localStorageStore } from '@/contexts/LocalStorage';
import { userStore } from '@/contexts/User';

export default {
  name: 'LoginPage',
  components: {
    InputLoginRegister: InputLoginRegister,
    ButtonLoginRegister: ButtonLoginRegister,
  },
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleRedirectRegister() {
      this.$router.push('/register')
    },
    handleLogin() {
      const toast = useToast();
      api.post('/login', {
        email: this.email,
        password: this.password
      }).then((data) => {
        localStorageStore.asyncLocalStorage.setItem('token', data.data.token).then(() => {
          setToken();
          this.$router.push('/feed');
          userStore.loadContext()
          toast.success('Login realizado com sucesso!');
        })
      }).catch((err) => {
        console.log(err)
        toast.error('Erro ao realizar login!');
      })
    }
  }
}
</script>