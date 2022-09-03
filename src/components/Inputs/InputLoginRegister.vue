<template>
  <div>
    <label class="font-medium text-slate-700 pb-2" :for="id">{{ label }}</label>
    <input @input="$emit('update:modelValue', $event.target.value)"
      class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
      :id="id" :type="type" :value="modelValue" :placeholder="placeholder" />
  </div>
</template>

<script>
export default {
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
    modelValue: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>
