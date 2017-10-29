var orm = require("../config/orm.js");

var burger = {
  all: function(callBack) {
    console.log("do orm call..");
    orm.all("burgers", function(result) {
      console.log("got result", result);
      if(typeof callBack === "function"){
        callBack(result);
      }
      else{
        console.log("not a function");
      }
    });
  },

};

module.exports = burger;
