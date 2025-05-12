const { Router } = require("express");
const { obtenerData, mostrarData } = require("../controllers/indexControllers");
const { moviesRouter } = require("./moviesRouter");

const router = Router();

router.get("/", obtenerData);
router.use("/movies", moviesRouter);

// router.get("/params/:id", (req, res) => {
//   res.status(200).json({
//     message: "params presentes",
//     data: req.params,
//   });
// });

module.exports = router;
