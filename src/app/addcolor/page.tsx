"use client";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const page = () => {
  const router = useRouter();

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${day}-${month}-${year}`;

  const [color, setColor] = useState({
    name: "",
    date: currentDate,
  });

  const OnSubmit = async () => {
    try {
      const response = await axios.post("/api/addcolor", color);
      console.log("Response data:" + response.data);
      router.push("/color");
    } catch (error: any) {
      console.log("Error:" + error.message);
    } finally {
    }
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Color Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="colorName"
              type="text"
              placeholder="Color Name"
              value={color.name}
              onChange={(e) => setColor({ ...color, name: e.target.value })}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={OnSubmit}
            >
              Submit
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
