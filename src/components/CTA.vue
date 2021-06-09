<template>
  <div class="cta-section">
    <div class="heading">
      <h2>{{ $t("about.under") }}</h2>
      <span class="text-hint">{{ $t("about.under-sub") }}</span>
    </div>
    <div class="">
      <div class="body">
        <div class="cta-grid">
          <a
            href="https://discord.gg/J4chV2zuAK"
            class="flex justify-between align-center action-cta"
          >
            <span style="padding-left: 5px">Join Community</span>
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
            <span style="padding-left: 5px">Jobs</span>
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
.heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 78px;

  h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 38px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.37;
    letter-spacing: normal;
    text-align: center;
    color: #1c1c1c;
    margin: 0;
  }

  span {
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    margin-top: 10px;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #808992;
  }
}

.cta-section {
  margin-top: 50px;
  font-family: "Open Sans", sans-serif;
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
  display: flex;
  justify-content: space-between;
}

a {
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  // line-height: 1.36;
  letter-spacing: normal;
  text-align: left;
  color: #2a72e5;
}

.navigation-arrow {
  width: 19px;
  height: 12px;
  padding-top: 3px;
}
@media all and (max-width: 700px) {
  .cta-section {
    margin-bottom: 120px !important;
  }
  .heading {
    h2 {
      font-size: 20px;
    }
    span {
      width: 213px;
      font-size: 14px;
    }
  }

  .mobile-line {
    width: 100%;
    height: 1px;
    background-color: #dfe4ee;
  }
}
</style>
