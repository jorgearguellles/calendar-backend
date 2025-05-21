const { response } = require("express");
const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: "User created",
    name,
    email,
    password,
  });
};

const loginUser = (req, res = response) => {
  const { email, password } = req.body;

  res.status(200).json({
    ok: true,
    msg: "User logged in",
    email,
    password,
  });
};

const renewToken = (req, res = response) => {
  res.status(200).json({
    ok: true,
    msg: "Token renewed",
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
