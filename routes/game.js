const express = require("express");
const router = express.Router();
const {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} = require("../controllers/gameController");
const { validateJwt, isAdmin } = require("../helpers/processJwt");

router.get("/", getAllGames);
router.get("/game/:id", getGameById);
router.post("/game", validateJwt, createGame);
router.put("/game/:id", validateJwt, isAdmin, updateGame);
router.delete("/game/:id", validateJwt, isAdmin, deleteGame);

module.exports = router;
