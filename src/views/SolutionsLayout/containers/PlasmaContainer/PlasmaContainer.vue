<template>
    <div class="plasma">
       <div v-for="post in plasma" :key="post.index" class="plasma-content">
           <div>{{post.title}}</div>
           <div>{{post.content}}</div>

       </div>
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
    computed: {
    ...mapState(["plasma",]),
  },
}
</script>
<style lang="scss" scoped>
@import "PlasmaContainer.scss";
</style>