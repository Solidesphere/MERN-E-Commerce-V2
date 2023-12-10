import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc Auth user && get the token
// @route POST /api/users/login
// @acess public
const authUser = asyncHandler(async (req, res) => {
  res.send("auth user");
});

// @desc register user
// @route POST /api/users
// @acess public
const registerUser = asyncHandler(async (req, res) => {
  res.send("register user");
});

// @desc Logout user / clear cookie
// @route POST /api/users/logout
// @acess Private
const logoutUser = asyncHandler(async (req, res) => {
  res.send("logout user");
});

// @desc Get user prfole
// @route GET /api/users/profile
// @acess Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("get user profile");
});

// @desc Update user profile
// @route PUT /api/users/profile
// @acess Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update user profile");
});

// @desc Get users
// @route GET /api/users
// @acess Private/admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("get users");
});

// @desc Get user by ID
// @route GET /api/users/:id
// @acess Private/admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("get user by id");
});

// @desc Delete user
// @route GET /api/users
// @acess Private/admin
const deleteUser = asyncHandler(async (req, res) => {
  res.send("delete user");
});

// @desc Update user
// @route Put /api/users/:id
// @acess Private/admin
const updateUser = asyncHandler(async (req, res) => {
  res.send("update user");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
};
