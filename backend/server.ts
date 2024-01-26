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
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
