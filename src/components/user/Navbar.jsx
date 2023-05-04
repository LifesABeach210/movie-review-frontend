import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { Container } from "./Container";
import { Link } from "react-router-dom";
import { UseTheme } from "../../context/hooks";
export const Navbar = () => {
  const { toggleTheme } = UseTheme();
  return (
    <div className="bg-secondary shadow-sm shadow-gray-500">
      <Container className="p-2">
        {" "}
        <div className="flex justify-between items-center">
          <Link to="/">
            {" "}
            <img className="h-10" alt="" src="./logo.png"></img>
          </Link>
          <ul className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="bg-dark-subtle p-1 rounded"
            >
              {" "}
              <li>
                <BsFillSunFill className="text-white" size={24} />
              </li>
            </button>
            <li>
              <input
                type="text"
                placeholder="Search.."
                className="border-dark-subtle p-1 rounded bg-stone-500 text-xl outline-none focus:border-white"
              ></input>
            </li>
            <Link
              to="/auth/signin"
              className="text-white font-semibold text-lg"
            >
              {" "}
              <li className="">Login</li>
            </Link>
          </ul>
        </div>
      </Container>
    </div>
  );
};
