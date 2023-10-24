import React from "react";
import logo from "../assets/images (3).jpeg";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className="mt-3">
      <div className=" text-xl font  font-serif grid md:grid-cols-4 bg-white gap-5  items-center justify-around   ">
      <div className="flex items-center">
          <img src={logo} alt="logo" className="h-12 w-15 md:cursor-pointer" />
          <span className="font-semibold">Ellier Events</span>
        </div>
        <div className="">

          <div>
            <ion-icon name="mail-open"></ion-icon>
            <span>mutindahdennis@gmail.com</span>
          </div>
          <div>
            <ion-icon name="call"></ion-icon>
            <span>+(254)-741991874</span>
          </div>
          <div>
            <ion-icon name="logo-whatsapp"></ion-icon>
            <span>+(254)-741991874</span>
          </div>
          <div>
            <ion-icon name="pin"></ion-icon>
            <span>Kitengela</span>
          </div>
        </div>
        <div>
          <h1 className="font-semibold">Quick Navigation</h1>
          <div>
          <Link to = '/'>Home</Link>
          </div>
          <div>
          <Link to = "/about">About </Link>
          </div>
          <div>
            <Link to ="/contact">Contact Us</Link>
          </div>
          
          

        </div>
        <div>
          <h1 className="font-semibold">Services</h1>
          <div>
          <Link to = '/wedding'>Wedding</Link>
          </div>
          <div>
          <Link to = "/traditional_wedding">Traditional Wedding </Link>
          </div>
          <div>
            <Link to ="/graduations">Graduations</Link>
          </div>
          <div>
            <Link to ="/babyShower">Baby_shower</Link>
          </div>
          <div>
            <Link to ="/funeral">Funerals</Link>
          </div>
        </div>
      </div>
      {/* mobile view */}
     
    </div>
  );
};

export default Footer;
