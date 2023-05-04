import React from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/userSlice";
export default function Submit({ value, data, userFunc }) {
  const dispatch = useDispatch();

  return (
    <button
      type="submit"
      className="w-full h-10 rounded dark:bg-white bg-secondary dark:text-secondary text-white hover:bg-opacity-90 transition font-semibold text-lg cursor-pointer p-1"
      value={value}
      data={data}
      onClick={() => dispatch(data)}
    >
      {value}
    </button>
  );
}
