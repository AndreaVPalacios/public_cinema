function loggerMiddleware(req, res, next) {
  console.log(`Se hizo una solicitud a ${req.path}`);
  next();
}

function movieValidInfoMware(req, res, next) {
  const { title, year, director, duration, genre, rate, poster } = req.body;
  if (!title) {
    return res.status(401).json({
      message: "Suministra el titulo de la pelicula",
    });
  } else if (!director) {
    return res.status(401).json({
      message: "Suministra el director de la pelicula",
    });
  } else if (!genre) {
    return res.status(401).json({
      message: "Suministra el genero de la pelicula",
    });
  } else if (!year) {
    return res.status(401).json({
      message: "Suministra el año de la pelicula",
    });
  } else if (!duration) {
    return res.status(401).json({
      message: "Suministra la duracion de la pelicula",
    });
  } else if (!rate) {
    return res.status(401).json({
      message: "Suministra la calificacion de la pelicula",
    });
  } else if (!poster) {
    return res.status(401).json({
      message: "Suministra el poster de la pelicula",
    });
  }

  next();
}

module.exports = {
  loggerMiddleware,
  movieValidInfoMware,
};
