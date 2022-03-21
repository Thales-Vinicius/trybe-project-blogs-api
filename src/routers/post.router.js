const express = require('express');

const { create, getAll, getById } = require('../controllers/post.controller');
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

router.get(
  '/:id',

  authValidate,
  getById,
);

module.exports = router;