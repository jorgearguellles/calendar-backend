/*
    Auth Routes: host + /api/auth
*/

const express = require("express");
const router = express.Router();

// Routes
router.get("/", (req, res) => {
  res.send("Auth routes");
});

module.exports = router;
