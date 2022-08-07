import React from 'react'

function navigationMenu() {
  return (
    <header className="w-full mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between bg-white ">
      <div className="md:mr-auto md:ml-4 md:py-1 	flex flex-wrap items-center text-base justify-center">
        <div className="flex title-font text-lg font-medium  mb-4 md:mb-0  text-indigo-500 px-3 py-2 hover:bg-indigo-500 hover:text-white hover:rounded-lg cursor-pointer">
          menu
        </div>
        <div className="flex title-font text-lg font-medium  mb-4 md:mb-0  text-indigo-500 px-3 py-2 hover:bg-indigo-500 hover:text-white hover:rounded-lg cursor-pointer">
          positive
        </div>
        <div className="flex title-font text-lg font-medium  mb-4 md:mb-0  text-indigo-500 px-3 py-2 hover:bg-indigo-500 hover:text-white hover:rounded-lg cursor-pointer">
          brunch Vibe
        </div>
        <div className="flex title-font text-lg font-medium  mb-4 md:mb-0  text-indigo-500 px-3 py-2 hover:bg-indigo-500 hover:text-white hover:rounded-lg cursor-pointer">
          events
        </div>
      </div>

      <div className="flex title-font text-lg font-medium  mb-4 md:mb-0  text-indigo-500 px-3 py-2 hover:bg-indigo-500 hover:text-white hover:rounded-xl cursor-pointer">
        invite
      </div>
    </header>
  );
}

export default navigationMenu