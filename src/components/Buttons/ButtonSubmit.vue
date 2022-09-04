<template>
  <button class="bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    onClick() {
      this.$emit('clickBtn')
    }
  }
}
</script>