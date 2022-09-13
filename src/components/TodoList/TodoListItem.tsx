import './style-todoListeItem.scss';

interface ITodoListItemProps {
  onToggleCompleted: (
    taskId: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  taskId: number;
  status: string;
  taskName: string;
}

export const TodoListItem = ({
  onToggleCompleted,
  taskId,
  status,
  taskName,
}: ITodoListItemProps) => {
  return (
    <div className="tasks">
      <input
        type="checkbox"
        onChange={(event) => onToggleCompleted(taskId, event)}
        id={taskId.toString()}
      />
      <label
        htmlFor={taskId.toString()}
        style={{
          textDecoration: status === "completed" ? "line-through" : "none",
          background: status === "completed" ? "#e9ba35" : "#48c10a",
        }}
      >
        Tarefa: {taskName}
      </label>
    </div>
  );
};
