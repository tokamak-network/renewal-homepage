<template>
  <div class="grid">
    <members-list-item
      v-for="member in members"
      :key="member.id"
      :member="member"
    />
  </div>
</template>

<script>
import MembersListItem from "./MembersListItem";
export default {
  props: ["members"],
  components: {
    "members-list-item": MembersListItem,
  },
};
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  column-gap: 60px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 60px;
  justify-content: center;
  row-gap: 50px;
}
</style>
