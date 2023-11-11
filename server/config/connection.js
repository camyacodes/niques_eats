require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://camyacodes:ON7FZCbkWflVmc2o@cluster0.irjzqlw.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

module.exports = mongoose.connection;
