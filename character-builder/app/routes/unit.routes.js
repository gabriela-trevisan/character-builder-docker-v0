module.exports = app => {
  const unit = require("../controllers/unit.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  // router.post("/", unit.create);

  // // Retrieve all Tutorials
  // router.get("/", unit.findAll);

  // // Retrieve all published Tutorials
  // router.get("/published", unit.findAllPublished);

  router.get("/teste", unit.teste);

  // Retrieve a single Tutorial with id
  // router.get("/:id", unit.findOne);

  // // Update a Tutorial with id
  // router.put("/:id", unit.update);

  // // Delete a Tutorial with id
  // router.delete("/:id", unit.delete);

  // // Delete all Tutorials
  // router.delete("/", unit.deleteAll);

  app.use('/api/unit', router);
};
