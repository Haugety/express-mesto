const path = require('path');
const { getJsonFromFile } = require('../helpers/read-file');
const { notFound, httpOk } = require('../helpers/status-handlers');

const getCards = (req, res) => getJsonFromFile(path.join(__dirname, '..', 'data', 'cards.json'))
  .then((data) => {
    if (!data) {
      notFound(res, 'Запрашиваемые данные отсутствуют');
      return;
    }
    httpOk(res, data);
  })
  .catch((err) => console.log(err));

module.exports = {
  getCards,
};
