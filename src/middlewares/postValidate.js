const categoryService = require('../services/category.service');

module.exports = async (req, res, next) => {
  const { title, categoryIds, content } = req.body;
  // title
  if (!title) return res.status(400).json({ message: '"title" is required' });
  // category
  if (!categoryIds) return res.status(400).send({ message: '"categoryIds" is required' });

  const allCategories = await categoryService.getAll();

  const dataCategoryIds = allCategories.map((category) => category.dataValues.id);

  const categoryExist = categoryIds.every((id) => dataCategoryIds.includes(id));

  if (!categoryExist) return res.status(400).send({ message: '"categoryIds" not found' }); 
  // content
  if (!content) return res.status(400).json({ message: '"content" is required' });

  next();
};