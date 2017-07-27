const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.send('You\'re connected bro')
})

module.exports = router;
