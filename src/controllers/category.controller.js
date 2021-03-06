const categoryService = require('../services/category.service');

const create = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required' });

    const category = await categoryService.create(name);

    if (!category) return res.status(409).json({ message: 'Category already registered' });

    return res.status(201).json(category);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getAll = async (req, res) => {
  try {
    const allCategories = await categoryService.getAll();
  
    return res.status(200).json(allCategories);    
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  create,
  getAll,
};