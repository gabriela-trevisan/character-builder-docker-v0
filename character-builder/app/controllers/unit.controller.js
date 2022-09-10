const Unit = require("../models/unit.model.js");

// // Create and Save a new Unit
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   // Create a Unit
//   const unit = new Unit({
//     title: req.body.title,
//     description: req.body.description,
//     published: req.body.published || false
//   });

//   // Save Unit in the database
//   Unit.create(unit, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Unit."
//       });
//     else res.send(data);
//   });
// };

// // Retrieve all Tutorials from the database (with condition).
// exports.findAll = (req, res) => {
//   const title = req.query.title;

//   Unit.getAll(title, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving units."
//       });
//     else res.send(data);
//   });
// };

// // Find a single Unit by Id
// exports.findOne = (req, res) => {
//   Unit.findById(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Unit with id ${req.params.id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Error retrieving Unit with id " + req.params.id
//         });
//       }
//     } else res.send(data);
//   });
// };

// // find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Unit.getAllPublished((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving units."
//       });
//     else res.send(data);
//   });
// };

// // Update a Unit identified by the id in the request
// exports.update = (req, res) => {
//   // Validate Request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   console.log(req.body);

//   Unit.updateById(
//     req.params.id,
//     new Unit(req.body),
//     (err, data) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Not found Unit with id ${req.params.id}.`
//           });
//         } else {
//           res.status(500).send({
//             message: "Error updating Unit with id " + req.params.id
//           });
//         }
//       } else res.send(data);
//     }
//   );
// };

// // Delete a Unit with the specified id in the request
// exports.delete = (req, res) => {
//   Unit.remove(req.params.id, (err, data) => {
//     if (err) {
//       if (err.kind === "not_found") {
//         res.status(404).send({
//           message: `Not found Unit with id ${req.params.id}.`
//         });
//       } else {
//         res.status(500).send({
//           message: "Could not delete Unit with id " + req.params.id
//         });
//       }
//     } else res.send({ message: `Unit was deleted successfully!` });
//   });
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Unit.removeAll((err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all units."
//       });
//     else res.send({ message: `All Tutorials were deleted successfully!` });
//   });
// };

// new
exports.teste = (req, res) => {
  res.send({ message: `Teste!` })
};
