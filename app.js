const express = require('express');

const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');
const { userRouter } = require('./routes/users');
const { cardRouter } = require('./routes/cards');
const { notFound } = require('./helpers/status-handlers');

const { PORT = 3000 } = process.env;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
});

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use(limiter);

app.use((req, res, next) => {
  req.user = {
    _id: '5f709286d35dd825fc6b5bb3',
  };

  next();
});

app.use(userRouter);
app.use(cardRouter);

app.all('*', (req, res) => {
  notFound(res);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
