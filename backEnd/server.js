const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { ProjectModel } = require("./models/project");
app.use(
      cors({
            origin: "*",
      })
);
mongoose
      .connect("mongodb://127.0.0.1:27017/portfolio")
      .then(() => {
            console.log("connected to mongodb");
      })
      .catch((e) => {
            console.log(e);
      });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(8080, () => {
      console.log("listening on 8080 port");
});

app.get("/projects", async (request, response) => {
      try {
            const projects = await ProjectModel.find({});
            setTimeout(() => {
                  response
                        .status(200)
                        .json({ status: "success", payload: projects });
            }, 1000);
      } catch (error) {
            response
                  .status(500)
                  .json({ status: "error", message: error.message });
      }
});

app.get("/projects/:projectId", async (request, response) => {
      try {
            const project = await ProjectModel.findById(
                  request.params.projectId
            );
            setTimeout(() => {
                  response
                        .status(200)
                        .json({ status: "success", payload: project });
            }, 1000);
      } catch (error) {
            response
                  .status(500)
                  .json({ status: "error", message: error.message });
      }
});
