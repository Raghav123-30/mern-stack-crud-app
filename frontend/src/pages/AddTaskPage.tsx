import { useState } from "react";
import { task } from "../models/task";
import axios, { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";

function AddTaskPage() {
  const [task, setTask] = useState<task>({
    id: "",
    title: "",
    description: "",
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/tasks",
        task
      );
      if (response.status == 201) {
        navigate("/");
      }
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.status == 400) {
          setError(true);
        }
      }
    }
  };
  return (
    <div className="card">
      <input
        placeholder="Title"
        value={task.title}
        onChange={(e) =>
          setTask({
            ...task,
            title: e.target.value,
          })
        }
      ></input>
      <textarea
        placeholder="Description"
        value={task.description}
        onChange={(e) =>
          setTask({
            ...task,
            description: e.target.value,
          })
        }
      ></textarea>
      <button className="btn" onClick={onSubmit}>
        Submit
      </button>
      {error && (
        <p className="error">something went wrong,please try again later</p>
      )}
    </div>
  );
}

export default AddTaskPage;
