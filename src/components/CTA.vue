<template>
  <div class="cta-section">
    <div class="heading">
      <h2>{{ $t("about.under") }}</h2>
      <span class="text-hint">{{ $t("about.under-sub") }}</span>
    </div>
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
    <div class="heading" style="margin-top: 100px">
      <h2>{{ $t("about.newsletter-title") }}</h2>
      <span class="text-hint">{{ $t("about.newsletter-subtitle") }}</span>
    </div>
    <div class="body">
      <div class="cta-grid">
        <div class="subscribe" style="width: 500px">
          <input
            class="input"
            type="email"
            placeholder="Enter your e-mail here"
            style="border: none; width: 350px; height: 30px"
            @input="updateEmail($event.target.value)"
          />
          <button class="subs-button" @click="subscribe()">Subscribe</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    updateEmail(email) {
      this.email = email;
    },
    async subscribe() {
      const regex = new RegExp("[a-z0-9]+@[a-z]+\\.[a-z]{2,3}");
      if (!regex.test(this.email)) {
        window.alert("Please insert correct email");
      } else {
        const token = process.env.VUE_APP_ACCESS_TOKEN;
        const headers = {
          AccessToken: token,
        };
        await axios
          .post(
            process.env.VUE_APP_URL,
            {
              eventOccuredBy: "MANUAL",
              subscribers: [
                {
                  email: this.email,
                },
              ],
            },
            { headers }
          )
          .then((res) => {
            if (res.data.Value.update[0].email) {
              window.alert(
                `${res.data.Value.update[0].email} successfully inserted to subscribe list!`
              );
            }
          })
          .catch((err) => window.alert(err));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.subscribe {
  border-radius: 4px;
  border: solid 1px #2a72e5;
  background-color: #ffffff;
  width: 250px;
  display: flex;
  width: 500px;
  height: 50px;
  display: flex;
  flex-direction: row;
  padding: 0 10px 0 10px;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}
.input {
  font-size: 20px;
}
.input:focus {
  border: none;
  outline: none;
}
.subs-button {
  color: white;
  background: #2a72e5;
  border-radius: 6px;
  border: none;
  width: 100px;
  height: 40px;
  cursor: pointer;
  font-size: 18px;
}
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
