<template>
  <div class="container">
    <members-list :members="members" />
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
import JaceImage from "../../assets/team/jace_pic@3x.png";
import TomasImage from "../../assets/team/tomas_pic@3x.png";
import LakmiImage from "../../assets/team/lakmi_pic@3x.png";

export default {
  data() {
    return {
      members: [
        {
          name: "Kevin Jeong",
          role: "CEO",
          github: "",
          linkedin: "",
          image: KevinImage,
        },
        {
          name: "Zoe Kim",
          role: "COO",
          github: "",
          linkedin: "",
          image: ZoeImage,
        },
        {
          name: "Jason Hwang",
          role: "Blockchain Engineer",
          github: "https://github.com/cd4761",
          linkedin: "https://linkedin.com/in/재승-황-3b207190",
          image: JasonImage,
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
          name: "Lakmi Weerapperuma",
          role: "Software Engineer",
          github: "https://github.com/Lakmi94",
          linkedin: "https://www.linkedin.com/in/lakmi-kulathunga/",
          image: LakmiImage,
        },
        {
          name: "Jace Kang",
          role: "Operation Manager",
          github: "",
          linkedin:
            "https://www.linkedin.com/in/%EC%A3%BC%ED%98%95-jace-kang-%EA%B0%95-025a73148/",
          image: JaceImage,
        },
        {
          name: "Thomas Shin",
          role: "Blockchain Engineer",
          github: "https://github.com/sgnoo",
          linkedin: "http://www.linkedin.com/in/sgnoo",
          image: TomasImage,
        },
        {
          name: "Zena Park",
          role: "Blockchain Engineer",
          github: "https://github.com/Zena-park",
          linkedin: "",
          image: "",
        },
        {
          name: "Aiden Park",
          role: "Blockchain Engineer",
          github: "",
          linkedin:
            "https://www.linkedin.com/in/%EC%A0%95%EC%9B%90-%EB%B0%95-042848157/",
          image: "",
        },
        {
          name: "Ale Son",
          role: "Software Engineer",
          github: "",
          linkedin: "",
          image: "",
        },
        {
          name: "Kadyrbek Narmamatov",
          role: "Software Engineer",
          github: "https://github.com/SEFI2",
          linkedin: "http://linkedin.com/knarmamatov",
          image: "",
        },
        {
          name: "Nnachi Isaac Onuwa",
          role: "Software Engineer",
          github: "https://github.com/iamonuwa",
          linkedin: "https://linkedin.com/in/iamonuwa",
          image: "",
        },
        {
          name: "Harry Oh",
          role: "Blockchain Engineer",
          github: "https://github.com/harryoh",
          linkedin: "https://www.linkedin.com/in/harry-oh/",
          image: "",
        },
        {
          name: "Haley Choi",
          role: "Operation Manager",
          github: "",
          linkedin: "https://www.linkedin.com/in/hyejeonghaleychoi",
          image: "",
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
.container {
  margin-top: 80px;
}
</style>
