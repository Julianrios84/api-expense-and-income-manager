const { httpError } = require("../helpers/handleError.helper");
const { encrypt, compare } = require("../helpers/handleBcrypt.helper");
const { tokenSign } = require("../helpers/generateToken.helper");
const userModel = require("../models/users.model");

//TODO: Login!
const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });

    if (!user) {
      res.status(404);
      res.send({ error: "User not found" });
    }

    const checkPassword = await compare(password, user.password); //TODO: Contraseña!
    //TODO JWT 👉
    const tokenSession = await tokenSign(user); //TODO: 2d2d2d2d2d2d2

    if (checkPassword) {
      //TODO Contraseña es correcta!
      res.send({
        data: user,
        token: tokenSession,
      });
      return;
    }

    if (!checkPassword) {
      res.status(409);
      res.send({
        error: "Invalid password",
      });
      return;
    }
  } catch (e) {
    httpError(res, e);
  }
};

//TODO: Registramos usuario!
const signUp = async (req, res) => {
  try {
    //TODO: Datos que envias desde el front (postman)
    const { email, password, name } = req.body;
    const passwordHash = await encrypt(password); //TODO: (123456)<--- Encriptando!!
    const registerUser = await userModel.create({
      email,
      name,
      password: passwordHash,
    });

    res.send({ data: registerUser });
  } catch (e) {
    httpError(res, e);
  }
};

module.exports = { signIn, signUp };
