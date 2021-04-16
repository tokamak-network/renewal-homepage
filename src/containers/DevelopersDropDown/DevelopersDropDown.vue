<template>
  <div class="developers"> 
    <div class="developers-line" />
    <div class="tab-container">
      <button class="tab" @click="click()">Github</button>
      <button class="tab">Documents</button>
     <button class="tab">Papers</button>
    </div>
  </div>
</template>
<script>
export default {
   methods: {
    click() {
      console.log('hi');
    }
}
};
</script>
<style lang="scss" scoped>
@import "DevelopersDropDown.scss";
</style>
