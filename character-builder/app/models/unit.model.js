const sql = require("./db.js");

// constructor
const Unit = function(unit) {
  this.id = unit.id;
  this.name = unit.name;
  this.type = unit.type;
  this.quality = unit.quality;
  this.defense = unit.defense;
  this.weapons = unit.weapons;
  this.special_rules = unit.special_rules;
  this.total_cost = unit.total_cost;
};

Unit.create = (newUnit, result) => {
  console.log('Unit.create()')
  console.log(newUnit)
  console.log(result)
  sql.query("INSERT INTO unit SET ?", newUnit, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created unit: ", { id: res.insertId, ...newUnit });
    result(null, { id: res.insertId, ...newUnit });
  });
};

Unit.findById = (id, result) => {
  sql.query(`SELECT * FROM units WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found unit: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Unit with the id
    result({ kind: "not_found" }, null);
  });
};

Unit.getAll = (title, result) => {
  let query = "SELECT * FROM units";

  if (title) {
    query += ` WHERE title LIKE '%${title}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("units: ", res);
    result(null, res);
  });
};

Unit.getAllPublished = result => {
  sql.query("SELECT * FROM units WHERE published=true", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("units: ", res);
    result(null, res);
  });
};

Unit.updateById = (id, unit, result) => {
  sql.query(
    "UPDATE units SET title = ?, description = ?, published = ? WHERE id = ?",
    [unit.title, unit.description, unit.published, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Unit with the id
        result({ kind: "not_found" }, null);
        return;
      }

      console.log("updated unit: ", { id: id, ...unit });
      result(null, { id: id, ...unit });
    }
  );
};

Unit.remove = (id, result) => {
  sql.query("DELETE FROM units WHERE id = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Unit with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted unit with id: ", id);
    result(null, res);
  });
};

Unit.removeAll = result => {
  sql.query("DELETE FROM units", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} units`);
    result(null, res);
  });
};

module.exports = Unit;
