<template>
  <div
    class="max-w-7xl mx-auto py-6 px-4 sm:px-1 lg:px-2 flex flex-row justify-between"
  >
    <h1 class="text-3xl font-bold text-gray-800">
      <slot></slot>
    </h1>
    <div class="flex gap-5">
      <div class="flex gap-1">
        <input
          type="text"
          name=""
          id=""
          placeholder="Pesquise por um usuário"
          v-model="search"
          class="bg-gray-200 rounded-md px-2 py-1"
        />
        <button
          class="bg-blue-500 text-white rounded-md px-2 py-1"
          @click="searchUser"
        >
          <img src="@/assets/search.svg" alt="Search" class="w-5 h-5" />
        </button>
      </div>
      <h1 class="text-3xl font-bold text-gray-700">
        <span class="text-blue-500">Dev</span>Book
      </h1>
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";
const toast = useToast();
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    searchUser() {
      if (this.search === "") {
        toast.warning("Digite um nome para pesquisar");
      }else {
        this.$router.push("/search/" + this.search);
        this.$emit("search", this.search);
      }
    },
  },
};
</script>
