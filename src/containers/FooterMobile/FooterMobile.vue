<template>
  <div class="footer">
    <div class="mobile-line" />
    <div class="team-info">
      <div class="office" style="width: 296px">
        <div class="title">Office</div>
        <div class="content">
          10 Anson Road #23-140 International Plaza Singapore
        </div>
        <div class="content">E. info@onther.io</div>
      </div>
      <div class="office" style="margin: 40px 0">
        <div class="title">Jobs</div>
        <div class="content">Recruitment</div>
        <div class="content">people@onther.io</div>
      </div>
      <div class="office" style="margin-right: 60px">
        <div class="title">Social</div>
        <div class="social-content">
          <a href="https://github.com/onther-tech">Github</a>
          <a href="https://medium.com/onther-tech">Medium</a>
          <a href="https://twitter.com/tokamak_network">Twitter</a>
          <a href="https://www.facebook.com/OntherInc">Facebook</a>
          <a href="https://www.youtube.com/c/OntherInc">YouTube</a>
          <a href="https://www.linkedin.com/company/onther-tech/">Linkedin</a>
          <a href="https://t.me/tokamak_network">Telegram</a>
          <a href="https://discord.gg/J4chV2zuAK"
            >Discord <span>[KR/EN/CN]</span></a
          >
          <a href="http://blog.onther.io">Onther Blog</a>
        </div>
      </div>
    </div>
    <div class="line" />
    <div class="copyright">
      <div class="copyright-content">
        <div class="onther">ONTHER PTE. LTD.</div>
        <div>Copyright © 2021 All Rights Reserved.</div>
        <div style="display: flex; justify-content: flex-start">
          <!-- <div style="margin-right: 30px">Privacy Policy</div>
          <div class="copyright-content">Terms & Conditions</div> -->
        </div>
      </div>
      <div class="upward" style="margin-right: 30px" @click="upward" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    upward() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "FooterMobile.scss";
</style>
