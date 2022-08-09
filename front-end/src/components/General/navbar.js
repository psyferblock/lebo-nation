import React from 'react';

import { Link } from 'react-router-dom';
// Link is used to navigate to another route (url)


const Navbar = () => {
  return (
    <header className="w-full mx-auto flex flex-wrap p-2 flex-col md:flex-row justify-between bg-indigo-500 ">
      <span className="flex title-font font-medium items-center text-gray-900 mb-3 md:mb-0">
        <span className="ml-3 text-xl text-white">Dashboard</span>
      </span>
      <div>
        <Link to="/user/login">
          <button className="mr-3 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Log In
          </button>
        </Link>

        <Link to="/user/register">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar