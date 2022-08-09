import * as React from "react";

import Footer from "../components/General/footer";
import Carousel from "../components/General/carousel";
import Navbar from "../components/General/navbar";
import NavigationMenu from "../components/General/navigationMenu"
import MenuSection from "../components/Menu-section/menu";

const Home = () => {

  return (
    <div className="w-full mx-auto flex  md:flex-row flex-col">
      <div className="max-w-lg w-full md:w-2/12  mb-10 md:mb-0 md:border-r-2 border-gray-400 text-center">
        <span className="text-red-500 ">Ads</span>
      </div>
      <div className="lg:flex-grow md:w-10/12 md:p-0 flex flex-col">
        <Navbar />
        <Carousel />
        <NavigationMenu />
        <MenuSection />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
