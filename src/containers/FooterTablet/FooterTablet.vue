<template>
  <div class="footer">
    <div class="team-info">
      <div class="office" style="max-width: 296px; margin-right: 20px">
        <div class="title">Office</div>
        <!-- <div class="content">
          111 SOMERSET ROAD #06-07O 111 SOMERSET SINGAPORE 238164
        </div> -->
        <div class="content">E. hello@tokamak.network</div>
      </div>
      <div class="office" style="margin-right: 20px">
        <div class="title">Jobs</div>
        <div class="content">Recruitment</div>
        <div class="content">hr@tokamak.network</div>
      </div>
      <div class="office" style="margin-right: 60px">
        <div class="title">Social</div>
        <div class="social-content">
          <div @click="familyLink('Github')">Github</div>
          <div @click="familyLink('Medium')">Medium</div>
          <div @click="familyLink('Twitter')">Twitter</div>
          <!-- <div @click="familyLink('Facebook')">Facebook</div>
          <div @click="familyLink('YouTube')">YouTube</div> -->
        </div>
        <div class="social-content">
          <div style="margin-right: -1px" @click="familyLink('Linkedin')">
            Linkedin
          </div>
          <div @click="familyLink('Telegram')">Telegram</div>
          <div style="margin-left: -15px" @click="familyLink('Discord')">
            Discord <span>[KR/EN/CN]</span>
          </div>
          <!-- <div style="margin-left: -15px" @click="familyLink('Blog')">
            Onther Blog
          </div> -->
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
    familyLink(item) {
      if (item === "Github")
        window.open("https://github.com/tokamak-network", "_blank");
      else if (item === "Medium")
        window.open("https://medium.com/tokamak-network", "_blank");
      else if (item === "Twitter")
        window.open("https://twitter.com/tokamak_network", "_blank");
      else if (item === "Facebook")
        window.open("https://www.facebook.com/OntherInc", "_blank");
      else if (item === "YouTube")
        window.open("https://www.youtube.com/c/OntherInc", "_blank");
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
@import "FooterTablet.scss";
</style>
