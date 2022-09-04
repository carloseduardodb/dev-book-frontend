<template>
  <div class="pb-5">
    <input class="w-full px-3 py-2 my-2 text-gray-700 border rounded-lg focus:outline-none border-gray-200"
      placeholder="Digite um título">
    <textarea class="w-full h-24 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
      placeholder="No que você está pensando?"></textarea>
    <div class="flex flex-row justify-end mt-2">
      <ButtonSubmit>
        Publicar
      </ButtonSubmit>
    </div>
  </div>
</template>

<script>
  import ButtonSubmit from './../Buttons/ButtonSubmit.vue'
  export default {
    components: {
      ButtonSubmit: ButtonSubmit
    }
  }
</script>