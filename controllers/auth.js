const { response } = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/users");
const { generateJWT } = require("../helpers/jwt");
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

    // Generar un JWT
    const token = await generateJWT(user._id, user.name);

    res.status(201).json({
      ok: true,
      msg: "User created",
      userId: user._id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al crear el usuario",
    });
  }
};

const loginUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    // Verificar si el usuario existe
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "El usuario no existe.",
      });
    }

    // Verificar si la contraseña es correcta
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "La contraseña es incorrecta",
      });
    }

    // Generar un JWT
    const token = await generateJWT(user._id, user.name);

    res.status(200).json({
      ok: true,
      msg: "User logged in",
      userId: user._id,
      name: user.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error al iniciar sesión",
    });
  }
};

const renewToken = async (req, res = response) => {
  const { uid, name } = req;

  const token = await generateJWT(uid, name);

  res.status(200).json({
    ok: true,
    msg: "Token renewed",
    uid,
    name,
    token,
  });
};

module.exports = {
  createUser,
  loginUser,
  renewToken,
};
