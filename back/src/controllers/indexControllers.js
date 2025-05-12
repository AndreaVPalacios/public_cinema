// const movieControllers = (req, res) => {
//     res.send("Recibiendo solicitudeees");
// };

const {
  getMoviesService,
  creationsMovies,
} = require("../services/movieServices");

function obtenerData(req, res) {
  res.status(201).json({
    message: "Estamos trabajando en ello",
  });
}

async function mostrarData(req, res) {
  try {
    const moviesData = await getMoviesService();
    res.status(201).json({
      message: "Aqui esta la informacion de las pelis",
      data: moviesData,
    });
  } catch (error) {
    res.status(401).json({
      message: "Hubo un pequeño error en la aplicación",
      data: moviesData,
    });
  }
}

//  function createMovie(req, res) {
//    res.send("Creando movie");
//  }

async function createMovie(req, res) {
  try {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const result = await creationsMovies({
      title,
      director,
      year,
      duration,
      genre,
      rate,
      poster,
    });
    return res.status(201).json({
      message: "Pelicula creada con EXITOOO",
      result,
    });
  } catch (error) {
    return res.status(401).json(error.message);
  }
}

module.exports = {
  obtenerData,
  mostrarData,
  createMovie,
};
