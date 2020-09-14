const router = require('express').Router();
const { getCards } = require('../controllers/cards');
const { notFound } = require('../helpers/status-handlers');

router.use(
  '/cards/:char',
  (req, res) => {
    notFound(res);
  },
);

router.use(
  '/cards',
  getCards,
);

module.exports = {
  cardRouter: router,
};
