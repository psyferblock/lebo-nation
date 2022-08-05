import { Link } from "react-router-dom";



const notFound = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-100 px-10 relative mb-4">
            <img
              alt="gallery"
              className="w-full object-cover h-full  block inset-0"
              src="https://kinsta.com/wp-content/uploads/2018/08/error-404-not-found.png"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">
                Sorry
              </h2>
              <p className="leading-relaxed">We couldn't find that page</p>
              <Link to="/">
                <span className="mt-3 text-indigo-500 inline-flex items-center">
                  you can go to home page
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default notFound;
