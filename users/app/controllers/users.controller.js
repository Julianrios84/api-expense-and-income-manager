const { httpError } = require("../helpers/handleError.helper");
const { encrypt } = require("../helpers/handleBcrypt.helper");
const userModel = require("../models/users.model");

const getItems = async (req, res) => {
  try {
    const records = await userModel.find({});
    res.send({ data: records });
  } catch (e) {
    httpError(res, e);
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params;
    const record = await userModel.findById({ _id: id });
    res.send({ data: record });
  } catch (e) {
    httpError(res, e);
  }
};

const createItem = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const passwordHash = await encrypt(password);
    const record = await userModel.create({
      name,
      email,
      password: passwordHash,
    });
    res.send({ message: "record created.", data: record });
  } catch (e) {
    httpError(res, e);
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;
    const passwordHash = await encrypt(password);
    const record = await userModel.findByIdAndUpdate(id, { name, email, password: passwordHash }, {new: true});
    res.send({ message: "updated record.", data: record });
  } catch (e) {
    console.log(e)
    httpError(res, e);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const record = await userModel.findByIdAndDelete(id);
    res.send({ message: "deleted record.", data: record });
  } catch (e) {
    httpError(res, e);
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
