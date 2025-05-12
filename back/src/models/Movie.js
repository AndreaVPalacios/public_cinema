const mongoose = require("mongoose");

const movieObjectSchema = {
  title: { type: String, required: true },
  year: Number,
  duration: String,
  director: { type: String, required: true },
  genre: [String],
  rate: Number,
  poster: String,
};

const movieSchema = new mongoose.Schema(movieObjectSchema);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = {
  Movie,
};
