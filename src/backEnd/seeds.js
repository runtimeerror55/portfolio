const mongoose = require("mongoose");
const { ProjectModel } = require("./models/project");

const project = [
      {
            title: "Tetris (version 2.0)",
            keyFunctionalities: [],
      },
];
const seeds = async () => {
      const newProject = new ProjectModel({});
      await newProject.save();
};
