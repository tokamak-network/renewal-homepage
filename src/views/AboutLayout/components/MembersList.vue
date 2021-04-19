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

<style lang="scss" scoped></style>
