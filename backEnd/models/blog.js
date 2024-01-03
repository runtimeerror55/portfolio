const mongoose = require("mongoose");
const blogSchema = mongoose.Schema({
      title: String,
});

module.exports.BlogModel = mongoose.model("blogs", blogSchema);
