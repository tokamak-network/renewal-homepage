<template>
  <div class="blog">
    <div class="blog-header">
      <div class="title">RECENT BLOG POSTS</div>
      <div class="button" />
    </div>
    <div class="post-section">
      <div v-for="post in selectedPosts" :key="post.guid" class="post">
        <img :src="post.thumbnail" class="img" />
        <div class="post-title">
          {{ post.title }}
        </div>
        <div class="post-preview">{{ parsing(post.description) }}</div>
        <div class="post-date">{{ post.pubDate }}</div>
      </div>
    </div>
    <div class="line" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      page: 0,
    };
  },
  computed: {
    ...mapState(["posts", "web3"]),
    selectedPosts() {
      // const first = this.page + 1;
      console.log(this.posts[1].description);
      console.log(this.posts[0].description.indexOf("<p>"));
      return this.posts.slice(this.page, this.page + 3);
    },
  },
  created() {
    console.log(this.posts);
  },
  methods: {
    parsing(content) {
      const start = content.indexOf("<p>");
      const end = content.indexOf("</p>");
      return content.slice(start + 3, end);
    },
    // getPosts() {
    //   const options = {
    //     url: "https://medium.com/feed/onther-tech",
    //     method: "GET",
    //     // data: {
    //     //   email: 'user@example.com',
    //     //   password: 'pasw0rd'
    //     // }
    //   };
    //   this.$axios(options)
    //     .then((res) => {
    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // },
  },
};
</script>

<style lang="scss" scope>
@import "BlogContainer.scss";
</style>
