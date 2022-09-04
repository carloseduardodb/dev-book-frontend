<template>
  <BodyAfterLogin>
    <!-- Publish Post -->
    <div class="bg-white border-none rounded-md my-2 px-5">
      <HeaderLogo> Feed </HeaderLogo>
      <PublishPost />
    </div>

    <!-- Posts -->
    <div
      v-if="posts.length > 0"
    >
      <div class="bg-white border-none rounded-md my-2 px-5" v-for="post in posts" :key="post.id">
        <ViewPost
        :title="post.title"
        :content="post.content"
        :created_at="post.created_at"
        :nick="post.author_nick"
        likes="0"
        />
      </div>
    </div>
  </BodyAfterLogin>
</template>

<script>
import { userStore } from "./../contexts/User";
import BodyAfterLogin from "./../templates/BodyAfterLogin.vue";
import PublishPost from "./../components/Posts/PublishPost.vue";
import HeaderLogo from "./../components/Header/HeaderLogo.vue";
import ViewPost from "./../components/Posts/ViewPost.vue";
import { api } from "@/service/api";

export default {
  name: "FeedPage",
  components: {
    BodyAfterLogin: BodyAfterLogin,
    PublishPost: PublishPost,
    HeaderLogo: HeaderLogo,
    ViewPost: ViewPost,
  },
  data() {
    return {
      user: userStore.user,
      posts: [],
    };
  },
  mounted() {
    const interval = setInterval(() => {
      this.user = userStore.user;
      if (!userStore.isLoaded) {
        clearInterval(interval);
      }
    }, 50);
  },
  methods: {
    async getPosts() {
      const response = await api.get("/posts");
      console.log(response.data);
      this.posts = response.data;
    },
  },
  watch: {
    user: {
      handler: function (val) {
        if (val) {
          this.getPosts();
        }
      },
      deep: true,
    },
  },
};
</script>
