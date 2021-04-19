<template>
  <div class="cta-section">
    <div class="heading">
      <h2>Go to service</h2>
      <span class="text-hint">We are networking the Layer 2 networks</span>
    </div>
    <div class="">
      <div class="body">
        <div class="cta-grid">
          <a href="#" class="action-cta">Community guide</a>
          <a href="#" class="action-cta">Jobs</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cta-grid {
  display: grid;
  column-gap: 10px;
  justify-content: center;
  row-gap: 10px;
  justify-items: center;
}

.body {
  margin: 40px 0;
  flex-direction: row;
}

.action-cta {
  padding: 23px 20px 23px 25px;
  border-radius: 4px;
  border: solid 1px #2a72e5;
  background-color: #ffffff;
  width: 250px;
}

a {
  text-decoration: none;
}

@media (min-width: 600px) {
  .cta-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
