const postService = require('../services/post.service');

const create = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;
    const { id } = req.tokenData;
    // const userToken = req.tokenData;
    // erro aq ^
    console.log(id);
    const newPost = await postService.create(title, categoryIds, content, id);

    return res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  create,
};