"use client";
import React, { useState } from "react";
import Link from "next/link";

const TopNav = () => {
  const [isMenuHidden1, setIsMenuHidden1] = useState(true);
  const [isDropdownMenuHidden1, setIsDropdownMenuHidden1] = useState(true);

  const [isMenuHidden2, setIsMenuHidden2] = useState(true);
  const [isDropdownMenuHidden2, setIsDropdownMenuHidden2] = useState(true);

  const [isMenuHidden3, setIsMenuHidden3] = useState(true);
  const [isDropdownMenuHidden3, setIsDropdownMenuHidden3] = useState(true);

  const handleMenuToggle1 = () => {
    setIsMenuHidden1(!isMenuHidden1);
  };

  const handleDropdownToggle1 = () => {
    setIsDropdownMenuHidden1(!isDropdownMenuHidden1);
  };

  const handleMenuToggle2 = () => {
    setIsMenuHidden2(!isMenuHidden2);
  };

  const handleDropdownToggle2 = () => {
    setIsDropdownMenuHidden2(!isDropdownMenuHidden2);
  };

  const handleMenuToggle3 = () => {
    setIsMenuHidden3(!isMenuHidden3);
  };

  const handleDropdownToggle3 = () => {
    setIsDropdownMenuHidden3(!isDropdownMenuHidden3);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
          <img
            src="https://www.codewithfaraz.com/InstaPic.png"
            className="h-8 mr-3"
            alt="codewithfaraz Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Agathiar Textiles
          </span>
        </Link>
        <button
          id="navbar-toggle"
          type="button"
          onClick={handleMenuToggle1}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={!isMenuHidden1}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuHidden1 ? "hidden" : ""
          } w-full md:block md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              {/* <a
                href="/transaction"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                aria-current="page"
              > </a>*/}

              <Link
                href="/transaction"
                aria-current="page"
                className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
              >
                Transaction
              </Link>
            </li>
            <li>
              <Link
                href="/voucher"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Voucher
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                View customer
              </Link>
            </li>
            {/* Yarn */}

            <li>
              <button
                id="dropdownNavbarLink"
                onClick={handleDropdownToggle1}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Yarn
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`absolute z-10 ${
                  isDropdownMenuHidden1 ? "hidden" : ""
                } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="/addoutsidethread"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Yarn Purchase
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/thread"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Yarn Stock
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/threadstock"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Yarn Cotton Stocks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/threadpolystock"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Yarn Poly Stocks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/color"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Add Color
                    </Link>
                  </li>
                  <li onClick={handleDropdownToggle1}>
                    <Link
                      href="/yarn"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Add Yarn Shop
                    </Link>
                  </li>
                </ul>
                {/* <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Sign Out
                  </a>
                </div> */}
              </div>
            </li>

            {/* Loom Customer */}

            <li>
              <button
                id="dropdownNavbarLink"
                onClick={handleDropdownToggle2}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Loom Customer
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`absolute z-10 ${
                  isDropdownMenuHidden2 ? "hidden" : ""
                } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="/users"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      View Customer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/designs"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Add Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/addusers"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Add Customer
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/printalldetails"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Print Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/paavulist"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Paavu List
                    </Link>
                  </li>
                </ul>
                {/* <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Sign Out
                  </a>
                </div> */}
              </div>
            </li>

            {/* Billing Details */}

            <li>
              <button
                id="dropdownNavbarLink"
                onClick={handleDropdownToggle3}
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Billing Details
                <svg
                  className="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownNavbar"
                className={`absolute z-10 ${
                  isDropdownMenuHidden3 ? "hidden" : ""
                } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <Link
                      href="/yarnbilling"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Yarn Billing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/yarnbillingdetails"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Yarn Billing Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/viewreports"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      View Reports
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/lalbagreports"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Lalbag Reports
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/kamalreports"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Kamal Reports
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="sixerreports"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sixer Reports
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/polycheckedreports"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Poly Mini Reports
                    </Link>
                  </li>
                </ul>
                {/* <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                  >
                    Sign Out
                  </a>
                </div> */}
              </div>
            </li>

            <li>
              <Link
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
