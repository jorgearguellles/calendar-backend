const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/users");

const createUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario ya existe con ese email",
      });
    }

    user = new User(req.body);

    // Encriptar contraseña
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.status(201).json({
      ok: true,
      msg: "User created",
      userId: user._id,
      name: user.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al crear el usuario",
    });
  }
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
