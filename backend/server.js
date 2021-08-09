const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./database/db');

const studentRoute = require('./routes/student.route');

mongoose.Promise = global.Promise;

mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log('Database successfully connected');
    },
    (error) => {
      console.log(`Couldn't connect to database: ${error}`);
    },
  );

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/student', studentRoute);

const port = process.env.PORT || 4000;

const server = app.listen(port, () => console.log(`server run at port ${port}`));

app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
