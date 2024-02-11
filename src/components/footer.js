import React from "react";
import { Link } from "gatsby";
import Button from "./Atoms/button";
import FacebookIcon from '../images/facebookicon.svg';
import TwitterIcon from '../images/xicon.svg';
import LinkedInIcon from '../images/linkedicon.svg';
import InstagramIcon from '../images/instagramicon.svg';
import logoImg from "../images/logo.svg";

const Footer = () => {
  const footerContent = [
    { title: "Services", details: ["Artificial Intelligence", "Business Automation", "Web / Mobile Development", "Audit & IT Consulting", "AR & VR", "Digital Branding"] },
    { title: "About Us", details: ["Blogs", "Careers"] },
    { title: "Legal", details: ["Terms and Conditions", "Privacy Policy"] },
    { title: "Contact Us", details: ["Let’s chat", "support@techfi.ca"] },
  ];

  return (
    <div className="bg-lightblack text-white py-10 mt-10 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative">
        <div className="xs:flex hidden">
          <img src={logoImg} alt="Techfi" className="w-auto h-20 opacity-75" />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:flex-1">
            <h1 className="text-4xl font-bold mb-4">Ready to gain your valuable time?</h1>
            <div className="flex flex-col xs:flex-row gap-4 mb-8">
              <button className="solid-button">
                BOOK A FREE CONSULTATION
              </button>
              <button className="ghost-button">
                LEARN MORE
              </button>
            </div>
            {/* Icons for md(768px) screens and up, hidden on smaller screens */}
            <div className="hidden md:flex justify-start items-center space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Twitter" className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="w-full md:flex-1 mt-8 md:mt-0 md:ml-8 text-lightgray">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
              {footerContent.map((item, index) => (
                <div key={index}>
                  <h4 className="text-xl mb-4">{item.title}</h4>
                  <ul className="text-sm space-y-2">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>
                        <a href="/" className="hover:underline text-lightgray">{detail}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex md:hidden justify-start items-center space-x-4 mt-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-sm text-center mt-10">
          © {new Date().getFullYear()} <a href="https://www.techfi.ca/" className="hover:underline">techfi.ca</a> • All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
