module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Use babel-jest to transpile JavaScript files
  },
  testEnvironment: "node", // Since you're testing API routes
};