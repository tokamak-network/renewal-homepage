<template>
  <div class="intro-video">
    <div class="intro-video__title">JOIN L2 NETWORKS</div>
    <div class="intro-video__subtitle">{{ $t("home.intro.subText") }}</div>
    <div class="intro-video__content">
      <iframe
        id="promotionalVideo"
        title="L2 Promotional Video"
        class="intro-video__content__iframe"
        src="https://www.youtube.com/watch?v=FS1c5C170e8"
      >
      </iframe>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
@import "VideoContainer.scss";
@import "VideoContainer-1280.scss";
@import "VideoContainer-tablet.scss";
@import "VideoContainer-mobile.scss";
</style>
