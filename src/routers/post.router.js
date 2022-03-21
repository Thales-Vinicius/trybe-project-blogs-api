const express = require('express');

const { create, getAll } = require('../controllers/post.controller');
const { authValidate, postValidate } = require('../middlewares');

const router = express.Router();

router.post(
  '/',
  authValidate,
  postValidate,
  create,
);

router.get(
  '/',
  authValidate,
  getAll,
);

module.exports = router;