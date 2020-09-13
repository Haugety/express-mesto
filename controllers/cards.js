const path = require('path');
const { getJsonFromFile } = require('../helpers/read-file');
const { internalServerError, httpOk } = require('../helpers/status-handlers');

const getCards = (req, res) => getJsonFromFile(path.join(__dirname, '..', 'data', 'cards.json'))
  .then((data) => {
    if (!data) {
      internalServerError(res);
      return;
    }
    httpOk(res, data);
  });

module.exports = {
  getCards,
};
