const containerPeliculas = document.getElementById("containerPeliculas");
const mostrarCards = (data) => {
  data.forEach((movie) => {
    const card = document.createElement("div");
    card.classList.add("cardPeliculas");

    card.innerHTML = `<img src="${movie.poster}" class="cardPeliculas">
     <h4 class="cardTitle">${movie.title}</h4>
     <p class="cardInfo">${movie.director}</p>
     <p class="cardInfo">${movie.duration}</p>
     <p class="cardInfo">${movie.genre}</p>
     <p class="cardInfo">${movie.rate}</p>`;

    containerPeliculas.appendChild(card);
  });
};

module.exports = {
  mostrarCards,
};
