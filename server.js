const express = require('express');
const logger = require('morgan');
// const path = require('path');
const bodyParser = require('body-parser');
const homeRoute = require('./routes/index');
const tasksRoute = require('./routes/tasks');

const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('Welcome to port:', PORT));

app.use(logger(isDev ? 'dev' : 'common'));

app.use(bodyParser.json());
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});

app.use('/', homeRoute);
app.use('/tasks', tasksRoute);
// app.use(express.static(path.join(__dirname, 'public')));

