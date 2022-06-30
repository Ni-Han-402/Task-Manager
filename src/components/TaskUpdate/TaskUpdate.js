import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const TaskUpdate = () => {
  const { taskId } = useParams();
  const [tasks, setTasks] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/task/${taskId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const task = data.task;
    const updatedTask = { task };
    const url = `http://localhost:5000/task/${taskId}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
      });
  };
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
          <form className="addItem-form" onSubmit={handleSubmit(onSubmit)}>
            <input
              className="p-3 border-b-2 rounded-lg mr-3"
              type="text"
              placeholder="Enter Task"
              {...register("task")}
            />
            <input className="btn btn-primary" type="submit" value="Edit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskUpdate;
