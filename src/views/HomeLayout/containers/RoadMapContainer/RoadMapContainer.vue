<template>
  <div class="roadmaps">
    <div class="roadmap-header">
      <div class="title">{{ $t("home.roadmap.title") }}</div>
      <div class="prev-arrow" @click="prev" />
      <div class="next-arrow" @click="next" />
    </div>
    <div class="roadmap-section">
      <transition-group
        tag="div"
        name="direction ? 'slide-right' : 'slide-left"
        class="transition"
      >
        <div
          v-for="roadmap in selectedRoadmap"
          :key="roadmap.index"
          class="roadmap"
        >
          <div class="roadmap-subject">
            <div v-if="subjectChecker(roadmap.index)">
              {{ roadmap.subject }}
            </div>
          </div>
          <div class="roadmap-title">{{ roadmap.title }}</div>
          <div
            v-for="content in roadmap.contents"
            :key="content.index"
            class="roadmap-detail"
          >
            <div>{{ content }}</div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      page: 0,
      show: true,
      rightClicked: false,
      leftClicked: false,
      direction: true,
      roadmapLength: 9,
      width: 0,
    };
  },
  computed: {
    ...mapState(["roadmap", "web3"]),
    selectedRoadmap() {
      if (this.width > 1270) {
        return this.roadmap.slice(this.page, this.page + 4);
      } else if (this.width > 700 && this.width <= 1270) {
        return this.roadmap.slice(this.page, this.page + 2);
      } else {
        return this.roadmap.slice(this.page, this.page + 1);
      }
    },
  },
  created() {
    this.width = window.innerWidth;
    window.addEventListener("resize", this.handleResize);
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
    },
    setCount() {
      if (this.width > 1280) {
        return 4;
      } else if (this.width > 700 && this.width <= 1280) {
        return 2;
      } else {
        return 1;
      }
    },
    prev() {
      this.direction = false;
      this.page !== 0 ? (this.page = this.page - 1) : (this.page = 0);
    },
    next() {
      this.direction = true;
      this.page + this.setCount() < this.roadmapLength
        ? (this.page = this.page + 1)
        : (this.page = this.roadmapLength - this.setCount());
    },
    subjectChecker(index) {
      if (this.page != index) {
        if (this.roadmap[this.page].subject === this.roadmap[index].subject) {
          return false;
        } else if (this.page < 5 && index > 5) {
          return false;
        } else {
          return true;
        }
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scope>
@import "RoadMapContainer.scss";
@import "RoadMapContainer-tablet.scss";
@import "RoadMapContainer-mobile.scss";
</style>
