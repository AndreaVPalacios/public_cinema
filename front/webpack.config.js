module.exports = {
  entry: {
    index: "./scripts/index.js",
    movieLab: "./scripts/movieLab/creationMovie.js",
  },

  output: {
    path: __dirname + "/public",
    filename: "[name].bundle.js",
  },
};
