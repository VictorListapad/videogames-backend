const Game = require("../models/Game");

// GET ALL GAMES
const getAllGames = async (req, res) => {
  const games = await Game.find();
  try {
    return res.status(200).json(games);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get games` });
  }
};

// GET ONE GAME
const getGameById = async (req, res) => {
  const { id } = req.params;
  const game = await Game.findById(id).populate("genre").populate("platform");
  try {
    return res.status(200).json(game);
  } catch (error) {
    return res.status(500).json(`Couldn't get game`);
  }
};

// CREATE GAME
const createGame = async (req, res) => {
  const gameToCreate = await Game.create(req.body);
  try {
    return res.status(201).json(gameToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create a game` });
  }
};

// UPDATE GAME
const updateGame = async (req, res) => {
  const { id } = req.params;
  const gameToUpdate = await Game.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(gameToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update the game` });
  }
};
// DELETE GAME
const deleteGame = async (req, res) => {
  const { id } = req.params;
  await Game.findOneAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete the game` });
  }
};

module.exports = {
  getAllGames,
  getGameById,
  createGame,
  updateGame,
  deleteGame,
};
