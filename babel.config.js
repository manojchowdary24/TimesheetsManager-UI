"use-strict";

module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-typescript",
    "@babel/preset-env"
  ],
  plugins: [
    [
      "babel-plugin-module-resolver",
      {
        root: ["./src"],
        alias: {
          components: "./src/components",
          constants: "./src/constants",
          containers: "./src/containers"
        }
      }
    ]
  ]
};
