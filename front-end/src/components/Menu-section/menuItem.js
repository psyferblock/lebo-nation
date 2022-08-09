import React from 'react'

const MenuItem = ( {item } ) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden mx-auto">
      <div className=" mx-auto flex flex-wrap">
        <div className="lg:w-2/5 w-full lg:pl-10 ">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            {item.name}
          </h1>
          <p className="leading-relaxed my-3">{item.ingredients.join(" + ")}</p>
          <div className="flex mt-6 justify-between items-center ">
            <span className="title-font font-medium text-2xl text-gray-900">
              {item.price}
            </span>
            <button className="my-2 w-fit text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
               cart
            </button>
            <button className="rounded-full w-10 h-10 md:mr-4 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
              <svg
                fill="currentColor"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
              </svg>
            </button>
          </div>
        </div>
        <img
          alt="ecommerce"
          className="lg:w-3/5 w-full h-auto  object-cover object-center rounded"
          src={item.photo}
        />
      </div>
    </section>
  );
}

export default MenuItem;