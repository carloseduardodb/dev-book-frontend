<template>
  <BodyAfterLogin>
    <!-- Publish Post -->
    <div class="bg-white border-none rounded-md my-2 px-5">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-1 lg:px-2 flex flex-row justify-between">
        <h1 class="text-3xl font-bold text-gray-800">Feed</h1>
        <div class="flex gap-5">
          <input type="text" name="" id="" placeholder="Pesquise por um usuário"
            class="bg-gray-200 rounded-md px-2 py-1">
          <h1 class="text-3xl font-bold text-gray-700"><span class="text-blue-500">Dev</span>Book</h1>
        </div>
      </div>
      <div class="pb-5">
        <input class="w-full px-3 py-2 my-2 text-gray-700 border rounded-lg focus:outline-none border-gray-200"
          placeholder="Digite um título">
        <textarea class="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          placeholder="No que você está pensando?"></textarea>
        <div class="flex flex-row justify-end mt-2">
          <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Publicar
          </button>
        </div>
      </div>
    </div>

    <!-- Posts -->
    <div>
      <div class="p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-row justify-between">
          <!-- created -->
          <time class="text-lg font-semibold text-gray-900 dark:text-white">January 13th, 2022</time>
          <div class="flex flex-row gap-3">
            <!-- svg edit -->
            <button>
              <img class="h-6 w-6 text-red-500" src="./../assets/edit.svg" alt="">
            </button>
            <!-- svg delete -->
            <button>
              <img class="h-6 w-6" src="./../assets/trash.svg" alt="">
            </button>
          </div>
        </div>
        <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
          <li>
            <a href="#" class="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
              <div class="w-full flex items-center">
                <img class="mr-3 mb-3 w-20 h-20 rounded-full sm:mb-0 bg-gray-200 p-2" src="./../assets/user-icon.svg"
                  alt="User Image" />
                <div class="text-gray-600 dark:text-gray-400 ml-3">
                  <div class="text-lg font-bold">{{ title }} Um novo Titulo</div>
                  <div class="text-base font-normal">{{ content }} "I wanted to share a webinar zeroheight."</div>
                  <span class="inline-flex items-center text-md my-2 font-normal text-gray-500 dark:text-gray-400">
                    0 Curtidas
                  </span>
                </div>
              </div>
              <button class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Curtir
              </button>
            </a>
          </li>
        </ol>
      </div>
    </div>
  </BodyAfterLogin>
</template>

<script>
import { userStore } from './../contexts/User'
import BodyAfterLogin from './../components/BodyAfterLogin.vue'

export default {
  name: 'FeedPage',
  components: {
    BodyAfterLogin: BodyAfterLogin
  },
  data() {
    return {
      user: userStore.user
    }
  },
  mounted() {
    const interval = setInterval(() => {
      this.user = userStore.user
      if (!userStore.isLoaded) {
        clearInterval(interval)
      }
    }, 50)
  }
}
</script>