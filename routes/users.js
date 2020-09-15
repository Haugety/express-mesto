const router = require('express').Router();
const { getUsers, getUserById } = require('../controllers/users');
const { notFound } = require('../helpers/status-handlers');

router.get(
  '/users/:_id/:char',
  (req, res) => {
    notFound(res);
  },
);

router.get(
  '/users/:_id',
  getUserById,
);

router.get(
  '/users',
  getUsers,
);

module.exports = {
  userRouter: router,
};
