<template>
  <BodyAfterLogin>
    <!-- Publish Post -->
    <div class="bg-white border-none rounded-md my-2 px-5">
      <HeaderLogo>
        Feed
      </HeaderLogo>
      <PublishPost />
    </div>

    <!-- Posts -->
    <div>
      <ViewPost title="Um novo Titulo" content="I wanted to share a webinar zeroheight." created_at="January 13th, 2022"
        likes="0" />
    </div>
  </BodyAfterLogin>
</template>

<script>
import { userStore } from './../contexts/User'
import BodyAfterLogin from './../templates/BodyAfterLogin.vue'
import PublishPost from './../components/Posts/PublishPost.vue'
import HeaderLogo from './../components/Header/HeaderLogo.vue'
import ViewPost from './../components/Posts/ViewPost.vue'

export default {
  name: 'FeedPage',
  components: {
    BodyAfterLogin: BodyAfterLogin,
    PublishPost: PublishPost,
    HeaderLogo: HeaderLogo,
    ViewPost: ViewPost
  },
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