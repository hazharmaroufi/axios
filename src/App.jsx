import axios from "axios";
import { useEffect, useState } from "react";
import Post from "./components/Post";
import Delete from "./components/Delete";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data));
  }, []);
  return (
    <>
      {/* <h1>Hazhar Maroufi</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul> */}
      {/* <Post /> */}
      <Delete />
    </>
  );
}

export default App;
