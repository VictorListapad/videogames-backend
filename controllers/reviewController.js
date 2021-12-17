const Review = require("../models/Review");

// GET ALL REVIEWS
const getAllReviews = async (req, res) => {
  const reviews = await Review.find();
  try {
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get reviews` });
  }
};

const getReviewById = async (req, res) => {
  const { id } = req.params;
  const review = await Review.findById(id);
  try {
    return res.status(200).json(review);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get review` });
  }
};

const getAllReviewsForGame = async (req, res) => {
  const { id } = req.params;
  const reviews = await Review.find({ game: id });
  try {
    console.log(reviews);
    return res.status(200).json(reviews);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get reviews` });
  }
};

const createReview = async (req, res) => {
  const { userId, gameId } = req.params;
  const reviewToCheck = await Review.find({ author: userId, game: gameId });
  if (reviewToCheck) {
    return res.status(500).json({ message: `Couldn't create review` });
  }
  const reviewToCreate = await Review.create(req.body);
  try {
    return res.status(201).json(reviewToCreate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't create review` });
  }
};

const updateReview = async (req, res) => {
  const { id } = req.params;
  const reviewToUpdate = await Review.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(reviewToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update review` });
  }
};
const deleteReview = async (req, res) => {
  const { id } = req.params;
  await Review.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete review` });
  }
};

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
  getAllReviewsForGame,
};
