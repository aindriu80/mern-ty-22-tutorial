const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc 	Register User
// @route 	POST /api/users
// @access      Public
const registerUser = asyncHandler((req, res) => {
  res.json({ message: 'Register User' })
})

// @desc 	Authenticate a User
// @route 	POST /api/login
// @access      Public
const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login User' })
})

// @desc 	Get user data
// @route 	POST /api/users/me
// @access      Public
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'User data display' })
})

module.exports = {
  registerUser,
  loginUser,
  getMe,
}
