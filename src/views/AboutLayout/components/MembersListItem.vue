<template>
  <div class="member">
    <div v-if="!member.image" class="emptyImage bordered"></div>
    <img v-else class="memberImage" :src="member.image" alt="member.name" />
    <div class="flex flex-row justify-between align-center body">
      <div class="flex flex-cols">
        <span class="memberName">{{ member.name }}</span>
        <span class="memberRole">{{ member.role }}</span>
      </div>
      <!-- <div class="social-links">
        <a
          v-if="member.github"
          target="_blank"
          rel="noopener noreferrer"
          :href="member.github"
        >
          <img src="../../../assets/github-s-icon@3x.png" alt="" />
        </a>
        <a
          v-if="member.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          :href="member.linkedin"
        >
          <img src="../../../assets/linkedin-s-icon@3x.png" alt="" />
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["member"],
};
</script>

<style lang="scss" scoped>
.memberImage {
  width: auto;
  height: 128px;
  object-fit: scale-down;
}
.emptyImage {
  width: 100px;
  height: 128px;
}
.memberName {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: #1c1c1c;
  word-break: break-all;
  width: 128px;
}

.memberRole {
  font-family: "Open Sans", sans-serif;
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  color: #808992;
  word-break: break-all;
  width: 128px;
}

.bordered {
  border-radius: 5px;
  border: solid 1px #c6d2d9;
}

.body {
  width: 246px;
}

.social-links {
  a {
    img {
      width: 20px;
      height: 20px;
      object-fit: contain;
    }
    &:not(:last-of-type) {
      margin-right: 8px;
    }
  }
}
</style>
