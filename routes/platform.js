const express = require("express");
const {
  getAllPlatforms,
  getOnePlatform,
  createPlatform,
  updatePlatform,
  deletePlatform,
} = require("../controllers/platformController");
const router = express.Router();

router.get("/", getAllPlatforms);
router.get("/platform/:id", getOnePlatform);
router.post("/platform", createPlatform);
router.put("/platform/:id", updatePlatform);
router.delete("/platform/:id", deletePlatform);

module.exports = router;
