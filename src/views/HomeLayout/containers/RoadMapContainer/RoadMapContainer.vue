<template>
  <div class="roadmaps">
    <div class="roadmap-header">
      <div class="title">TOKAMAK NETWORK ROADMAP</div>
      <div class="prev-arrow" @click="prev" />
      <div class="next-arrow" @click="next" />
    </div>
    <div class="roadmap-section">
      <div
        v-for="roadmap in selectedRoadmap"
        :key="roadmap.guid"
        class="roadmap"
      >
        <div class="roadmap-subject">
          <div v-if="subjectChecker(roadmap.index)">
            {{ roadmap.subject }}
          </div>
        </div>
        <div class="roadmap-title">{{ roadmap.title }}</div>
        <div class="roadmap-content">{{ roadmap.content }}</div>
      </div>
    </div>
    <div class="line" />
  </div>
</template>

<script>
import { mapState } from "vuex";
// import ButtonArrow from "@/components/ButtonArrow";

export default {
  components: {
    // "button-arrow": ButtonArrow,
  },
  data() {
    return {
      page: 0,
      show: true,
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
      this.page !== 0 ? (this.page = this.page - 1) : (this.page = 0);
    },
    next() {
      this.page + 4 < 9 ? (this.page = this.page + 1) : (this.page = 9 - 4);
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
