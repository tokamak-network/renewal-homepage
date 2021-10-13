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
import ZoeImage from "../../assets/team/zoe_pic@3x.png";
import DarrenImage from "../../assets/team/darren_pic@3x.png";
import JasonImage from "../../assets/team/jason_pic@3x.png";
// import JaceImage from "../../assets/team/jace_pic@3x.png";
import TomasImage from "../../assets/team/tomas_pic@3x.png";
import LakmiImage from "../../assets/team/lakmi_pic@3x.png";
import AidenImage from "../../assets/team/aiden_pic@3x.png";
import NanoImage from "../../assets/team/nano_pic@3x.png";
import LucasImage from "../../assets/team/lucas_pic@3x.png";
import KadyrImage from "../../assets/team/Kadyr_pic@3x.png";
import AleImage from "../../assets/team/ale_pic@3x.png";
import FrankImage from "../../assets/team/frank_pic@3x.png";
import JaceImage from "../../assets/team/jace_pic@3x.png";
import ZenaImage from "../../assets/team/zena_pic@3x.png";
import SimonImage from "../../assets/team/simon_pic@3x.png";
import HarryImage from "../../assets/team/harry-pic@3x.png";
import JosephImage from "../../assets/team/joseph-pic@3x.png";
import JuneImage from "../../assets/team/co-ceo-pic@3x.png";
import PraveenImage from "../../assets/team/praveen-pic@3x.png";
import JackImage from "../../assets/team/jack-pic@3x.png";
import JamieImage from "../../assets/team/jamie-pic@3x.png";

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
          name: "June sim",
          role: "Co-CEO",
          linkedin: "https://www.linkedin.com/in/junsik-sim-a447421b2/",
          image: JuneImage,
        },
        {
          name: "Zoe Kim",
          role: "COO",
          github: "https://github.com/khk77",
          linkedin: "https://www.linkedin.com/in/zoe-kim-171a4116b/",
          image: ZoeImage,
        },
        {
          name: "Aiden Park",
          role: "Senior Researcher",
          github: "",
          linkedin:
            "https://www.linkedin.com/in/%EC%A0%95%EC%9B%90-%EB%B0%95-042848157/",
          image: AidenImage,
        },
        {
          name: "Darren Kim",
          role: "Blockchain Engineer",
          github: "https://github.com/modagi",
          linkedin:
            "https://www.linkedin.com/in/%EC%84%B1%EC%A7%84-%EA%B9%80-1a7594132/",
          image: DarrenImage,
        },
        {
          name: "Zena Park",
          role: "Blockchain Engineer",
          github: "https://github.com/Zena-park",
          linkedin: "",
          image: ZenaImage,
        },
        {
          name: "Thomas Shin",
          role: "Blockchain Engineer",
          github: "https://github.com/sgnoo",
          linkedin: "http://www.linkedin.com/in/sgnoo",
          image: TomasImage,
        },
        {
          name: "Jason Hwang",
          role: "Blockchain Engineer",
          github: "https://github.com/cd4761",
          linkedin: "https://linkedin.com/in/재승-황-3b207190",
          image: JasonImage,
        },
        {
          name: "Kadyrbek Narmamatov",
          role: "Software Engineer",
          github: "https://github.com/SEFI2",
          linkedin: "http://linkedin.com/in/knarmamatov",
          image: KadyrImage,
        },
        {
          name: "Harry Oh",
          role: "Blockchain Engineer",
          github: "https://github.com/harryoh",
          linkedin: "https://www.linkedin.com/in/harry-oh/",
          image: HarryImage,
        },
        {
          name: "Lakmi Weerapperuma",
          role: "Software Engineer",
          github: "https://github.com/Lakmi94",
          linkedin: "https://www.linkedin.com/in/lakmi-kulathunga/",
          image: LakmiImage,
        },
        {
          name: "Ale Son",
          role: "Software Engineer",
          github: "https://github.com/SonYoungsung",
          linkedin: "",
          image: AleImage,
        },
        // {
        //   name: "Harvey Jo",
        //   role: "Blockchain Engineer",
        //   github: "",
        //   linkedin:
        //     "https://www.linkedin.com/in/%ED%98%81%EC%83%81-%EC%A1%B0-918103210/",
        //   image: "",
        // },
        {
          name: "Lucas Jung",
          role: "UX/UI Developer",
          github: "",
          linkedin: "https://www.linkedin.com/in/kyossiro/",
          image: LucasImage,
        },
        {
          name: "Frank Noh",
          role: "Business Developer",
          github: "",
          linkedin: "https://www.linkedin.com/in/frank-noh-311870194/",
          image: FrankImage,
        },
        {
          name: "Simon Moon",
          role: "Communication Manager",
          github: "",
          linkedin: "",
          image: SimonImage,
        },
        {
          name: "Jace Kang",
          role: "Operation Manager",
          github: "",
          linkedin: "https://www.linkedin.com/in/joohyong-kang/",
          image: JaceImage,
        },
        {
          name: "Nano Kim",
          role: "Operation Manager",
          github: "",
          linkedin: "http://www.linkedin.com/in/nano-kim-38b40a209",
          image: NanoImage,
        },
        {
          name: "Joseph Nemelka",
          role: "Business Developer",
          github: "",
          linkedin: "https://www.linkedin.com/in/joseph-nemelka-a3b703142/",
          image: JosephImage,
        },
        {
          name: "Praveen Surendran",
          role: "Researcher",
          github: "",
          linkedin: "https://www.linkedin.com/in/praveen-s-058554115/",
          image: PraveenImage,
        },
        {
          name: "Jack Oh",
          role: "Translator",
          github: "",
          linkedin: "https://www.linkedin.com/in/oh-yoon-sok-5b5004169/",
          image: JackImage,
        },
        {
          name: "Jamie Judd",
          role: "Core Researcher",
          github: "",
          linkedin:
            "https://www.linkedin.com/in/jamie-judd-37639a36/?originalSubdomain=uk",
          image: JamieImage,
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
