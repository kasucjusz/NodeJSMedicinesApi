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

Medicine.getMedicineById = function(medicineId, result) {
  sql.query("Select * from medicines where id = ? ", medicineId, function(
    err,
    res
  ) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};

Medicine.getAllByActiveSubstance = function(
  activeSubstance,
  medicineId,
  result
) {
  sql.query(
    "Select * from medicines where substancja_czynna = ? and id != ? order by cena_detaliczna ASC",
    [activeSubstance, medicineId],
    function(err, res) {
      if (err) {
        console.log("error", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Medicine;
