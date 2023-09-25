const mongoose = require("mongoose");
const projectSchema = mongoose.Schema({
      title: String,
      keyFunctionalities: [
            {
                  type: String,
            },
      ],
      toolAndLanguages: [
            {
                  type: String,
            },
      ],
      versions: [],
      timeSpent: String,
});

module.exports.ProjectModel = mongoose.model("projects", projectSchema);
