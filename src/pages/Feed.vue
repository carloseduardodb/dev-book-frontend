<template>
  <div class="bg-blue-500 min-h-screen flex flex-row justify-center">
    <!--Container PCP-->
    <div class="bg-white border-none h-px w-full lg:w-6/12">
      <!-- Publish Post -->
      <div class="bg-white border-none rounded-md my-2 px-5">
        <div class="max-w-7xl mx-auto py-6 px-4 sm:px-1 lg:px-2 flex flex-row justify-between">
          <h1 class="text-3xl font-bold text-gray-800">Feed</h1>
          <h1 class="text-3xl font-bold text-gray-700"><span class="text-blue-500">Dev</span>Book</h1>
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
    </div>
    <!-- <p>{{ user }}</p> -->
  </div>
</template>

<script>
import { userStore } from './../contexts/User'

export default {
  name: 'FeedPage',
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