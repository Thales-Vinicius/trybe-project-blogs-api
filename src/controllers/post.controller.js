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

const getAll = async (req, res) => {
  try {
    const allPosts = await postService.getAll();

    return res.status(200).json(allPosts);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await postService.getById(id);

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    return post;
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
};