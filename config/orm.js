// Import (require) connection.js
var connection = require("./connection.js")


// create the methods that will execute the necessary MySQL commands in the
// controllers. These are the methods you will need to use in order to retrieve
// and store data in your database.
// selectAll()
// insertOne()
// updateOne()

// selectAll()
var orm = {
  selectAll: function (tableSel) {
    return new Promise((resolve, reject) => {
      var queryString = "SELECT * FROM ??"
      connection.query(queryString, [tableSel], (err, data) => {
        if (err) reject(err)
        console.log("All data selected")
        resolve(data)
      })
    })

  },
// insertOne()
  insertOne: function (tableSel, colSel, colVal) {
    return new Promise((resolve, reject) => {
      var queryString = "INSERT INTO ?? (??) VALUES (?)"
      connection.query(queryString, [tableSel, colSel, colVal], (err, data) => {
        if (err) throw err;
        console.log("Values inserted into table", data.insertId)
        resolve(data.insertId)
      })
    })

  },
// updateOne()
  updateOne: function (tableSel, colSel, colVal, id) {
    return new Promise((resolve, reject) => {
      var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?"
      connection.query(queryString, [tableSel, colSel, colVal, id], (err, data) => {
        if (err) throw err;
        console.log("Table updated", data)
        resolve()
      })
    })
  }

}

//Export the ORM object
module.exports = orm
