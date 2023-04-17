import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { Container } from "./Container";
export const Navbar = () => {
  return (
    <div className="bg-secondary shadow-sm shadow-gray-500">
      <Container className="p-2">
        {" "}
        <div className="flex justify-between items-center">
          <img className="h-10" alt="" src="./logo.png"></img>
          <ul className="flex items-center space-x-4">
            <button className="bg-dark-subtle p-1 rounded">
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
            <li className="text-white font-semibold text-lg">Login</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
