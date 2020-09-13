const path = require('path');
const { getJsonFromFile } = require('../helpers/read-file');
const { internalServerError, httpOk, userNotFound } = require('../helpers/status-handlers');

const getUsers = (req, res) => getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
  .then((data) => {
    if (!data) {
      internalServerError(res);
      return;
    }
    httpOk(res, data);
  });

const getUserById = (req, res) => getJsonFromFile(path.join(__dirname, '..', 'data', 'users.json'))
  .then((data) => {
    if (!data) {
      internalServerError(res);
      return;
    }
    const foundUser = data.find((user) => user._id === req.params._id);

    if (!foundUser) {
      userNotFound(res);
      return;
    }

    httpOk(res, foundUser);
  });

module.exports = {
  getUsers,
  getUserById,
};
