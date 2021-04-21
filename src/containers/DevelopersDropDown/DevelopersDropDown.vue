<template>
  <div class="developers">
    <div class="developers-line" />
    <div class="tab-container">
      <button class="tab" @click="click('https://github.com/Onther-Tech')">
        Github
      </button>
      <button class="tab" @click="click('https://docs.tokamak.network/')">
        Documents
      </button>
      <button
        class="tab"
        @click="click('https://onther-tech.github.io/papers/tech-paper.pdf')"
      >
        Papers
      </button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    click(link) {
      window.open(link, "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "DevelopersDropDown.scss";
</style>
