const internalServerError = (res) => {
  res
    .status(500)
    .send('Internal Server Error');
};

const httpOk = (res, data) => {
  res
    .status(200)
    .send(data);
};

const notFound = (res, error = 'Запрашиваемый ресурс не найден') => {
  res
    .status(404)
    .send({ message: error });
};

module.exports = {
  internalServerError,
  httpOk,
  notFound,
};
