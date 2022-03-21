const { BlogPost } = require('../models');

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

module.exports = {
  create,
};