const internalServerError = (res) => {
  res
    .status(500)
    .send('Internal Server Error');
};

const httpOk = (res, data) => {
  res
    .status(200)
    .send(data);
}

const userNotFound = (res) => {
  res
    .status(404)
    .send({ message: 'Нет пользователя с таким id' });
}

const resourceNotFound = (res) => {
  res
    .status(404)
    .send({ message: 'Запрашиваемый ресурс не найден' });
}

module.exports = {
  internalServerError,
  httpOk,
  userNotFound,
  resourceNotFound,
}
