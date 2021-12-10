const express = require("express");
const router = express.Router();
const {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
} = require("../controllers/gameController");

router.get("/", getAllGames);
router.get("/game/:id", getGameById);
router.post("/game", createGame);
router.put("/game/:id", updateGame);
router.delete("/game/:id", deleteGame);

module.exports = router;
