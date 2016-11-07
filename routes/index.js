const router = require('express').Router();

router.get('/', (req, res) => {
  res.json('Welcome Jason!');
});

module.exports = router;
