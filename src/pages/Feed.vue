<template>
  <div class="feed">
    <p>Hello</p>
    <p>
      {{ user.name }}
    </p>
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