const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/main.scss";`
      }
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [path.resolve(__dirname, "./src/main.scss")]
    }
  }
};
