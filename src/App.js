import { useState } from "react";
import { Title } from "./components/Title/Title";
import { Todo } from "./components/Todo/Todo";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
    {
      id: 2,
      title: "Learn Redux",
      completed: false,
    },
    {
      id: 3,
      title: "Learn Node",
      completed: false,
    },
    {
      id: 4,
      title: "Learn Express",
      completed: false,
    },
  ]);

  const addTodo = ()

  return (
    <div className="font-inter bg-gray-900 min-h-screen text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoInput />
        <TodoList todos={todos}>

        </TodoList>
      </div>
    </div>
  );
}

export default App;
