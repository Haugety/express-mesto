const fsPromises = require('fs').promises;

const getJsonFromFile = (path) => fsPromises.readFile(path, { encoding: 'utf8' })
  .then((data) => JSON.parse(data))
  .catch((err) => console.log(err));

module.exports = {
  getJsonFromFile,
};
