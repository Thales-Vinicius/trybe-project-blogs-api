const express = require('express');

const { create, getAll, getById, update } = require('../controllers/post.controller');
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

router.put(
  '/:id',
  authValidate,
  update,
);

module.exports = router;