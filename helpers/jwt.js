const jwt = require("jsonwebtoken");

const generateJWT = (uid, name) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name };
    const privateKey = process.env.SECRET_JWT_SEED;
    const options = {
      expiresIn: "24h",
    };
    const callbackError = (err, token) => {
      if (err) {
        console.log(err);
        reject("Error al generar el token:", err);
      } else {
        resolve(token);
      }
    };

    jwt.sign(payload, privateKey, options, callbackError);
  });
};

module.exports = {
  generateJWT,
};
