<template>
  <div class="footer">
    <div class="mobile-line" />
    <div class="team-info">
      <div class="office" style="width: 296px">
        <div class="title">Office</div>
        <!-- <div class="content">
          111 SOMERSET ROAD #06-07O 111 SOMERSET SINGAPORE 238164
        </div> -->
        <div class="content">E. hello@tokamak.network</div>
      </div>
      <div class="office" style="margin: 40px 0">
        <div class="title">Jobs</div>
        <div class="content">Recruitment</div>
        <div class="content">hr@tokamak.network</div>
      </div>
      <div class="office" style="margin-right: 60px">
        <div class="title">Social</div>
        <div class="social-content">
          <a href="https://github.com/tokamak-network">Github</a>
          <a href="https://medium.com/tokamak-network">Medium</a>
          <a href="https://twitter.com/tokamak_network">Twitter</a>
          <!-- <a href="https://www.facebook.com/OntherInc">Facebook</a> -->
          <!-- <a href="https://www.youtube.com/c/OntherInc">YouTube</a> -->
          <a href="https://www.linkedin.com/company/tokamaknetwork/"
            >Linkedin</a
          >
          <a href="https://t.me/tokamak_network">Telegram</a>
          <a href="https://discord.gg/J4chV2zuAK"
            >Discord <span>[KR/EN/CN]</span></a
          >
          <a href="https://docs.tokamak.network">Documentation</a>
          <!-- <a href="http://blog.onther.io">Onther Blog</a> -->
        </div>
      </div>
    </div>
    <div class="line" />
    <div class="copyright">
      <div class="copyright-content">
        <div class="onther">TOKAMAK NETWORK</div>
        <div>Copyright © {{ year }} All Rights Reserved.</div>
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
import moment from "moment";

export default {
  data() {
    return {
      year: 2023,
    };
  },
  created() {
    const now = moment().year();
    this.year = now;
  },
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
