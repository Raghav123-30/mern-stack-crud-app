import axios, { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { task } from "../models/task";
import { useNavigate } from "react-router-dom";

function EditTaskPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [serverError, setServerError] = useState(false);
  const [error, setError] = useState("");
  const { _id } = state;
  const [task, setTask] = useState<task>({
    _id: "",
    title: "",
    description: "",
  });
  useEffect(() => {
    if (!_id) {
      navigate("/");
    }
  });

  useEffect(() => {
    console.log("request is sent again");
    const getTask = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/task?_id=${_id}`
        );
        if (response.status == 200) {
          const { title, description } = response.data.task;
          setTask({
            _id: _id,
            title: title,
            description: description,
          });
        }
      } catch (error) {
        if (isAxiosError(error)) {
          setServerError(true);
          if (error.status == 404) {
            setError("No task found with that ID");
          } else {
            setError("Something went wrong,please try again later");
          }
        }
      }
    };
    getTask();
  }, [_id]);
  const onUpdate = async () => {
    if (task.title.length <= 3 && task.description.length <= 3) {
      alert("Please provide valid values");
    } else {
      try {
        const response = await axios.put(
          "http://localhost:3000/api/edit-task",
          task
        );
        if (response.status == 200) {
          navigate("/");
        }
      } catch (error) {
        setServerError(true);
        setError("Something went wrong");
      }
    }
  };
  if (serverError) {
    return (
      <div className="error-container">
        <p className="error">{error}</p>
      </div>
    );
  } else {
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
        <button className="btn" onClick={onUpdate}>
          Update
        </button>
      </div>
    );
  }
}

export default EditTaskPage;
