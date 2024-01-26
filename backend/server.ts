import express from "express";
import bodyParser from "body-parser";
require("dotenv").config();
import cors from "cors";
import { connectToDatabase } from "./db";

import { task } from "./models/task";

const app = express();
app.use(cors());
app.use(bodyParser.json());
connectToDatabase();

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await task.find();
    res.status(200).send({ tasks: tasks });
  } catch (error) {
    res.status(400).send(error);
  }
});
app.post("/api/tasks", async (req, res) => {
  try {
    const { title, description } = req.body;
    const newTask = new task({
      title: title,
      description: description,
    });
    await newTask.save();
    res.status(201).send(newTask);
  } catch {
    res.status(400).send({ message: "something went wrong" });
  }
});
app.get("/api/task", async (req, res) => {
  try {
    const { _id } = req.query;

    const singleTask = await task.findById(_id);
    if (!singleTask) {
      res.status(404).send({ message: "No task found with that Id" });
    }
    res.status(200).send({ task: singleTask });
  } catch (error) {
    res.status(500).send(error);
  }
});
app.put("/api/edit-task", async (req, res) => {
  try {
    const { _id, title, description } = req.body;

    const updated = await task.findByIdAndUpdate(
      _id,
      { title, description },
      {
        new: true,
      }
    );

    res.status(200).send(updated);
  } catch (error) {
    res.status(500).send(error);
  }
});
app.post("/api/task", async (req, res) => {
  console.log(req.body);
  try {
    const { _id } = req.body;
    await task.findByIdAndDelete(_id);
    res.status(200).send({ success: true });
  } catch (error) {
    res.status(501).send(error);
  }
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
