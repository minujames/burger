var connection = require("./connection.js");

var orm = {
  all: function(tableName, callBack){
    var queryStr = "SELECT * FROM " + tableName + ";";
    connection.query(queryStr, function(error, result){
      if(error){
        throw error;
      }
      if(typeof callBack === "function"){
        callBack(result);
      }
    });
  }
};

module.exports = orm;