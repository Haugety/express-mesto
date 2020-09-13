const router = require('express').Router();
const { getCards } = require('../controllers/cards');
const { resourceNotFound } = require('../helpers/status-handlers');

router.use(
  '/cards/:char',
  (req, res) => {
    resourceNotFound(res);
  }
);

router.use(
  '/cards',
  getCards,
);

module.exports = {
  cardRouter: router,
};
