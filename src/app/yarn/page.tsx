"use client";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";

const Yarn = () => {
  const [data, setData] = useState(null);

  const [options, setOptions] = useState([
    { key: "Select a company", value: "" },
  ]);

  const [optionsColor, setOptionsColor] = useState([
    { key: "Select a color", value: "" },
  ]);

  const FetchYarn = () => {
    const results = [{ key: "", value: "" }];
    fetch("/api/yarn")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        data.forEach((value: any) => {
          results.push({
            key: value.name,
            value: value.id,
          });
        });

        setOptions(results);
      });
  };

  const FetchColor = () => {
    const results = [{ key: "", value: "" }];
    fetch("/api/color")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        data.forEach((value: any) => {
          results.push({
            key: value.name,
            value: value.id,
          });
        });

        setOptionsColor(results);
      });
  };

  useEffect(() => {
    FetchYarn();
    FetchColor();
  }, []);

  return (
    <>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <Link
            href="/addyarn"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add yarn
          </Link>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Yarn Shop
          </label>
          <div className="inline-block relative w-64">
            <select
              className="block bg-white border w-64
         border-gray-400 px-4 py-2 pr-8 rounded shadow 
         leading-tight"
              name="yarnShop"
              id="yarnShop"
            >
              {options.map((option) => {
                return (
                  <option key={option.value} value={option.value}>
                    {option.key}
                  </option>
                );
              })}
            </select>
            
          </div>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Color
          </label>
          <select
            className="bg-white border w-64
         border-gray-400 px-4 py-2 rounded shadow 
         leading-tight"
            name="yarnColor"
            id="yarnColor"
          >
            {optionsColor.map((option) => {
              return (
                <option key={option.value} value={option.value}>
                  {option.key}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Kilo gram
          </label>
          <input
            type="number"
            id="kiloGram"
            className="bg-white border w-64
            border-gray-400 px-4 py-2 rounded shadow 
            leading-tight"
            required
          />
        </div>
        <div className="mb-5">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Yarn;
