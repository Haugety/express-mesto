const Card = require('../models/card');
const {
  internalServerError,
  httpOk,
  notFound,
  badRequest,
} = require('../helpers/status-handlers');

const getCards = (req, res) => Card.find({})
  .then((data) => {
    if (!data) {
      notFound(res, 'Запрашиваемые данные отсутствуют');
      return;
    }
    httpOk(res, data);
  })
  .catch((err) => console.log(err));

const createCard = (req, res) => Card.create({ owner: req.user._id, ...req.body })
  .then((card) => httpOk(res, card))
  .catch(() => badRequest(res));

const removeCard = (req, res) => Card.findByIdAndRemove(req.params._id)
  .then((card) => httpOk(res, card))
  .catch(() => internalServerError(res));

const putLike = (req, res) => Card.findByIdAndUpdate(
  req.params._id,
  { $addToSet: { likes: req.user._id } },
  { new: true },
)
  .then((card) => httpOk(res, card))
  .catch(() => internalServerError(res));

const removeLike = (req, res) => Card.findByIdAndUpdate(
  req.params._id,
  { $pull: { likes: req.user._id } },
  { new: true },
)
  .then((card) => httpOk(res, card))
  .catch(() => internalServerError(res));

module.exports = {
  getCards,
  createCard,
  removeCard,
  putLike,
  removeLike,
};
