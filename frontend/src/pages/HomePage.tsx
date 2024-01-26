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
      <div className="error-container">
        <p className="error">Something went wrong, please try again later</p>
      </div>
    );
  } else {
    return (
      <div>
        {allTasks.length == 0 && <p>No tasks yet...</p>}
        {allTasks.map((item) => (
          <TaskItem
            _id={item._id}
            title={item.title}
            description={item.description}
            key={item._id}
          />
        ))}
      </div>
    );
  }
}

export default HomePage;
