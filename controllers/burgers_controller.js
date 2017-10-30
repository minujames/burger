
var burger = require("../models/burger.js");

var express = require("express");
var router = express.Router();

router.get("/", function(request, response) {
  burger.all(function(data) {
    response.render("index", {burgers: data});
  });
});


router.put("/api/burger/:id", function(request, response) {
  var burgerId = request.params.id;
  console.log("burgerId", burgerId, request.body.devoured);
  var condition = "id = " + burgerId;

  burger.update({
    devoured: eval(request.body.devoured)
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

module.exports = router;