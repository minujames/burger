var orm = require("../config/orm.js");

var burger = {
  all: function(callBack) {
    orm.all("burgers", function(result) {
      if(typeof callBack === "function"){
        callBack(result);
      }
      else{
        console.log("not a function");
      }
    });
  },

  create: function(objColVals, callBack){
    orm.create("burgers", objColVals, function(result){
      callBack(result);
    });
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
