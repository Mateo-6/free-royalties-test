module.exports = {
  setupFilesAfterEnv: ["./src/test/setupTest.js"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
};