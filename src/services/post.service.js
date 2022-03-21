const { BlogPost, User, Category } = require('../models');

const create = async (title, categoryIds, content, userId) => {
  const newPost = await BlogPost.create({
    title,
    categoryIds,
    content,
    userId,
    published: new Date(),
    updated: new Date(),
  });

  const dataPost = { id: newPost.id, userId, title, content };

  return dataPost;
};

const getAll = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
    {
      model: User,
      as: 'user',
      attributes: { 
        exclude: ['password'],
      },
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
    ],
  });

  return allPosts;
};

module.exports = {
  create,
  getAll,
};