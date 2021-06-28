<template>
  <div class="layer2-container">
    <div class="layer2">
      <img class="img" src="@/assets/solution-img-01.svg" />
      <div class="title">{{ $t("solutions.layer2.opru.title") }}</div>
      <div class="description">
        {{ $t("solutions.layer2.opru.description") }}
      </div>
    </div>
    <div class="layer2">
      <img class="img" src="@/assets/solution-img-02.svg" />
      <div class="title">{{ $t("solutions.layer2.zk-rollup.title") }}</div>
      <div class="description">
        {{ $t("solutions.layer2.zk-rollup.description") }}
      </div>
    </div>
    <div class="layer2">
      <img class="img" src="@/assets/solution-img-03.svg" />
      <div class="title">{{ $t("solutions.layer2.plasma.title") }}</div>
      <div class="description">
        {{ $t("solutions.layer2.plasma.description") }}
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "Layer2Container.scss";
@import "Layer2Container-1280.scss";
@import "Layer2Container-tablet.scss";
@import "Layer2Container-mobile.scss";
</style>
