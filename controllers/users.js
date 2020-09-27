const User = require('../models/user');
const {
  internalServerError,
  httpOk,
  notFound,
  badRequest,
} = require('../helpers/status-handlers');

const getUsers = (req, res) => User.find({})
  .then((data) => {
    if (!data) {
      notFound(res, 'Запрашиваемые данные отсутствуют');
      return;
    }
    httpOk(res, data);
  })
  .catch(() => internalServerError(res));

const getUserById = (req, res) => User.findOne({ _id: req.params._id })
  .then((user) => {
    if (!user) {
      notFound(res, 'Нет пользователя с таким id');
      return;
    }

    httpOk(res, user);
  })
  .catch(() => internalServerError(res));

const createUser = (req, res) => User.create(req.body)
  .then((user) => httpOk(res, user))
  .catch(() => badRequest(res));

const updateUser = (req, res) => User.findByIdAndUpdate(
  req.user._id,
  { name: req.body.name, about: req.body.about },
)
  .then((user) => httpOk(res, user))
  .catch(() => badRequest(res));

const updateAvatar = (req, res) => User.findByIdAndUpdate(
  req.user._id,
  { avatar: req.body.avatar },
)
  .then((user) => httpOk(res, user))
  .catch(() => badRequest(res));

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updateAvatar,
};
