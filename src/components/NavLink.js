import React from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "./MyLinks";

const NavLink = () => {
  return (
    <>
      {NavLinks.map((NavLink) => (
        <div>
          <div className="text-left md:cursor-pointer px-3 group">
          <Link to ={NavLink.path} className="py-7  ">{NavLink.name}</Link>
            {NavLink.subMenu && (
              <div className="absolute top-10 hidden group-hover:md:block hover:md:block py-5 ">
                <div className="py-2">
                  <div className="bg-white p-3 ">
                    {NavLink.subLinks.map((subLink,index) => (
                      <div className="">
                        <Link to={subLink.path} className="hover:text-cyan-600 " key={index}>
                          {subLink.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/*mobile view*/}
          {/* <div>
           <div>
            {
              NavLink.subLinks.map((slink) =>(
                <div>
                  <div>
                  <h1>{slink.name}</h1>
                  </div>
                  
                </div>
              ))
            }
          </div>
          </div> */}
         
        </div>
      ))}
    </>
  );
};

export default NavLink;