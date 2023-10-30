import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundImage: `url(${"https://media.istockphoto.com/id/1184628725/photo/3d-wedding-reception-background-illustration.webp?b=1&s=170667a&w=0&k=20&c=z6mvGjK_vCn1_nxN5lmY3wuLOrMWywc6K-DBfzgxFuE="})`,
        }}
        className="h-72 bg-cover bg-center justify-center bg-no-repeat"
      >
        <div className="font-semibold text-stone-400 text-8xl font-serif md:flex justify-around items-center decoration-cyan-500 ">
          <span className="  ">Ellier Events</span>
        </div>
        <span className="block h-1 bg-orange-500 "></span>
        <div className="font-semibold text-cyan-500 text-2xl font-serif md:flex justify-center">
          <span className="">Transforming Events</span>
        </div>
      </div>

      <div className="font-[Poppins] m-2 ">
        <h1 className="text-xl font-bold">Ellier Events</h1>
        <div>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            We are dedicated at transforming your event{" "}
          </p>
          <p> to be one of the memorable one in your life time.</p>
          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            We offer all your event needs as a package{" "}
          </p>
          <p> avoiding you all the work or troubles you may experience.</p>

          <p>
            <FontAwesomeIcon icon={faArrowRight} />
            We are readily available,delivering the best and pocket friendly.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
