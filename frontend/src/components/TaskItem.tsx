import { MdEdit, MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { task } from "../models/task";
import axios from "axios";

function TaskItem({ _id, title, description }: task) {
  const navigate = useNavigate();
  const onEditRequested = () => {
    navigate("/edit-task", { state: { _id: _id } });
  };
  const onDeleteRequested = async () => {
    const userConfirmation = confirm(
      "Are you sure,you want to delete the task?"
    );
    try {
      if (userConfirmation) {
        const response = await axios.post("http://localhost:3000/api/task", {
          _id: _id,
        });

        if (response.status == 200) {
          navigate("/", { replace: true });
        } else {
          alert("something went wrong,please try again later");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="task-card">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <div className="edit-delete-buttons">
          <button onClick={onEditRequested}>
            <MdEdit size={24} className="edit-button" />
          </button>
          <button onClick={onDeleteRequested}>
            <MdDelete size={24} className="delete-button" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
