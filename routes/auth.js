/*
    Auth Routes: host + /api/auth
*/

const express = require("express");
const router = express.Router();

const { createUser, loginUser, renewToken } = require("../controllers/auth");

// Routes
router.post("/", loginUser);
router.post("/new", createUser);
router.get("/renew", renewToken);

module.exports = router;
