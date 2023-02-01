const mongoose = require("mongoose");
const username = process.env.MONGO_DB_USERNAME;
const passport = process.env.MONGO_DB_PASSWORD;
const url = process.env.MONGO_DB_URL;
const connection = mongoose.connect(`mongodb+srv://${username}:${passport}@${url}/?retryWrites=true&w=majority`);
module.exports = {connection};
