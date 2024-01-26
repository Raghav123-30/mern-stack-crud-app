import { MdEdit, MdDelete } from "react-icons/md";

interface TaskItemProps {
  title: string;
  description: string;
}

function TaskItem({ title, description }: TaskItemProps) {
  return (
    <div className="task-card">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div>
        <button className="edit-delete-buttons">
          <MdEdit size={24} className="edit-button" />
          <MdDelete size={24} className="delete-button" />
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
