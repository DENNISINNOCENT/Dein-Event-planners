import { React, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import image from '../assets/muthoni3.jpg'
import image1 from '../assets/images (4).jpeg'
import image2 from  '../assets/images (5).jpeg'
import image3 from  '../assets/G1.jpg'
import image4 from  '../assets/images (6).jpeg'
import image5 from  '../assets/img-1541270599gk84n.jpg'

const Tslider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newSlide);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newSlide = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide);
    
  };
  const goToSlide =(slideIndex) =>{
    setCurrentIndex(slideIndex)
  }
  const slides = [
    {
      url:`${image}`
   },
    {
      url: `${image1}`
    },
    {
      url: `${image2}`
    },
    {
      url: `${image3}`
    },
    {
      url: `${image4}`
    },
    {
      url: `${image5}`
    },
    
    
  ];
  return (
    <div className="m-auto  px-4 py-2 relative group   ">
      <div className="flex justify-center">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="  h-72 w-3/4 bg-cover bg-center   duration-500 rounded-2xl bg-no-repeat  "
        ></div>
      </div>
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-44  text-2xl p-2 bg-black/0 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={prevSlide} />
      </div>
      <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-44 text-2xl p-2 bg-black/0 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={nextSlide} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled /> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tslider;
