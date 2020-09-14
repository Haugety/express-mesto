const path = require('path');
const { getJsonFromFile } = require('../helpers/read-file');
const { internalServerError, httpOk, notFound } = require('../helpers/status-handlers');

const getUsers = (req, res) => getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
  .then((data) => {
    if (!data) {
      notFound(res, 'Запрашиваемые данные отсутствуют');
      return;
    }
    httpOk(res, data);
  })
  .catch(() => internalServerError(res));

const getUserById = (req, res) => getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
  .then((data) => {
    if (!data) {
      notFound(res, 'Запрашиваемые данные отсутствуют');
      return;
    }
    const foundUser = data.find((user) => user._id === req.params._id);

    if (!foundUser) {
      notFound(res, 'Нет пользователя с таким id');
      return;
    }

    httpOk(res, foundUser);
  })
  .catch(() => internalServerError(res));

module.exports = {
  getUsers,
  getUserById,
};
