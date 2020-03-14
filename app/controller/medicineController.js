"use strict";

var Medicine = require("../model/medicineModel.js");

exports.getAllMedicines = function(req, res) {
  Medicine.getAllMedicines(function(err, task) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", task);
    res.send(task);
  });
};
