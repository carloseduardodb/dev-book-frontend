<template>
  <router-view>
  </router-view>
</template>

<script>
import { userStore } from './contexts/User'
export default {
  mounted() {
    userStore.loadContext()
  }
}
</script>