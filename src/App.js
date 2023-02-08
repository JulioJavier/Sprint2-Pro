import { useState, useEffect } from "react";
import { Title, TodoInput, TodoList} from "./components";
import BlackMode from "./components/BlackMode/BlackMode";
import { Hero } from "./components/Hero";

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
    }
  ]);

  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(todos);

  const addTodo = (title) => {
    const lastId = todos.length > 0 ? todos[todos.length - 1].id : 1;

    const newTodo = {
      id: lastId + 1,
      title,
      completed: false,
    };

    const todoList = [...todos];
    todoList.push(newTodo);
    setTodos(todoList);
  };

  const handleSetComplete = (id) => {
    const updatedList = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedList);
  };

  const handleDelete = (id) => {
    const updatedList = todos.filter(todo => todo.id !== id);
    setTodos(updatedList);
  };

  const handleClearComplete = () => {
    const updatedList = todos.filter(todo => !todo.completed);
    setTodos(updatedList);
  };

  const showAllTodos = () => {
    setActiveFilter("all");
  };

  const showActiveTodos = () => {
    setActiveFilter("active");
  };

  const showCompletedTodos = () => {
    setActiveFilter("completed");
  };

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredTodos(todos);
    } else if (activeFilter === "active") {
      const activeTodos = todos.filter(todo => todo.completed === false);
      setFilteredTodos(activeTodos);
    } else if (activeFilter === "completed") {
      const completedTodos = todos.filter(todo => todo.completed === true);
      setFilteredTodos(completedTodos);
    }
  }, [activeFilter, todos]);

  return (
    <div className="font-josefin font-bold text-DarkTheme-LightGrayishBlue w-screen h-screen mx-auto flex">

      <div className="flex flex-col items-center justify-center w-full mx-auto">
      <Hero />
      <div className="p-2 flex flex-col justify-center absolute top-10 w-1/2">    
          <div className="flex justify-between">
            <Title />
            <BlackMode />
          </div>
          <TodoInput addTodo={addTodo} />
          <TodoList
            activeFilter={activeFilter}
            todos={filteredTodos}
            showAllTodos={showAllTodos}
            showActiveTodos={showActiveTodos}
            showCompletedTodos={showCompletedTodos}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete}
            handleClearComplete={handleClearComplete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
