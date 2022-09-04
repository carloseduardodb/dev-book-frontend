<template>
  <BodyAfterLogin>
    <!-- Publish Post -->
    <div class="bg-white border-none rounded-md my-2 px-5">
      <button
        class="bg-gray-800 text-white px-5 py-2 rounded-full mt-5"
        @click="back"
      >
        Voltar
      </button>
      <HeaderLogo @search="searchUser">Search</HeaderLogo>
    </div>

    <div class="bg-white rounded-md mb-5">
      <ol
        class="mt-3 divide-y divider-gray-200 dark:divide-gray-700"
        v-for="user in users"
        v-bind:key="user.id"
      >
        <li>
          <div
            href="#"
            class="block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <div class="w-full flex items-center">
              <img
                class="mr-3 mb-3 w-20 h-20 rounded-full sm:mb-0 bg-gray-200 p-2"
                src="./../assets/user-icon.svg"
                alt="User Image"
              />
              <div class="text-gray-600 dark:text-gray-400 ml-3">
                <div class="text-lg font-bold">{{ user.name }}</div>
                <div class="text-base font-normal">{{ user.nick }}</div>
                <span
                  class="inline-flex items-center text-md my-2 font-normal text-gray-500 dark:text-gray-400"
                >
                  {{ user.count_followers }} Seguidores
                </span>
              </div>
            </div>
            <ButtonSubmit @click-btn="user.is_following ? unFollow(user.id) : follow(user.id)">
              {{ user.is_following ? "Unfollow" : "Follow" }}
            </ButtonSubmit>
          </div>
        </li>
      </ol>
    </div>
  </BodyAfterLogin>
</template>

<script>
import BodyAfterLogin from "./../templates/BodyAfterLogin.vue";
import HeaderLogo from "@/components/Header/HeaderLogo.vue";
import { api } from "@/service/api";
import ButtonSubmit from "./../components/Buttons/ButtonSubmit.vue";
export default {
  name: "SearchUserPage",
  components: {
    BodyAfterLogin: BodyAfterLogin,
    HeaderLogo: HeaderLogo,
    ButtonSubmit: ButtonSubmit,
  },
  methods: {
    back() {
      this.$router.push("/feed");
    },
    searchUser(search) {
      api
      .get("/users", {
        params: {
          name_or_nick: search,
        },
      })
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    },
    follow(id) {
      api.post(`user/${id}/follow`).then(() => {
        this.users = this.users.map((user) => {
          if (user.id === id) {
            user.is_following = true;
            if(user.count_followers) {
              user.count_followers += 1;
            } else {
              user.count_followers = 1;
            }
          }
          return user;
        });
      });
    },
    unFollow(id) {
      api.post(`user/${id}/unfollow`).then(() => {
        this.users = this.users.map((user) => {
          if (user.id === id) {
            user.is_following = false;
            if(user.count_followers) {
              user.count_followers -= 1;
            } else {
              user.count_followers = 0;
            }
          }
          return user;
        });
      });
    },
  },
  data: function () {
    return {
      users: [],
    };
  },
  mounted() {
    this.searchUser(this.$route.params.name);
  },
};
</script>
