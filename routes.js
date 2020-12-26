var express = require('express');
var path = require('path');
var ejs = require('ejs');
var router = express.Router();

router.get("/", function(req, res){
  console.log("Entering index.html");

  res.render("index");
});

module.exports = router;
