import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos } = useSelector((state) => state.todo);

  if (todos.length === 0) return <p className="text-gray-500 ">Todo list is empty</p>;

  return (
    <div className="flex flex-col gap-1">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
