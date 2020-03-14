"use strict";
module.exports = function(app) {
  var medicines = require("../controller/medicineController");

  // medicines Routes
  app.route("/medicines").get(medicines.getAllMedicines);

  app.route("/medicines/:medicineId").get(medicines.getMedicineById);
};
