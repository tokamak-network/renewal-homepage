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
      width: 0,
    };
  },
  computed: {
    ...mapState(["posts", "web3"]),
    selectedPosts() {
      if (this.width > 1280) {
        return this.posts.slice(this.page, this.page + 3);
      } else if (this.width > 375 && this.width <= 1280) {
        return this.posts.slice(this.page, this.page + 2);
      }
      return this.posts.slice(this.page, this.page + 1);
    },
  },
  created() {
    this.width = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
    setCount() {
      if (this.width > 1240) {
        return 3;
      } else if (this.width > 375 && this.width <= 1024) {
        return 2;
      }
    },
    parsing(content) {
      const start = content.indexOf("<p>");
      const end = content.indexOf("</p>");
      const parsed = content.slice(start + 3, end);

      if (parsed.length > 300) {
        return parsed.slice(0, 300);
      }
      return parsed;
    },
    prev() {
      this.page !== 0 ? (this.page = this.page - 1) : (this.page = 0);
    },
    next() {
      this.page + this.setCount() < this.posts.length
        ? (this.page = this.page + 1)
        : (this.page = this.posts.length - this.setCount());
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
@import "BlogContainer-tablet.scss";
</style>
