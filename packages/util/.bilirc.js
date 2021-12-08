module.exports = {
  input: "./src/index.ts",
  output: {
    moduleName: "fruitsjs$util",
    fileName: "fruitsjs.util[min].js",
    format: ["umd", "umd-min"],
    dir: "./dist"
  },
  env: {
    NODE_ENV: "production"
  }
};
