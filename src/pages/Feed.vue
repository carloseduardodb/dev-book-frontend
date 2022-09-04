<template>
  <BodyAfterLogin>
    <!-- Publish Post -->
    <div class="bg-white border-none rounded-md my-2 px-5">
      <HeaderLogo> Feed </HeaderLogo>
      <PublishPost />
    </div>

    <!-- Posts -->
    <div v-if="posts.length > 0">
      <div
        class="bg-white border-none rounded-md my-2 px-5"
        v-for="post in posts"
        :key="post.id"
      >
        <ViewPost
          v-on:like="handleLikePost"
          v-on:unlike="handleUnlikePost"
          v-on:delete="handleDeletePost"
          :id="post.id"
          :title="post.title"
          :content="post.content"
          :created_at="post.created_at"
          :nick="post.author_nick"
          :likes="post.likes"
          :liked="post.liked"
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
  async mounted() {
    await this.getPosts();
    const interval = setInterval(() => {
      this.user = userStore.user;
      if (!userStore.isLoaded) {
        clearInterval(interval);
      }
    }, 50);
  },
  methods: {
    async getPosts() {
      await api.get("/posts").then((response) => {
        this.posts = response.data;
      })
    },
    handleLikePost(id) {
      api.post(`/post/${id}/like`).then(() => {
        this.posts = this.posts.map((post) => {
          if (post.id === id) {
            post.liked = true;
            if(post.likes) {
              post.likes += 1;
            } else {
              post.likes = 1;
            }
          }
          return post;
        });
      })
    },
    handleUnlikePost(id) {
      api.post(`/post/${id}/unlike`).then(() => {
        this.posts = this.posts.map((post) => {
          if (post.id === id) {
            post.liked = false;
            post.likes -= 1;
          }
          return post;
        });
      })
    },
    handleDeletePost(id) {
      api.delete(`/post/${id}`).then(() => {
        this.posts = this.posts.filter((post) => post.id !== id);
      })
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
