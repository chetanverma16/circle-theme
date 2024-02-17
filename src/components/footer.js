import React from "react";
import { Link } from "gatsby";
import Button from "./Atoms/button";
import FacebookIcon from '../images/facebookicon.svg';
import TwitterIcon from '../images/xicon.svg';
import LinkedInIcon from '../images/linkedicon.svg';
import InstagramIcon from '../images/instagramicon.svg';
import logoImg from "../images/logo.svg";
import CadIcon from "../images/canada.svg";
import UsaIcon from "../images/usa.svg";

const Footer = () => {
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
                CONTACT US
              </button>
            </div>
            {/* Social Media Icons for smaller screens */}
            <div className="md:hidden flex justify-center xs:justify-start xs:ml-8 items-center space-x-12">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={FacebookIcon} alt="Facebook" className="w-12 h-12" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={TwitterIcon} alt="Twitter" className="w-12 h-12" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} alt="LinkedIn" className="w-12 h-12" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={InstagramIcon} alt="Instagram" className="w-12 h-12" />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-5 gap-6 text-lightgray mt-8">
          <div className="mb-6 md:order-2">
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="text-sm space-y-2">
              <li><a href="services/artificial-intelligence/" className="hover:underline text-lightgray">Artificial Intelligence</a></li>
              <li><a href="services/business-automation/" className="hover:underline text-lightgray">Business Automation</a></li>
              <li><a href="services/web-mobile-development/" className="hover:underline text-lightgray">Web/ Mobile Development</a></li>
              <li><a href="services/audit-it-consulting/" className="hover:underline text-lightgray">Audit & IT Consulting</a></li>
              <li><a href="services/ar-vr/" className="hover:underline text-lightgray">AR & VR</a></li>
              <li><a href="services/digital-branding/" className="hover:underline text-lightgray">Digital Branding</a></li>
            </ul>
          </div>
          <div className="mb-6 md:order-3">
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <ul className="text-sm space-y-2">
              <li><a href="blog/" className="hover:underline text-lightgray">Blog</a></li>
              <li><a href="careers/" className="hover:underline text-lightgray">Careers</a></li>
            </ul>
          </div>
          <div className="mb-6 md:order-4">
            <h4 className="text-xl font-bold mb-4">Legal</h4>
            <ul className="text-sm space-y-2">
              <li><a href="/legal/terms" className="hover:underline text-lightgray">Terms of Conditions</a></li>
              <li><a href="/legal/privacy" className="hover:underline text-lightgray">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="mb-6 md:order-5">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="text-sm space-y-2">
              <li><a href="/contact" className="hover:underline text-lightgray">Let's Chat</a></li>
              <li><a href="mailto:support@techfi.ca" className="hover:underline text-lightgray">Support@techfi.ca</a></li>
            </ul>
          </div>
          <div className="mb-6 md:order-1">
            <h4 className="text-xl font-bold mb-4">Locations</h4>
            <div className="flex items-center mb-2">
              <img src={CadIcon} alt="Canada Flag" className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold">Canada</span>
            </div>
            <p className="text-sm">1588 King St. W, Toronto, ON</p>
            <br></br>
            <p className="text-sm">155 Skyview Ranch Way, Calgary, AL</p>
            <div className="flex items-center mt-4">
              <img src={UsaIcon} alt="USA Flag" className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold">USA</span>
            </div>
            <p className="text-sm">3624 Sungrove Cir, Sanford, FL</p>
          </div>
        </div>
        {/* Social Media Icons for larger screens*/}
        <div className="hidden md:flex justify-end absolute bottom-0 right-0 mb-10 mr-12 lg:mr-24 xl:mr-32 space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" className="w-12 h-12" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter" className="w-12 h-12" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn" className="w-12 h-12" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Instagram" className="w-12 h-12" />
          </a>
        </div>
        <div className="text-sm text-center mt-10">
          © {new Date().getFullYear()} <a href="https://www.techfi.ca/" className="hover:underline">techfi.ca</a> • All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

