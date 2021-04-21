<template>
  <div class="blog">
    <div class="blog-header">
      <div class="title">{{ $t("home.blog.title") }}</div>
      <div class="prev-arrow" @click="prev" />
      <div class="next-arrow" @click="next" />
    </div>
    <div class="post-section">
      <div v-for="post in selectedPosts" :key="post.guid" class="post">
        <img :src="post.thumbnail" class="img" @click="redirect(post.link)" />
        <div class="post-title" @click="redirect(post.link)">
          {{ post.title }}
        </div>
        <div class="post-preview" @click="redirect(post.link)">
          {{ parsing(post.description) }}
        </div>
        <div class="post-date">{{ post.pubDate }}</div>
      </div>
    </div>
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
      return this.posts.slice(this.page, this.page + 3);
    },
  },
  methods: {
    parsing(content) {
      const start = content.indexOf("<p>");
      const end = content.indexOf("</p>");
      return content.slice(start + 3, end);
    },
    prev() {
      this.page !== 0 ? (this.page = this.page - 1) : (this.page = 0);
    },
    next() {
      this.page + 3 < this.posts.length
        ? (this.page = this.page + 1)
        : (this.page = this.posts.length - 3);
    },
    redirect(link) {
      window.open(link, '_blank'); // eslint-disable-line
    },
    // getPosts() {
    //   const options = {
    //     url: "https://medium.com/feed/onther-tech",
    //     method: "GET",
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
