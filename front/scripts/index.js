//console.log(tempData);
const { mostrarCards } = require("./mostrarCards");
const axios = require("axios");
const { tempData } = require("./tempData");

// $.get('https://students-api.up.railway.app/movies', (data) => {
//    mostrarCards(data);
// })

// const promise = async () => {
//   const response = await axios.get("");
//   mostrarCards(response.data);
// };
// promise();

const containerPeliculas = document.getElementById("containerPeliculas");

async function obtenerPeliculas() {
  try {
    // const objeto = {};
    // const jsonObject = JSON.stringify(objeto);
    const response = await axios.get("http://localhost:3000/movies");
    mostrarCards(response.data.data);
  } catch (error) {
    alert(
      "No se cargaron correctamente las películas. Ahora se procederá a mostrar información fake."
    );
    const arrayCards = tempData.map(mostrarCards);
    arrayCards.forEach((element) => containerPeliculas.appendChild(element));
  }
}

async function mostrarPeliculas() {
  const peliculas = await obtenerPeliculas();
  mostrarCards(peliculas);
}

mostrarPeliculas();

// async function cargarPeliculas() {
//   try {
//     const response = await axios.get("http://localhost:3000/movies");
//     mostrarCards(response.data.data);
//   } catch (error) {
//     alert(
//       "No se cargaron correctamente las películas. Ahora se procederá a mostrar información fake."
//     );
//     const arrayCards = tempData.map(mostrarCards);
//     arrayCards.forEach((element) => containerPeliculas.appendChild(element));
//   }
// }

// document.addEventListener("DOMContentLoaded", cargarPeliculas);
