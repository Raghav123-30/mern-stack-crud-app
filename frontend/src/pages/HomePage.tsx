import { useEffect, useState } from "react";
import TaskItem from "../components/TaskItem";
import { task } from "../models/task";
import axios from "axios";

function HomePage() {
  const [allTasks, setAllTasks] = useState<task[]>([]);
  const [serverError, setServerError] = useState(false);
  useEffect(() => {
    const getAllTasks = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tasks");
        const tasks = await response.data.tasks;
        setAllTasks(tasks);
      } catch (error) {
        console.log(error);
        setServerError(true);
      }
    };
    getAllTasks();
  }, []);
  if (serverError) {
    return (
      <div className="main">
        <p className="error">Something went wrong, please try again later</p>
      </div>
    );
  } else {
    return (
      <div>
        {allTasks.map((item) => (
          <TaskItem
            title={item.title}
            description={item.description}
            key={item.id}
          />
        ))}
      </div>
    );
  }
}

export default HomePage;
