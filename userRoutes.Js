const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index')
});

router.post("/login", (req, res, next) => {
  console.log(req.body);
  if (req.body.name === 'Leonard') {
    res.send("Congratulations. Welcome to the Matrix.")
  } else {
    res.send('Goodbye');
  }
  res.redirect('/')

  next()
});

module.exports = router;
