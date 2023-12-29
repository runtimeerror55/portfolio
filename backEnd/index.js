const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const { ProjectModel } = require("./models/project");
const localDbUrl =
      " mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.0";
const hostedDbUrl =
      "mongodb+srv://aakashdeep954:a1S6mNXvLK0b158x@portfoliocluster.c1qp6ud.mongodb.net/?retryWrites=true&w=majority";

mongoose
      .connect(
            "mongodb+srv://aakashdeep954:a1S6mNXvLK0b158x@portfoliocluster.c1qp6ud.mongodb.net/?retryWrites=true&w=majority"
      )
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
