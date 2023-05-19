<template>
  <div class="container">
    <div class="heading">
      <h2>{{ $t("about.title") }}</h2>
      <span>{{ $t("about.sub-title") }}</span>
    </div>
    <div class="wrapper">
      <members-list :members="members" />
    </div>
    <div class="text-center">
      <cta-component />
    </div>
  </div>
</template>

<script>
import CTAComponent from "@/components/CTA";
import MembersList from "./components/MembersList";

import KevinImage from "../../assets/team/kevin_pic@3x.png";
// import ZoeImage from "../../assets/team/zoe_pic@3x.png";
// import DarrenImage from "../../assets/team/darren_pic@3x.png";
// import JasonImage from "../../assets/team/jason_pic@3x.png";
// import JaceImage from "../../assets/team/jace_pic@3x.png";
// import TomasImage from "../../assets/team/tomas_pic@3x.png";
// import LakmiImage from "../../assets/team/lakmi_pic@3x.png";
// import NanoImage from "../../assets/team/nano_pic@3x.png";
// import LucasImage from "../../assets/team/lucas_pic@3x.png";
// import KadyrImage from "../../assets/team/Kadyr_pic@3x.png";
import AleImage from "../../assets/team/ale_pic@3x.png";
// import JaceImage from "../../assets/team/jace_pic@3x.png";
import ZenaImage from "../../assets/team/zena_pic@3x.png";
// import SimonImage from "../../assets/team/simon_pic@3x.png";
// import HarryImage from "../../assets/team/harry-pic@3x.png";
// import JosephImage from "../../assets/team/joseph-pic@3x.png";
// import JuneImage from "../../assets/team/co-ceo-pic@3x.png";
import PraveenImage from "../../assets/team/praveen-pic@3x.png";
// // import JackImage from "../../assets/team/jack-pic@3x.png";
// import HarveyImage from "../../assets/team/harvey-pic@3x.png";
import JamieImage from "../../assets/team/jamie-pic@3x.png";
// import IreneImage from "../../assets/team/irene-pic@3x.png";
// import ChloeImage from "../../assets/team/chloe-pic@3x.png";
// import RichardImage from "../../assets/team/richard-pic@3x.png";
import SuahImage from "../../assets/team/suah_pic@3x.png";
// import OscarImage from "../../assets/team/Oscar_pic@3x.png";
import MonicaImage from "../../assets/team/monica-pic@3x.png";
// import OliviaImage from "../../assets/team/Olivia_pic@3x.png";
import JadenImage from "../../assets/team/jaden-pic@3x.png";
// // import MattImage from "../../assets/team/matt-pic@3x.png";
// import StevenImage from "../../assets/team/steven-pic@3x.png";
import RyanImage from "../../assets/team/ryan-pic@3x.png";
// import TheoImage from "../../assets/team/theo-pic@3x.png";
// import WyattImage from "../../assets/team/wyatt-pic@3x.png";
// import AlexImage from "../../assets/team/alex-pic@3x.png";
import EugeneImage from "../../assets/team/eugene-pic@3x.png";
// import StanImage from "../../assets/team/stan-pic@3x.png";

export default {
  data() {
    return {
      members: [
        {
          name: "Kevin Jeong",
          role: "CEO",
          github: "https://github.com/ggs134",
          linkedin: "https://www.linkedin.com/in/philosopher134/",
          image: KevinImage,
        },
        {
          name: "Zena Park",
          role: "Blockchain Engineer",
          github: "",
          linkedin: "",
          image: ZenaImage,
        },
        {
          name: "Ale Son",
          role: "Software Engineer",
          github: "",
          linkedin: "",
          image: AleImage,
        },
        {
          name: "Jamie Judd",
          role: "Core Researcher",
          github: "",
          linkedin: "",
          image: JamieImage,
        },
        {
          name: "Suah Kim",
          role: "Core Researcher",
          github: "",
          linkedin: "",
          image: SuahImage,
        },
        {
          name: "Jaden Kong",
          role: "Managing Director",
          github: "",
          linkedin: "",
          image: JadenImage,
        },
        {
          name: "Praveen Surendran",
          role: "Researcher",
          github: "",
          linkedin: "",
          image: PraveenImage,
        },
        {
          name: "Monica Kim",
          role: "UX/UI Designer",
          github: "",
          linkedin: "",
          image: MonicaImage,
        },
        {
          name: "Ryan Murray",
          role: "UX/UI Designer & Planner",
          github: "",
          linkedin: "",
          image: RyanImage,
        },
        // {
        //   name: "Wyatt Park",
        //   role: "Economist",
        //   github: "",
        //   linkedin: "",
        //   image: WyattImage,
        // },
        {
          name: "Eugene Cho",
          role: "UXUI Planner & PM",
          github: "",
          linkedin: "",
          image: EugeneImage,
        },
      ],
    };
  },
  components: {
    "cta-component": CTAComponent,
    "members-list": MembersList,
  },
};
</script>

<style lang="scss" scoped>
@media all and (max-width: 700px) {
  .heading {
    h2 {
      font-size: 28px !important;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.21 !important;
      letter-spacing: normal;
      text-align: center;
      color: #1c1c1c;
    }
    span {
      font-size: 14px !important;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.29 !important;
    }
  }
}
.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 78px;
  h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 38px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: normal;
    text-align: center;
    color: #1c1c1c;
    margin: 0;
  }
  span {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
    text-align: center;
    color: #808992;
    margin-top: 20px;
  }
}
.container {
  margin: 80px 0 180px 0;
  width: 100%;
}

.wrapper {
  max-width: 1110px;
  margin: 0 auto 30px;
}
@media all and (max-width: 700px) {
  h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 28px;
  }
  span {
    max-width: 275px;
    font-size: 14px;
  }
}
</style>
