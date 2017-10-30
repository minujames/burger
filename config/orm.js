var connection = require("./connection.js");

var orm = {
  all: function(table, callBack){
    var queryStr = "SELECT * FROM " + table + ";";
    connection.query(queryStr, function(error, result){
      if(error){
        throw error;
      }
      if(typeof callBack === "function"){
        callBack(result);
      }
    });
  },

  create: function(table, objColVals, callBack){
    var queryString = "INSERT INTO " + table + " SET ? ";
    console.log(queryString, objColVals);

    connection.query(queryString, objColVals, function(error, result) {
      if (error) {
        throw error;
      }
      if(typeof callBack === "function"){
        callBack(result);
      }
    });
  },

  update: function(table, objColVals, condition, callBack){
    var queryString = "UPDATE " + table + " SET ? WHERE " + condition;
    console.log(queryString, objColVals);

    connection.query(queryString, objColVals, function(error, result) {
      if (error) {
        throw error;
      }
      if(typeof callBack === "function"){
        callBack(result);
      }
    });
  },

  delete: function(){

  }
};

module.exports = orm;