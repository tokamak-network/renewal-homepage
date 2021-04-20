<template>
  <div class="cta-section">
    <div class="heading">
      <h2>Go to service</h2>
      <span class="text-hint">We are networking the Layer 2 networks</span>
    </div>
    <div class="">
      <div class="body">
        <div class="cta-grid">
          <a href="#" class="flex justify-between align-center action-cta">
            <span>Community guide</span>
            <img
              class="navigation-arrow"
              src="../assets/goto_arrow@3x.png"
              alt="Go to Jobs"
            />
          </a>
          <a
            href="https://medium.com/onther-tech/job-openings-blockchain-tech-902098537088"
            target="_blank"
            rel="noopener noreferrer"
            class="flex justify-between align-center action-cta"
          >
            <span>Jobs</span>
            <img
              class="navigation-arrow"
              src="../assets/goto_arrow@3x.png"
              alt="Go to Jobs"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cta-section {
  margin-top: 50px;
}

.cta-grid {
  display: grid;
  column-gap: 10px;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, 300px);
  row-gap: 10px;
  justify-items: center;
}

.body {
  margin: 40px 0;
  flex-direction: row;
}

.action-cta {
  padding: 18px;
  border-radius: 4px;
  border: solid 1px #2a72e5;
  background-color: #ffffff;
  width: 250px;
}

a {
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: #2a72e5;
}

.navigation-arrow {
  width: 19px;
  height: 12px;
}

@media (min-width: 600px) {
  .cta-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
