import { ITodo } from './todoListModels';

const todos: ITodo[] = [
  {
    id: 1,
    name: "academia",
    status: "pending",
  },
  {
    id: 2,
    name: "trabalhar",
    status: "pending",
  },
  {
    id: 3,
    name: "estudar",
    status: "pending",
  },
];

export const TodoListService = {
  getTodoList: () => todos,
};
