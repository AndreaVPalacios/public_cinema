const app = require("./src/server");
const { conDB } = require("./src/config/conDB");

conDB().then((res) => {
  app.listen(3000, () => {
    console.log("Escuchando server en el PORT:3000");
  });
  // .catch((error) => {
  //   console.log("No se pudo conectar al Mongo");
  // });
});
