const tasks = require('express').Router();
const db = require('../model/task');

const showMethod = (req, res) => res.json(`${req.method} tasks/${req.params.taskID}`);
const sendJSONresponse = (req, res) => res.json(res.rows);

tasks.route('/:taskID')
  .get(showMethod)
  .put(showMethod)
  .delete(showMethod);

tasks.route('/')
  .get(db.getTasks, sendJSONresponse)
  .post(showMethod);

module.exports = tasks;

