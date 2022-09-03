<!-- InputLoginRegister.vue -->
<template>
  <div>
    <label class="font-medium text-slate-700 pb-2" :for="id">{{ label }}</label>
    <input
      class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
      :id="id" :type="type" :value="value" :placeholder="placeholder" @input="onInput" />
  </div>
</template>

<script>
export default {
  name: 'InputLoginRegister',
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
