/* Mongoose Connection */
const mongoose = require('mongoose')
assert = require("assert");
const mongo_uri = process.env.MONGODB_URI
mongoose.connect(mongo_uri)

mongoose.Promise = global.Promise;
mongoose.connect(
    mongo_uri,
  { useNewUrlParser: true },
  function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to database");

  }
);
mongoose.connection.on("error", console.error.bind(console, "MongoDB connection Error:"));
mongoose.set("debug", true);

module.exports = mongoose.connection;
