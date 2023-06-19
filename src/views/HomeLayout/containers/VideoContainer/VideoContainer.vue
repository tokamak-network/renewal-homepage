<template>
  <div class="intro-video">
    <div class="intro-video__title">JOIN L2 NETWORKS</div>
    <div class="intro-video__subtitle">{{ $t("home.intro.subText") }}</div>
    <div class="intro-video__content">
      <video ref="videoPlayer" controls class="intro-video__content__player">
        <source :src="videoUrl" type="video/mp4" />
      </video>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      videoUrl: require("@/assets/testing.mp4"),
    };
  },
  mounted() {
    this.$refs.videoPlayer.addEventListener(
      "loadedmetadata",
      this.onVideoLoaded
    );
  },
  beforeDestroy() {
    this.$refs.videoPlayer.removeEventListener(
      "loadedmetadata",
      this.onVideoLoaded
    );
  },
  methods: {
    playVideo() {
      this.$refs.videoPlayer.play();
      this.isPlaying = true;
    },
  },
};
</script>

<style lang="scss" scope>
@import "VideoContainer.scss";
@import "VideoContainer-1280.scss";
@import "VideoContainer-tablet.scss";
@import "VideoContainer-mobile.scss";
</style>
