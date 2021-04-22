<template>
  <footer>
    <div class="footer">
      <div class="team-info">
        <div class="onther">ONTHER PTE. LTD.</div>
        <div class="office">
          <div class="title">Office</div>
          <div class="content">
            10 Anson Road #23-140 International Plaza Singapore
          </div>
          <div class="content">E. info@onther.io</div>
        </div>
        <div class="office">
          <div class="title">Jobs</div>
          <div class="content">Recruitment</div>
          <div class="content">job@onther.io</div>
        </div>
        <div class="office">
          <div class="title">Social</div>
          <div class="social-content">
            <a href="https://github.com/onther-tech">Github</a>
            <a href="https://medium.com/onther-tech">Medium</a>
            <a href="https://twitter.com/tokamak_network">Twitter</a>
            <a href="https://www.facebook.com/OntherInc">Facebook</a>
            <a href="https://www.youtube.com/c/OntherInc">YouTube</a>
            <a href="https://www.linkedin.com/company/onther-tech/">Linkedin</a>
            <a href="https://t.me/tokamak_network">Telegram</a>
            <a href="https://discord.gg/SZw2WSR"
              >Discord <small>[KR/EN/CN]</small></a
            >
            <a href="http://blog.onther.io">Onther Blog</a>
          </div>
        </div>
      </div>
      <div class="line" />
      <div class="copyright">
        <div class="copyright-content">
          <div style="margin-right: 160px">
            Copyright © 2021 All Rights Reserved.
          </div>
          <div style="margin-right: 60px">Privacy Policy</div>
          <div class="copyright-content">Terms & Conditions</div>
        </div>
        <div class="upward" @click="upward" />
      </div>
    </div>
  </footer>
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
@import "Footer.scss";
</style>
