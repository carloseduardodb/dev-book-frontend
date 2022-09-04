<template>
  <BodyAfterLogin>
    <div class="bg-white border-none rounded-md my-2 px-5">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-1 lg:px-2 flex flex-row justify-between">
        <h1 class="text-3xl font-bold text-gray-800">Edição de Post</h1>
        <div class="flex gap-5">
          <h1 class="text-3xl font-bold text-gray-700"><span class="text-blue-500">Dev</span>Book</h1>
        </div>
      </div>
      <div class="pb-5">
        <input class="w-full px-3 py-2 my-2 text-gray-700 border rounded-lg focus:outline-none border-gray-200"
          placeholder="Digite um título">
        <textarea class="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          placeholder="No que você está pensando?"></textarea>
        <div class="flex flex-row justify-end mt-2 gap-2">
          <button class="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full">
            Voltar
          </button>
          <button class="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full">
            Salvar Edição
          </button>
        </div>
      </div>
    </div>
  </BodyAfterLogin>
</template>

<script>
import BodyAfterLogin from './../components/BodyAfterLogin.vue'
export default {
  name: 'EditPostPage',
  components: {
    BodyAfterLogin: BodyAfterLogin
  },
}
</script>