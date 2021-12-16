const express = require("express");
const {
  getAllUsers,
  getOneUser,
  signUp,
  signIn,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
const {
  validateJwt,
  isAdmin,
  revalidateJwt,
} = require("../helpers/processJwt");
const router = express.Router();
const { check } = require("express-validator");
const { validateFields } = require("../helpers/validateFields");

router.get("/", validateJwt, isAdmin, getAllUsers);
router.get("/user/:id", getOneUser);
// router.post("/signUp", signUp);
// router.post("/signIn", signIn);
router.put("/user/:id", validateJwt, isAdmin, updateUser);
router.delete("/user/:id", validateJwt, isAdmin, deleteUser);

router.post(
  "/signUp",
  [
    check("firstName", "You need to enter your first name").not().isEmpty(),
    check("lastName", "You need to enter your last name").not().isEmpty(),
    check("username", "You need to enter your username").not().isEmpty(),
    check("email", "You need to enter your email").isEmail(),
    check(
      "password",
      "Password must be 8 characters long and have a capital letter and symbol"
    ).matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, "i"),
    validateFields,
  ],
  signUp
);
router.post(
  "/signIn",
  [
    check("email", "You need to enter your email").isEmail(),
    check("password", "You need to enter the password").not().isEmpty(),
    validateFields,
  ],
  signIn
);

router.post("/renew", validateJwt, revalidateJwt);

module.exports = router;
