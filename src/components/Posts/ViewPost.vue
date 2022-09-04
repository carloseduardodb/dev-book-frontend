<template>
  <div
    class="p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
  >
    <div class="flex flex-row justify-between">
      <!-- created -->
      <time class="text-lg font-semibold text-gray-900 dark:text-white"
        >{{ new Date(created_at).toLocaleDateString('pt-br', {
          formatMatcher: 'best fit',
        }) }}</time
      >
      <div class="flex flex-row gap-3" v-if="nick === userStore.user.nick" >
        <!-- svg edit -->
        <button>
          <img
            class="h-6 w-6 text-red-500"
            src="./../../assets/edit.svg"
            alt=""
          />
        </button>
        <!-- svg delete -->
        <button>
          <img class="h-6 w-6" src="./../../assets/trash.svg" alt="" />
        </button>
      </div>
    </div>
    <ol class="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
      <li>
        <a
          href="#"
          class="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <div class="w-full flex items-center">
            <img
              class="mr-3 mb-3 w-20 h-20 rounded-full sm:mb-0 bg-gray-200 p-2"
              src="./../../assets/user-icon.svg"
              alt="User Image"
            />
            <div class="text-gray-600 dark:text-gray-400 ml-3">
              <div class="text-lg font-bold">{{ title }}</div>
              <div class="text-base font-normal">
                {{ content }}
              </div>
              <span
                class="inline-flex items-center text-md my-2 font-normal text-gray-500 dark:text-gray-400"
              >
                0 Curtidas
              </span>
            </div>
          </div>
          <button
            class="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Curtir
          </button>
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
import { userStore } from '@/contexts/User';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    created_at: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    nick: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userStore: userStore,
    };
  },
};
</script>
