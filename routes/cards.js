const router = require('express').Router();
const { getCards } = require('../controllers/cards');
const { notFound } = require('../helpers/status-handlers');

router.get(
  '/cards/:char',
  (req, res) => {
    notFound(res);
  },
);

router.get(
  '/cards',
  getCards,
);

module.exports = {
  cardRouter: router,
};
