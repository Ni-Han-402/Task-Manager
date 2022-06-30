import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calender from "./components/Calender/Calender";
import CompleteTodos from "./components/CompleteTodos/CompleteTodos";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todos></Todos>}></Route>
        <Route
          path="/complete-todos"
          element={<CompleteTodos></CompleteTodos>}
        ></Route>
        <Route path="/calender" element={<Calender></Calender>}></Route>
      </Routes>
    </div>
  );
}

export default App;
