<template>
  <div class="button-step">
    <button @click="click">
      <img
        v-if="type === 'prev'"
        class="prev"
        src="@/assets/arrow-pre.png"
        alt=""
      />
      <img
        v-if="type === 'next'"
        class="next"
        src="@/assets/arrow-next.png"
        alt=""
      />
    </button>
  </div>
</template>

<script>
// import Button from "@/components/Button.vue";

export default {
  // extends: Button,
  props: {
    type: {
      type: String,
      default: "",
      validator: (value) => {
        return ["prev", "next"].indexOf(value) !== -1;
      },
    },
  },
  methods: {
    click() {
      this.$emit("on-clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "ButtonArrow.scss";
</style>
