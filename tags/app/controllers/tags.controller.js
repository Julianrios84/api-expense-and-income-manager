const { httpError } = require("../helpers/handleError.helper");
const tagsModel = require("../models/tags.model");

const getItems = async (req, res) => {
  try {
    const records = await tagsModel.find({});
    res.send({ data: records });
  } catch (e) {
    httpError(res, e);
  }
};

const getItem = async (req, res) => {
  try {
    const { id } = req.params
    const records = await tagsModel.findOne({ _id: id});
    res.send({ data: records });
  } catch (e) {
    httpError(res, e);
  }
};

const createItem = async (req, res) => {
  try {
    const { name, type } = req.body;
    const record = await tagsModel.create({ name, type });
    res.send({ message: 'record created.',  data: record });
  } catch (e) {
    httpError(res, e);
  }
};

const updateItem = async (req, res) => {
  try {
    const { id } = req.params
    const { name, type } = req.body
    const record = await tagsModel.findOneAndUpdate({ _id: id }, { name, type }, { returnOriginal: false });
    res.send({ message: 'updated record.', data: record });
  } catch (e) {
    httpError(res, e);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params
    const record = await tagsModel.findOneAndDelete({ _id: id });
    res.send({ message: 'deleted record.', data: record });
  } catch (e) {
    httpError(res, e);
  }
};

module.exports = { getItem, getItems, deleteItem, createItem, updateItem };
