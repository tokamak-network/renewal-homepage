import Vue from "vue";
import Vuex from "vuex";

// import { parseString } from "xml2js";

// import Web3 from "web3";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    web3: null,
    posts: [],
    roadmap: [],
    launched: false,
    loaded: false,
    locale: "en_US",
    whitepaper: "",
    whitepaperKR:
      "https://github.com/tokamak-network/papers/blob/master/cryptoeconomics/tokamak-cryptoeconomics-kr.md",
    whitepaperEN:
      "https://github.com/tokamak-network/papers/blob/master/cryptoeconomics/tokamak-cryptoeconomics-en.md",
    roadmapEN: [
      {
        index: "0",
        subject: "Networking the Layer 2 networks",
        title: "Support all types of layer 2 protocol in Tokamak Network.",
        contents: [
          "Support Optimistic Rollup : Optimism, Arbitrum, and more",
          "Support Zk-Rollup : StarkEx, zkSync, and more",
          "Support Validium : StarkEx and more",
          "Support Plasma : Tokamak plasma and more",
          "Add custom layer 2 building protocol",
        ],
      },
      {
        index: "1",
        subject: "Networking the Layer 2 networks",
        title: "Integrate all types of layer 2 protocols with TON ecosystem",
        contents: [
          "Integrate all layer 2 protocols with TON seigniorage pool, PowerTON game, and DAO governance",
        ],
      },
      {
        index: "2",
        subject: "Networking the Layer 2 networks",
        title: "Support one-click cross-rollup transfer",
        contents: ["Build cross-rollup transfer liquidity pool"],
      },
      {
        index: "3",
        subject: "Networking the Layer 2 networks",
        title: "Support fast withdrawal",
        contents: ["Build fast withdrawal liquidity pool"],
      },
      {
        index: "4",
        subject: "Networking the Layer 2 networks",
        title: "Support full verification from day one ",
        contents: [
          "Implement attention challenge",
          "Build additional reward pool for intermediaries of fast withdrawal and cross-rollup transfer",
        ],
      },
      {
        index: "5",
        subject: "Higher security, More Interoperability",
        title: "Eth 2.0 migration",
        contents: ["Migrate rollup data storage to Eth 2.0"],
      },
      {
        index: "6",
        subject: "Higher security, More Interoperability",
        title: "Support cross-contract call",
        contents: ["Support arbitrary message call between rollups"],
      },
      {
        index: "7",
        subject: "Higher security, More Interoperability",
        title: "Support stateless verification",
        contents: ["Add light-verification mode"],
      },
      {
        index: "8",
        subject: "Full verification with zkp",
        title: "Support fully Ethereum-compatible zk rollups",
        contents: [
          "Migrate all layer 2 protocols based on fraud proof based layer 2 to validity proof basis",
        ],
      },
    ],
    roadmapKR: [
      {
        index: "0",
        subject: "Networking the Layer 2 networks",
        title: "모든 레이어 2 프로토콜 지원",
        contents: [
          "Optimistic Rollup 지원: Optimism, Arbitrum 등",
          "Zk-Rollup 지원: StarkEx, zkSync 등",
          "Validium 지원: StarkEx 등",
          "Plasma 지원: Tokamak plasma 등",
          "커스텀 레이어 2 개발 프로토콜 구축",
        ],
      },
      {
        index: "1",
        subject: "Networking the Layer 2 networks",
        title: "TON 생태계와 각 레이어 2 프로토콜 통합 및 지원",
        contents: [
          "톤 시뇨리지 풀, 파워톤 게임, DAO 거버넌스와 레이어 2 프로토콜 간의 통합",
        ],
      },
      {
        index: "2",
        subject: "Networking the Layer 2 networks",
        title: "원클릭 크로스 롤업 전송 지원",
        contents: ["크로스 롤업 전송 유동성 풀 구축"],
      },
      {
        index: "3",
        subject: "Networking the Layer 2 networks",
        title: "빠른 출금 지원",
        contents: ["빠른 출금 유동성 풀 구축"],
      },
      {
        index: "4",
        subject: "Networking the Layer 2 networks",
        title: "레이어 2 완전 검증 지원",
        contents: [
          "주의 챌린지 구현",
          "빠른 출금과 크로스 롤업 중개인들을 위한 추가 보상 풀 구축",
        ],
      },
      {
        index: "5",
        subject: "Higher security, More Interoperability",
        title: "이더리움 2.0 마이그레이션",
        contents: ["롤업 데이터 스토리지 이더리움 2.0으로 이전"],
      },
      {
        index: "6",
        subject: "Higher security, More Interoperability",
        title: "크로스 컨트랙트 콜 지원",
        contents: ["롤업 간 임의 메세지 콜 지원"],
      },
      {
        index: "7",
        subject: "Higher security, More Interoperability",
        title: "스테이트리스 검증 지원",
        contents: ["라이트 검증 모드 지원"],
      },
      {
        index: "8",
        subject: "Full verification with zkp",
        title: "이더리움 완전 호환 및 검증 레이어 2 지원",
        contents: [
          "위조 증명 기반의 모든 레이어 2 프로토콜을 유효성 증명 기반으로 마이그레이션 ",
        ],
      },
    ],
    roadmapCN: [
      {
        index: "0",
        subject: "Networking the Layer 2 networks",
        title: "支持坦克网络（Tokamak Network）中的所有类型的二层协议",
        contents: [
          "支持Optimistic Rollup：Optimism、Arbitrum等",
          "支持Zk-Rollup：StarkEx、zkSync等",
          "支持Validium：StarkEx等",
          "支持Plasma：Tokamak plasma等",
          "添加自定义二层构建协议",
        ],
      },
      {
        index: "1",
        subject: "Networking the Layer 2 networks",
        title: "将所有类型的二层协议与TON生态系统集成在一起",
        contents: [
          "将所有二层协议与TON铸币池、PowerTON游戏和DAO治理集成在一起",
        ],
      },
      {
        index: "2",
        subject: "Networking the Layer 2 networks",
        title: "支持一键式跨Rollup转移",
        contents: ["建立跨Rollup转移的流动资金池"],
      },
      {
        index: "3",
        subject: "Networking the Layer 2 networks",
        title: "支持快速提现",
        contents: ["建立快速提现的流动资金池"],
      },
      {
        index: "4",
        subject: "Networking the Layer 2 networks",
        title: "从第一天开始就支持全面验证",
        contents: [
          "实施注意力挑战",
          "为快速提现和跨Rollup转移的中介方建立额外奖励池",
        ],
      },
      {
        index: "5",
        subject: "Higher security, More Interoperability",
        title: "以太坊2.0迁移",
        contents: ["将Rollup数据存储迁移到以太坊2.0"],
      },
      {
        index: "6",
        subject: "Higher security, More Interoperability",
        title: "支持跨合约调用",
        contents: ["支持Rollup间的任意消息调用"],
      },
      {
        index: "7",
        subject: "Higher security, More Interoperability",
        title: "支持无状态验证",
        contents: ["添加轻验证模式"],
      },
      {
        index: "8",
        subject: "Full verification with zkp",
        title: "支持完全与以太坊兼容，支持可验证二层网络",
        contents: ["迁移所有基于欺诈证明和有效性证明的二层协议"],
      },
    ],
  },
  mutations: {
    SET_WEB3(state, web3) {
      state.web3 = web3;
    },
    SET_POSTS(state, posts) {
      state.posts = posts;
    },
    SET_ROADMAP(state, roadmap) {
      state.roadmap = roadmap;
    },
    SET_WHITEPAPER(state, whitepaper) {
      state.whitepaper = whitepaper;
    },
    SET_TOTALSTAKED: (state, totalStaked) => {
      state.totalStaked = totalStaked;
    },
    SET_USD: (state, usd) => {
      state.usd = usd;
    },
    SET_LOADED: (state, loaded) => {
      state.loaded = loaded;
    },
    SET_INFO: (state, info) => {
      state.info = info;
    },
    SET_LOCALE: (state, { locale }) => {
      state.locale = locale;
    },
    LAUNCHED(state) {
      state.launched = true;
    },
  },
  actions: {
    async launch({ commit, dispatch, state }) {
      await dispatch("setPosts");
      await dispatch("getCurrencyInfo");
      await dispatch("getUSDInfo");
      await dispatch("getTotalStaked");
      await dispatch("setRoadMap", state.locale);
      await dispatch("setWhitePaper", state.locale);
      commit("LAUNCHED");
      dispatch("setLoaded");
    },
    updateData(context) {
      setInterval(() => context.dispatch("getCurrencyInfo"), 60000);
      setInterval(() => context.dispatch("getUSDInfo"), 60000);
      setInterval(() => context.dispatch("getTotalStaked"), 60000);
    },
    async getCurrencyInfo(context) {
      await axios
        .get("https://api.upbit.com/v1/ticker?markets=KRW-TON")
        .then((response) => {
          context.commit(
            "SET_INFO",
            JSON.parse(JSON.stringify(response.data).replace(/]|[[]/g, ""))
          );
        });
    },
    async getTotalStaked(context) {
      await axios
        .get("https://price-api.tokamak.network/staking/current")
        .then((response) => {
          context.commit("SET_TOTALSTAKED", response.data);
        });
    },
    async getUSDInfo(context) {
      await axios
        .get("https://api.frankfurter.app/latest?from=KRW")
        .then((response) => context.commit("SET_USD", response.data.rates.USD));
    },
    async setLoaded(context) {
      await context.commit("SET_LOADED", true);
    },
    setLocale({ commit }, val) {
      commit("SET_LOCALE", val);
    },
    async setRoadMap({ commit, state }, locale) {
      let roadmap;
      if (locale === "en_US") {
        roadmap = state.roadmapEN;
      } else if (locale === "ko_KR") {
        roadmap = state.roadmapKR;
      } else {
        roadmap = state.roadmapCN;
      }

      commit("SET_ROADMAP", roadmap);
    },
    async setWhitePaper({ commit, state }, locale) {
      let whitepaper;
      if (locale === "ko_KR") {
        whitepaper = state.whitepaperKR;
      } else {
        whitepaper = state.whitepaperEN;
      }

      commit("SET_WHITEPAPER", whitepaper);
    },
    async setPosts({ commit }) {
      await axios
        .get("https://price-api.tokamak.network/posts")
        .then((res) => {
          commit("SET_POSTS", res.data);
        })
        .catch((error) => {
          console.log(error);

          // commit("SET_POSTS", contents.items);
        });
    },
  },
  modules: {},
});
