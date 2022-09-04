<template>
  <BodyAfterLogin>
    <!-- Publish Post -->
    <div class="bg-white border-none rounded-md my-2 px-5">
      <button class="bg-gray-800 text-white px-5 py-2 rounded-full mt-5">Voltar</button>
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-1 lg:px-2 flex flex-row justify-between">
        <h1 class="text-3xl font-bold text-gray-800">Pesquisar</h1>
        <div class="flex gap-5">
          <input type="text" name="" id="" placeholder="Pesquise por um usuário"
            class="bg-gray-200 rounded-md px-2 py-1">
          <h1 class="text-3xl font-bold text-gray-700"><span class="text-blue-500">Dev</span>Book</h1>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-md">
      <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
        <li>
          <a href="#" class="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
            <div class="w-full flex items-center">
              <img class="mr-3 mb-3 w-20 h-20 rounded-full sm:mb-0 bg-gray-200 p-2" src="./../assets/user-icon.svg"
                alt="User Image" />
              <div class="text-gray-600 dark:text-gray-400 ml-3">
                <div class="text-lg font-bold">{{ name }} Nome do Usuário</div>
                <div class="text-base font-normal">{{ nickname }} Apelido </div>
                <span class="inline-flex items-center text-md my-2 font-normal text-gray-500 dark:text-gray-400">
                  0 Seguidores
                </span>
              </div>
            </div>
            <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Seguir
            </button>
          </a>
        </li>
      </ol>
    </div>
  </BodyAfterLogin>
</template>

<script>
import BodyAfterLogin from './../components/BodyAfterLogin.vue'
export default {
  name: 'SearchUserPage',
  components: {
    BodyAfterLogin: BodyAfterLogin
  },
}
</script>