const jwt = require('jsonwebtoken');
const postService = require('../services/post.service');
const { BlogPost } = require('../models');

const create = async (req, res) => {
  try {
    const { title, categoryIds, content } = req.body;

    const decodedToken = jwt.decode(req.headers.authorization);
  
    const newPost = await postService.create(title, categoryIds, content, decodedToken.id);

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

    return res.status(200).json(post);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const update = async (req, res) => {
  try {
    const { title, content } = req.body;
    const { id } = req.params;

    const { userId } = await BlogPost.findByPk(id);

    const decodedToken = jwt.decode(req.headers.authorization);

    if (decodedToken.id !== userId) return res.status(401).json({ message: 'Unauthorized user' });
    
    const updatedPost = await postService.updatePost(id, title, content);

    return res.status(200).json(updatedPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  update,
};