/*
    Auth Routes: host + /api/auth
*/

const express = require("express");
const { check } = require("express-validator");
const { createUser, loginUser, renewToken } = require("../controllers/auth");
const { fieldValidators } = require("../middlewares/fieldValidators");

const router = express.Router();

// Middlewares
const newUserValidator = [
  check("name", "Name is required").not().isEmpty(),
  check("email", "Email is required").isEmail(),
  check("password", "Password must be at least 6 characters long").isLength({
    min: 6,
  }),
  fieldValidators,
];

const loginUserValidator = [
  check("email", "Email is required").isEmail(),
  check("password", "Password is required").not().isEmpty(),
  fieldValidators,
];

// Routes
router.post("/", loginUserValidator, loginUser);
router.post("/new", newUserValidator, createUser);
router.get("/renew", renewToken);
module.exports = router;
