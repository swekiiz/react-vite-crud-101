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
      console.log(`Couldn't connect to database ${error}`);
    },
  );
