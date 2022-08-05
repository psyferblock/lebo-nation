import * as React from "react";
import { Link } from "react-router-dom";
// Link is used to navigate to another route (url)

import Footer from "../components/General/footer";




const Home = () => {

  return (
    <div className="w-full mx-auto flex  md:flex-row flex-col">
      <div className="max-w-lg w-full md:w-2/12  mb-10 md:mb-0 border-r-2 border-gray-400 text-center">
        <span className="text-red-500 ">Ads</span>
      </div>
      <div className="lg:flex-grow md:w-10/12 md:p-0 flex flex-col">
        <header className="w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between bg-indigo-500 ">
          <span className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
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
        <Footer />
      </div>
    </div>
  );
};

export default Home;
