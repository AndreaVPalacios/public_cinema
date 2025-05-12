const { Router } = require("express");
const {
  mostrarData,
  createMovie,
  postMovies,
} = require("../controllers/indexControllers");
const { loggerMiddleware, movieValidInfoMware } = require("../middlewares");

const moviesRouter = Router();

moviesRouter.get("/", loggerMiddleware, mostrarData);
moviesRouter.post("/", loggerMiddleware, movieValidInfoMware, createMovie);

module.exports = {
  moviesRouter,
};
