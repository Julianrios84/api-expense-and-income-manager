const { httpError } = require("../helpers/handleError.helper");
const bookModel = require("../models/book.model");

const getItems = async (req, res) => {
  try {
    const records = await bookModel.find({});
    res.send({ data: records });
  } catch (e) {
    httpError(res, e);
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params
    const records = await bookModel.findById({ _id: id});
    res.send({ data: records });
  } catch (e) {
    httpError(res, e);
  }
};

const createItem = async (req, res) => {
  try {
    const { name, value, tag } = req.body;
    const record = await bookModel.create({ name, value, tag });
    res.send({ message: 'record created.',  data: record });
  } catch (e) {
    console.log(e)
    httpError(res, e);
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params
    const { name, value, tag } = req.body;
    const record = await bookModel.findByIdAndUpdate({ _id: id }, { name, value, tag }, { returnOriginal: false });
    res.send({ message: 'updated record.', data: record });
  } catch (e) {
    httpError(res, e);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params
    const record = await bookModel.findByIdAndDelete({ _id: id });
    res.send({ message: 'deleted record.', data: record });
  } catch (e) {
    httpError(res, e);
  }
};

module.exports = { getItem, getItems, deleteItem, createItem, updateItem };
