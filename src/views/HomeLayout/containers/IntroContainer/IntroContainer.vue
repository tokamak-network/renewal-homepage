<template>
  <div class="intro-section">
    <div class="contents">
      <img src="@/assets/main-icon-01.png" class="img" />
      <div class="title">{{ $t("home.intro.specific1.title") }}</div>
      <div class="content">
        {{ $t("home.intro.specific1.content") }}
      </div>
    </div>
    <div class="contents">
      <img src="@/assets/main-icon-02.png" class="img" />
      <div class="title">{{ $t("home.intro.specific2.title") }}</div>
      <div class="content">
        {{ $t("home.intro.specific2.content") }}
      </div>
    </div>
    <div class="contents">
      <img src="@/assets/main-icon-03.png" class="img" />
      <div class="title">{{ $t("home.intro.specific3.title") }}</div>
      <div class="content">
        {{ $t("home.intro.specific3.content") }}
      </div>
    </div>
    <div class="contents">
      <img src="@/assets/main-icon-04.png" class="img" />
      <div class="title">{{ $t("home.intro.specific4.title") }}</div>
      <div class="content">
        {{ $t("home.intro.specific4.content") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
@import "IntroContainer.scss";
@import "IntroContainer-tablet.scss";
@import "IntroContainer-mobile.scss";
</style>
