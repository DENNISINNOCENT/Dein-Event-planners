import React, { useState } from "react";
import logo from "../assets/images (3).jpeg";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false)  
  return (
    <nav className="font-medium bg-white ">
      {/*logo*/}
      <div className="flex items-center justify-around">
        <div className="md:flex items-center z-50 md:w-auto w-full ">
          <img src={logo} alt="logo" className="h-12 w-15 md:cursor-pointer" />
          <span className="text-xl font-serif font-extrabold justify-start">
            Ellier Events
          </span>
        </div>
        <div className="  flex text-3xl md:hidden justify-end " onClick={()=>setOpen(!open)}>
          <ion-icon name={`${open? "close":"menu" }`}></ion-icon>
          </div>
        <ul className="md:flex hidden uppercase gap-10 items-center font-[Poppins] px-6">
          <li >
            <Link to="/" className="inline-block py-5 px-3">Home</Link>
          </li>
          <NavLink />
        </ul>
        <div className="md:block hidden">
         <Link to ='/booking' className='bg-cyan-500 rounded-full px-6 py-2 text-white font-[Poppins] text-xl '>Book With Us</Link>
        </div>
        {/*mobile nav*/}
        <ul className={`md:hidden bg-white absolute w-full bottom-0 py-4 pl-4 font-[Poppins] duration-500 ${open ? 'left-0':'left-[-100%]'}  `}>
        <li >
            <Link to="/" className="inline-block py-7 px-3">Home</Link>
          </li>
          <NavLink />
         

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
