const { response } = require("express");

const createUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "New user",
  });
};

const loginUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Login user",
  });
};

const renewToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "Renew token",
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
