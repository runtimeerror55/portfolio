const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { ProjectModel } = require("./models/project");
const { BlogModel } = require("./models/blog");

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      require("dotenv").config({ path: __dirname + "\\.env" });
      app.use(cors("*"));
}
mongoose
      .connect(process.env.hosted_db_url)
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

            response.status(200).json({ status: "success", payload: projects });
      } catch (error) {
            response
                  .status(500)
                  .json({ status: "error", message: error.message });
      }
});

app.get("/blogs", async (request, response) => {
      try {
            const blogs = await BlogModel.find({});
            response.status(200).json({ status: "success", payload: blogs });
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

            response.status(200).json({ status: "success", payload: project });
      } catch (error) {
            response
                  .status(500)
                  .json({ status: "error", message: error.message });
      }
});
