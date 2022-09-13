import { useEffect, useState } from 'react';

import { ITodo } from '../../services/todoList/todoListModels';
import { TodoListService } from '../../services/todoList/TodoListService';
import { TodoListItem } from './TodoListItem';

const TodoList = () => {
  const [taskItems, setTaskItems] = useState<ITodo[]>([]);

  useEffect(() => {
    setTaskItems(TodoListService.getTodoList());
  }, []);

  const handleOnToggleCompleted = (
    taskId: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newTask = taskItems.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: event.target.checked ? "completed" : "pending",
        };
      }

      return task;
    });

    setTaskItems(newTask);
  };

  return (
    <>
      <ul>
        {taskItems.map((task) => (
          <li key={task.id}>
            <TodoListItem
              onToggleCompleted={handleOnToggleCompleted}
              taskId={task.id}
              status={task.status}
              taskName={task.name}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
