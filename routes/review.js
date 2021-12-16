const express = require("express");
const {
  getAllReviews,
  getReviewById,
  createReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewController");
const router = express.Router();

router.get("/", getAllReviews);
router.get("/review/:id", getReviewById);
router.post("/review", createReview);
router.put("/review/:id", updateReview);
router.delete("/review/:id", deleteReview);

module.exports = router;
