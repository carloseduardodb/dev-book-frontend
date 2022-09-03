<template>
  <div class="container">
    <div class="container__header">
      <h1 class="container__title">{{ title }}</h1>
      <div class="container__actions">
        <slot name="actions"> </slot>
      </div>
    </div>
    <div class="container__content">
      <slot> </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContainerComponent',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>