const express = require('express');

const { create } = require('../controllers/post.controller');
const { authValidate, postValidate } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  authValidate,
  postValidate,
  create,
);

module.exports = router;