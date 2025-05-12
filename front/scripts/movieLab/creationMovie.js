const axios = require("axios");

async function createMovie(movieData) {
  try {
    const response = await axios.post(
      "http://localhost:3000/movies",
      movieData
    );
    alert("Acabas de publicar tu película éxitosamente ", response.data);
    document.getElementById("movieForm").reset();
  } catch (error) {
    console.log("Error submiting form: ", error);
  }
}

const movieForm = document.getElementById("movieForm");

const clearButtom = document.getElementById("deleteData");
clearButtom.addEventListener("click", (e) => {
  e.preventDefault();
  movieForm.reset();
});

const sendButton = document.getElementById("sendData");
sendButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const movie = {
    title: document.getElementById("activityTitle").value.trim(),
    year: document.getElementById("activityYear").value.trim(),
    director: document.getElementById("activityDirector").value.trim(),
    duration: document.getElementById("activityDuration").value.trim(),
    genre: document.getElementById("activityGenre").value.trim(),
    rate: document.getElementById("activityRate").value.trim(),
    poster: document.getElementById("activityPoster").value.trim(),
  };

  const movieRequire = [
    "title",
    "year",
    "director",
    "duration",
    "genre",
    "rate",
    "poster",
  ];
  const camposOblg = movieRequire.filter((campo) => !movie[campo]);
  if (camposOblg.length > 0)
    return alert(`Falta llenar ${camposOblg.join(", ")}`);

  try {
    await createMovie(movie);
  } catch (error) {
    alert("No se pudo crear tu peli", error);
  }
});
