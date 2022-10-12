const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@assets": path.resolve(__dirname, "src/assets"),
        "@components": path.resolve(__dirname, "src/components"),
        "@router": path.resolve(__dirname, "src/router"),
        "@views": path.resolve(__dirname, "src/views"),
        "@src": path.resolve(__dirname, "src"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
