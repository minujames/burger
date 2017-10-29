
var burger = require("../models/burger.js");

var express = require("express");
var router = express.Router();

router.get("/", function(request, response) {
  burger.all(function(data) {
    response.render("index", {burgers: data});
  });
});

module.exports = router;