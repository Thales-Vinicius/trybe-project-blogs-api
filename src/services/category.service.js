const { Category } = require('../models');

const create = async (name) => {
  const categoryExist = await Category.findOne({ where: { name } });

  if (categoryExist) return null;

  const newCategory = await Category.create({ name });

  const dataCategory = { id: newCategory.id, name };

  return dataCategory;
};

const getAll = async () => {
  const allCategories = await Category.findAll();

  return allCategories;
};

module.exports = {
  create,
  getAll,
};