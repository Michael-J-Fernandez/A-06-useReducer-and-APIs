import { useEffect, useReducer, useState } from "react";
import {
  postsDisplay,
  todoDisplay,
  usersDisplay,
} from "./utils/displayFunctions";

import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "posts":
      return postsDisplay(action.payload);
    case "todos":
      return todoDisplay(action.payload);
    case "users":
      return usersDisplay(action.payload);

    default:
      return state;
  }
};

function App() {
  const [displayType, setDisplayType] = useState("posts");
  const [displayData, setDisplayData] = useState([]);
  const [number, setNumber] = useState("");

  const [state, dispatch] = useReducer(reducer, null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await fetch(
        `https://jsonplaceholder.typicode.com/${displayType}/${number}`
      );
      const data = await fetchedPosts.json();

      setDisplayData(data);
      dispatch({ type: displayType, payload: data });
    };

    fetchData();
  }, [displayType, number]);

  const handleType = (e) => {
    setDisplayType(e.target.value);
  };

  const handleNumberSubmit = (e) => {
    if (e.key === "Enter") setNumber(e.target.value);
  };

  const numberMessage = displayData.length > 1 ? ` (Between 1 and ${displayData.length})` : null;

  return (
    <div className="App">
      <div className="dropdown">
        <label htmlFor="display-type">
          <select name="display-type" id="display-type" onChange={handleType}>
            <option value="posts">Posts</option>
            <option value="todos">Todos</option>
            <option value="users">Users</option>
          </select>
        </label>
      </div>
      {displayData.length}
      <div className="dropdown">
        <div>
          <label htmlFor="number">
            Number{numberMessage}: <br />
            <input type="text" name="number" id="number" autoComplete="off" onKeyDown={handleNumberSubmit}/>
          </label>
        </div>
      </div>

      {state}
    </div>
  );
}

export default App;
