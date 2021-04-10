<template>
  <div class="roadmap">
    <div class="roadmap-header">
      <div class="title">TOKAMAK NETWORK ROADMAP</div>
      <div class="prev-arrow" @click="prev" />
      <div class="next-arrow" @click="next" />
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
// import ButtonArrow from "@/components/ButtonArrow";

export default {
  components: {
    // "button-arrow": ButtonArrow,
  },
  data() {
    return {
      page: 0,
    };
  },
  computed: {
    ...mapState(["posts", "web3"]),
    selectedPosts() {
      // const first = this.page + 1;
      // console.log(this.posts[1].description);
      // console.log(this.posts[0].description.indexOf("<p>"));
      return this.posts.slice(this.page, this.page + 4);
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
    prev() {
      this.page !== 0 ? (this.page = this.page - 1) : (this.page = 0);
    },
    next() {
      this.page + 3 < this.posts.length
        ? (this.page = this.page + 1)
        : (this.page = this.posts.length - 3);
    },
  },
};
</script>

<style lang="scss" scope>
@import "RoadMapContainer.scss";
</style>
