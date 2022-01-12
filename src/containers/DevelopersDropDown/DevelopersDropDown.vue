<template>
  <div>
    <div class="blank" />
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
          Tech Papers
        </button>
        <button class="tab" @click="click(whitepaper)">White Papers</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["whitepaper"]),
  },
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
