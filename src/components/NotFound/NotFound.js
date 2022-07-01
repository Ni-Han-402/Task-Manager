import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
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
          <h1 className="text-3xl font-bold">404 - NotFound</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
