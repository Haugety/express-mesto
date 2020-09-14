const router = require('express').Router();
const { getUsers, getUserById } = require('../controllers/users');
const { notFound } = require('../helpers/status-handlers');

router.use(
  '/users/:_id/:char',
  (req, res) => {
    notFound(res);
  },
);

router.use(
  '/users/:_id',
  getUserById,
);

router.use(
  '/users',
  getUsers,
);

module.exports = {
  userRouter: router,
};
