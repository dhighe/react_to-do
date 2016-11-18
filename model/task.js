const pg = require('pg-promise')({}); // pg-promise executes with a function, which with will be and empty object

const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
};

const db = pg(config);

module.exports = {

  getTasks(req, res, next) {
    db.query('SELECT * from task;')
    .then((tasks) => {
      res.rows = tasks;
      next();
    })
    .catch(error => next(error));
  },

  addTask()

};
