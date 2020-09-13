const router = require('express').Router();
const { getUsers, getUserById } = require('../controllers/users');
const { resourceNotFound } = require('../helpers/status-handlers');

router.use(
  '/users/:_id/:char',
  (req, res) => {
    resourceNotFound(res);
  }
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
