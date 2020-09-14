const express = require('express');

const app = express();
const path = require('path');
const { userRouter } = require('./routes/users');
const { cardRouter } = require('./routes/cards');
const { notFound } = require('./helpers/status-handlers');

app.use(
  express.static(
    path.join(__dirname, 'public'),
  ),
);

app.use(userRouter);
app.use(cardRouter);

app.all('*', (req, res) => {
  notFound(res);
});

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
