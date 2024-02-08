import React, { useState } from "react";
import { Link } from "gatsby";
import logoImg from "../images/logo.svg";
import navbarConfig from "../constants/navbar.json";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (index) => {
    setOpenSubmenus(prev => ({
        ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
        [index]: !prev[index],
    }));
  };

  const closeAllSubmenus = () => {
    setOpenSubmenus(prev => ({
        ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {})
    }));
  };

  const renderSubItems = (subItems, index) => (
    <div 
        className={`sub-menu ${openSubmenus[index] ? "open" : "closed"}`}
        onMouseLeave={() => toggleSubmenu(index)}
    >
        {subItems.map((item, subIndex) => (
            <Link key={subIndex} to={item.link} className={item.className}>
                {item.name}
            </Link>
        ))}
    </div>
  );

  return (
    <nav className="bg-transparent">
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between h-16">
          <div className="w-full justify-between flex items-center">
            <a className="text-white flex-shrink-0 font-poppins" href="/">
              <img className="w-48 max-h-screen mt-2" src={logoImg} alt="Header"></img>
            </a>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navbarConfig.navbarItems.map((item, index) => (
                  <div className="linkWrapper" key={index}>
                    <Link
                      to={item.link}
                      className={item.className}
                      onMouseOver={() => item.subItems ? toggleSubmenu(index) : closeAllSubmenus()}
                      onTouchStart={() => item.subItems && toggleSubmenu(index)}
                    >
                      {item.name}
                    </Link>
                    {item.subItems && renderSubItems(item.subItems, index)}
                  </div>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              >
                <svg
                  width="20"
                  height="20"
                  fill="white"
                  className="h-8 w-8"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
                </svg>              
              </button>
            </div>
          </div>
        </div>
      </div>
      {openMenu && (
        <div className={`md:hidden ${openMenu ? 'mobileWrapper' : ''}`}> 
          <div className="flex flex-col items-baseline space-y-4">
            <button 
              onClick={() => setOpenMenu(false)} 
              className="mobileNavClose"
            >
              &#x2715; {/* Unicode for 'x' symbol */}
            </button>
            {navbarConfig.navbarItems.map((item, index) => (
              <div key={index}>
                <Link
                  to={item.link}
                  className={item.className}
                  onClick={() => item.subItems && toggleSubmenu(index)}
                >
                  {item.name}
                </Link>
                {item.subItems && renderSubItems(item.subItems, index)}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
