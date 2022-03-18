const categoryServeice = require('../services/category.service');

const create = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) return res.status(400).json({ message: '"name" is required' });

    const category = await categoryServeice.create(name);

    if (!category) return res.status(409).json({ message: 'Category already registered' });

    return res.status(201).json(category);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  create,
};