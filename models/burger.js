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

  create: function(objColVals, callBack){

  },

  update: function(objColVals, condition, callBack){
    orm.update("burgers", objColVals, condition, function(result) {
      callBack(result);
    });
  },

  delete: function(condition, values, callBack){

  }


};

module.exports = burger;
