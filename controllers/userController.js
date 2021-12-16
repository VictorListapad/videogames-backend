// Imports
const bcrypt = require("bcrypt");
const { generateJwt } = require("../helpers/processJwt");
const User = require("../models/User");

// SIGN UP
const signUp = async (req, res) => {
  const { email, password } = req.body;
  const testEmail = await User.findOne({ email });
  if (testEmail) {
    return res.status(500).json({ message: `Couldn't create the user` });
  }
  const user = new User(req.body);
  try {
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);
    user.save();
    const token = await generateJwt(user._id);
    return res.status(201).json({ token, user });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't create the user" });
  }
};
// LOGIN
const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(500).json({ message: `Invalid email/password` });
  }
  const validPassword = bcrypt.compareSync(password, user.password);
  if (!validPassword) {
    return res.status(500).json({ message: `Invalid email/password` });
  }
  const token = await generateJwt(user._id);
  return res.status(200).json({ token, user });
};
// GET ALL
const getAllUsers = async (req, res) => {
  const users = await User.find();
  try {
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get users` });
  }
};

// GET ONE USER
const getOneUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  try {
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't get the user` });
  }
};

// UPDATE
const updateUser = async (req, res) => {
  const { id } = req.params;
  const userToUpdate = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(userToUpdate);
  } catch (error) {
    return res.status(500).json({ message: `Couldn't update the user` });
  }
};

// DELETE
const deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: `Successfully deleted` });
  } catch (error) {
    return res.status(500).json({ message: `Couldn't delete the user` });
  }
};

module.exports = {
  signIn,
  signUp,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
};
