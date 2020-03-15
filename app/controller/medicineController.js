"use strict";

var Medicine = require("../model/medicineModel.js");

exports.getAllMedicines = function(req, res) {
  Medicine.getAllMedicines(function(err, medicine) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", medicine);
    res.send(medicine);
  });
};

exports.getMedicineById = function(req, res) {
  Medicine.getMedicineById(req.params.medicineId, function(err, medicine) {
    if (err) res.send(err);
    res.json(medicine);
  });
};

exports.getAllByActiveSubstance = function(req, res) {
  Medicine.getAllByActiveSubstance(req.params.activeSubstance, function(
    err,
    medicine
  ) {
    if (err) res.send(err);
    console.log(res.medicine);
    res.json(medicine);
  });
};
