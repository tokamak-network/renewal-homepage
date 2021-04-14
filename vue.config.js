const path = require("path");

module.exports = {
  // devServer: {
  //   open: process.platform === "darwin",
  //   host: "0.0.0.0",
  //   port: 8085, // CHANGE YOUR PORT HERE!
  //   https: true,
  //   hotOnly: false,
  // },
  configureWebpack: {
    devtool: "source-map",
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src/"),
      },
    },
  },

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true,
    },
  },
};
