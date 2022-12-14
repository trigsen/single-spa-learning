const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "trgsn",
    projectName: "todo",
    webpackConfigEnv,
    argv,
  });

  const config = {
    externals: [/^@trgsn\/.+/]
  }

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
