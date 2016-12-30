const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.json('words here');
  //res.send('api works');
});

module.exports = router;
