<template>
  <div class="footer">
    <div class="team-info">
      <div class="onther" style="margin-right: 73px; width: 296px">
        TOKAMAK NETWORK
      </div>
      <div class="office" style="width: 227px; margin-right: 80px">
        <div class="title">Office</div>
        <!-- <div class="content">
          111 SOMERSET ROAD #06-07O 111 SOMERSET SINGAPORE 238164
        </div> -->
        <div class="content" style="color: #4c4c4c">
          E. hello@tokamak.network
        </div>
      </div>
      <div class="office" style="margin-right: 80px">
        <div class="title">Jobs</div>
        <div class="content">Recruitment</div>
        <div class="content">hr@tokamak.network</div>
      </div>
      <div class="office">
        <div class="title">Social</div>
        <div class="social-content">
          <div style="margin-right: 50px" @click="familyLink('Github')">
            Github
          </div>
          <div style="margin-right: 50px" @click="familyLink('Medium')">
            Medium
          </div>
          <div style="margin-right: 50px" @click="familyLink('Twitter')">
            Twitter
          </div>
          <!-- <div @click="familyLink('Facebook')">Facebook</div> -->
          <!-- <div @click="familyLink('YouTube')">YouTube</div> -->
        </div>
        <div class="social-content">
          <div style="margin-right: 38px" @click="familyLink('Linkedin')">
            Linkedin
          </div>
          <div style="margin-right: 42px" @click="familyLink('Telegram')">
            Telegram
          </div>
          <div style="margin-right: 50px" @click="familyLink('Discord')">
            Discord <span>[KR/EN/CN]</span>
          </div>
          <!-- <div @click="familyLink('Blog')">Onther Blog</div> -->
        </div>
      </div>
    </div>
    <div class="line" />
    <div class="copyright">
      <div class="copyright-content">
        <div style="margin-right: 160px">
          Copyright © {{ year }} All Rights Reserved.
        </div>
        <!-- <div style="margin-right: 60px">Privacy Policy</div>
        <div class="copyright-content">Terms & Conditions</div> -->
      </div>
      <div class="upward" @click="upward" />
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
    familyLink(item) {
      if (item === "Github")
        window.open("https://github.com/tokamak-network", "_blank");
      else if (item === "Medium")
        window.open("https://medium.com/tokamak-network", "_blank");
      else if (item === "Twitter")
        window.open("https://twitter.com/tokamak_network", "_blank");
      else if (item === "Linkedin")
        window.open(
          "https://www.linkedin.com/company/tokamaknetwork/",
          "_blank"
        );
      else if (item === "Telegram")
        window.open("https://t.me/tokamak_network", "_blank");
      else if (item === "Discord") window.open("https://discord.gg/J4chV2zuAK");
      else if (item === "Blog") window.open("http://blog.onther.io");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "Footer-1280.scss";
@import "Footer.scss";
</style>
