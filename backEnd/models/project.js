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
      versions: [
            {
                  type: mongoose.Schema.Types.ObjectId,
                  ref: "projects",
            },
      ],
      timeSpentLink: String,
      introduction: String,
      icon: String,
      images: [String],
});

module.exports.ProjectModel = mongoose.model("projects", projectSchema);
