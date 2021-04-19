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
          github: "",
          linkedin: "",
          image: KevinImage,
        },
        {
          name: "Darren Kim",
          role: "Blockchain Engineer",
          github: "",
          linkedin: "",
          image: ZoeImage,
        },
        {
          name: "Lakmi Weerapperuma",
          role: "Software Engineer",
          github: "",
          linkedin: "",
          image: KevinImage,
        },
        {
          name: "Jace Kang",
          role: "Operation Manager",
          github: "",
          linkedin: "",
          image: ZoeImage,
        },
        {
          name: "Thomas Shin",
          role: "Blockchain Engineer",
          github: "",
          linkedin: "",
          image: KevinImage,
        },
        {
          name: "Zena Park",
          role: "Blockchain Engineer",
          github: "",
          linkedin: "",
          image: ZoeImage,
        },
        {
          name: "Aiden Park",
          role: "Blockchain Engineer",
          github: "",
          linkedin: "",
          image: KevinImage,
        },
        {
          name: "Ale Son",
          role: "Software Engineer",
          github: "",
          linkedin: "",
          image: ZoeImage,
        },
        {
          name: "Kadyrbek Narmamatov",
          role: "Software Engineer",
          github: "",
          linkedin: "",
          image: ZoeImage,
        },
        {
          name: "Nnachi Isaac Onuwa",
          role: "Software Engineer",
          github: "",
          linkedin: "",
          image: ZoeImage,
        },
        {
          name: "Harry Oh",
          role: "Blockchain Engineer",
          github: "",
          linkedin: "",
          image: ZoeImage,
        },
        {
          name: "Haley Choi",
          role: "Operation Manager",
          github: "",
          linkedin: "",
          image: ZoeImage,
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
