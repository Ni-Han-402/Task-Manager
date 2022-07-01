import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useForm } from "react-hook-form";

const Todos = () => {
  const [tasks, setTasks] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const navigateToUpdate = (id) => {
    navigate(`/task/${id}`);
  };

  useEffect(() => {
    fetch("http://localhost:5000/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const handleDelete = (id) => {
    const url = `http://localhost:5000/task/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remaining = tasks.filter((task) => task._id !== id);
          setTasks(remaining);
        }
      });
  };

  const onSubmit = (data) => {
    console.log(data);
    const url = `http://localhost:5000/task`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
      });
  };

  const completedTask = (id) => {
    const url = `http://localhost:5000/task/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
            <input className="btn btn-primary" type="submit" value="Add" />
          </form>
        </div>
      </div>
      <div className="bg-base-100 w-[90%] mx-auto mt-5">
        <div className="overflow-x-auto w-full">
          <table className="table w-full p-5">
            <thead>
              <tr>
                <th></th>
                <th>Task Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((item) => (
                <tr key={item._id}>
                  <th>
                    <label>
                      <input
                        onClick={() => completedTask(item._id)}
                        type="checkbox"
                        className="checkbox"
                      />
                    </label>
                  </th>
                  <td>{item.task}</td>
                  <th>
                    <div className="flex gap-3">
                      <button
                        onClick={() => navigateToUpdate(item._id)}
                        className="btn btn-success"
                      >
                        <FiEdit className="text-xl text-white"></FiEdit>
                      </button>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-error"
                      >
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
