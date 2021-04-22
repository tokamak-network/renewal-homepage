<template>
  <div class="member">
    <div v-if="!member.image" class="emptyImage bordered"></div>
    <img v-else class="memberImage" :src="member.image" alt="member.name" />
    <div class="flex flex-cols justify-between body">
      <div class="description">
        <div class="memberName">{{ member.name }}</div>
        <div class="memberRole">{{ member.role }}</div>
      </div>
      <div class="social-links">
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
      </div>
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
  margin-bottom: 10px;
}
.emptyImage {
  width: 120px;
  height: 128px;
  margin-bottom: 10px;
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
  overflow-wrap: break-word;
  word-wrap: break-word;
  width: 130px;
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
  overflow-wrap: break-word;
  word-wrap: break-word;
  width: 128px;
  margin-top: 5px;
}

.description {
  margin-bottom: 10px;
}

.bordered {
  border-radius: 5px;
  border: solid 1px #c6d2d9;
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
