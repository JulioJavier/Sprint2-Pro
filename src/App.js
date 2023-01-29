import Title from "./components/Title/Title";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";


function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title/>
        <TodoInput/>
        <TodoList>
          <h2>TodoList</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </TodoList>
      </div>

    </div>
  );
}

export default App;
