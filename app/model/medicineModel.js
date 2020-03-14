"user strict";
var sql = require("../../db.js");

//Task object constructor
var Medicine = function(task) {
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};
Medicine.getAllMedicines = function(result) {
  sql.query("Select * from medicines", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("medicines : ", res);

      result(null, res);
    }
  });
};

module.exports = Medicine;
