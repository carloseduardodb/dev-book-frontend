<template>
  <div class="pb-5">
    <input
      class="w-full px-3 py-2 my-2 text-gray-700 border rounded-lg focus:outline-none border-gray-200"
      placeholder="Digite um título"
      v-model="title"
    />
    <textarea
      class="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
      placeholder="No que você está pensando?"
      v-model="content"
    ></textarea>
    <div class="flex flex-row justify-end mt-2">
      <ButtonSubmit @click-btn="handlePublishPost"> Publicar </ButtonSubmit>
    </div>
  </div>
</template>

<script>
import ButtonSubmit from "./../Buttons/ButtonSubmit.vue";
import { api } from "@/service/api";
export default {
  components: {
    ButtonSubmit: ButtonSubmit,
  },
  data() {
    return {
      title: "",
      content: "",
    };
  },
  methods: {
    handlePublishPost() {
      api
        .post("/post", {
          title: this.title,
          content: this.content,
        })
        .then(() => {
          this.title = "";
          this.content = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
