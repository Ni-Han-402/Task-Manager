import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calender from "./components/Calender/Calender";
import CompleteTodos from "./components/CompleteTodos/CompleteTodos";
import NotFound from "./components/NotFound/NotFound";
import TaskUpdate from "./components/TaskUpdate/TaskUpdate";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todos></Todos>}></Route>
        <Route
          path="/complete-task"
          element={<CompleteTodos></CompleteTodos>}
        ></Route>
        <Route path="/calender" element={<Calender></Calender>}></Route>
        <Route path="/task/:taskId" element={<TaskUpdate></TaskUpdate>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
