import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";

const Todos = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return (
    <div className="container max-w-[1080px] mx-auto">
      <div className="w-full h-[350px] bg-white rounded-b-[50%] relative">
        <div className="navbar bg-white flex justify-center">
          <div>
            <ul className="menu menu-horizontal pt-8 px-5 gap-3">
              <li className="hover:bg-primary">
                <Link to="/">Todos</Link>
              </li>
              <li className="hover:bg-primary">
                <Link to="/complete-task">Complete Task</Link>
              </li>
              <li className="hover:bg-primary">
                <Link to="/calender">Calender</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-base-200 w-[90%] mx-auto absolute bottom-0 left-[5%] h-56 rounded-lg flex gap-3 items-center justify-center">
          <input
            type="text"
            placeholder="Enter Task"
            className="p-3 border-b-2 rounded-lg"
          />
          <button className="btn btn-primary">ADD</button>
        </div>
      </div>
      <div className="bg-base-100 w-[90%] mx-auto mt-5">
        <div class="overflow-x-auto w-full">
          <table class="table w-full p-5">
            <thead>
              <tr>
                <th></th>
                <th>Task Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((item) => (
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th>
                  <td>{item.task}</td>
                  <th>
                    <div className="flex gap-3">
                      <button class="btn btn-success">
                        <FiEdit className="text-xl text-white"></FiEdit>
                      </button>
                      <button class="btn btn-error">
                        <RiDeleteBin5Fill className="text-xl text-white"></RiDeleteBin5Fill>
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Todos;
