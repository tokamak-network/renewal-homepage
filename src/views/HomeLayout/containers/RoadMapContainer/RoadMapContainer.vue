<template>
  <div class="roadmaps">
    <div class="roadmap-header">
      <div class="title">TOKAMAK NETWORK ROADMAP</div>
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
          <div class="roadmap-detail">{{ roadmap.content }}</div>
        </div>
      </transition-group>
    </div>
    <div class="line" />
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
    };
  },
  computed: {
    ...mapState(["roadmap", "web3"]),
    selectedRoadmap() {
      return this.roadmap.slice(this.page, this.page + 4);
    },
  },
  methods: {
    prev() {
      this.direction = false;
      this.page !== 0 ? (this.page = this.page - 1) : (this.page = 0);
    },
    next() {
      this.direction = true;
      this.page + 4 < this.roadmapLength
        ? (this.page = this.page + 1)
        : (this.page = this.roadmapLength - 4);
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
</style>
