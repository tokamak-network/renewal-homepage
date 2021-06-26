<template>
  <div class="blog">
    <div class="blog-header">
      <div class="title">{{ $t("home.blog.title") }}</div>
      <div v-if="width > 700" class="prev-arrow" @click="prev" />
      <div v-if="width > 700" class="next-arrow" @click="next" />
    </div>
    <div class="post-section">
      <div v-for="post in selectedPosts" :key="post.guid" class="post">
        <img :src="post.thumbnail" class="img" @click="redirect(post.link)" />
        <div class="post-title" @click="redirect(post.link)">
          {{ post.title }}
        </div>
        <div class="post-preview" @click="redirect(post.link)">
          {{ parsing(post.content) }}
        </div>
        <div class="post-date">{{ parseDate(post.pubDate) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from "moment";

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
      if (this.width > 1440) {
        return this.posts.slice(this.page, this.page + 3);
      } else if (this.width > 700 && this.width <= 1440) {
        return this.posts.slice(this.page, this.page + 2);
      } else {
        return this.posts.slice(this.page, this.page + 3);
      }
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
      } else if (this.width > 700 && this.width <= 1024) {
        return 2;
      } else {
        return 3;
      }
    },
    parseDate(date) {
      return moment(date).format("MMM DD. YYYY");
    },
    parsing(content) {
      const start = content.indexOf("<p>");
      const end = content.indexOf("</p>");
      const parsed = content.slice(start + 3, end);

      if (parsed.length > 300) {
        return parsed.slice(0, 300).replace(/(<([^>]+)>)/gi, "");
      }

      return parsed.replace(/(<([^>]+)>)/gi, "");
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
  },
};
</script>

<style lang="scss" scope>
@import "BlogContainer.scss";
@import "BlogContainer-1280.scss";
@import "BlogContainer-tablet.scss";
@import "BlogContainer-mobile.scss";
</style>
