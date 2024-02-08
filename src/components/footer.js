import { Link } from "gatsby"
import React from "react"
import Button from "./Atoms/button"

const Footer = () => {
  const footerContent = [
    { title: "Services", details: ["Web Application", "Mobile Application", "Cloud Services (AWS)"] },
    { title: "About Us", details: ["Our Story", "Core Values", "Leadership Team"] },
    { title: "Resources", details: ["Blog", "Case Studies", "FAQs"] },
    { title: "Legal", details: ["Privacy Policy", "Terms of Service", "Cookie Policy"] },
  ];

  return (
    <div className="bg-lightblack text-white py-10 mt-10 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Ready to gain your valuable time?</h1>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-lightBlue-400 text-white text-sm rounded hover:bg-lightBlue-500 transition duration-150 ease-in-out solid-button">
                BOOK A FREE CONSULTATION
              </button>
              <button className="px-4 py-2 bg-transparent border border-lightBlue-400 text-lightBlue-400 text-sm rounded hover:bg-lightBlue-400 hover:text-white transition duration-150 ease-in-out ghost-button">
                LEARN MORE
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerContent.map((item, index) => (
              <div key={index}>
                <h4 className="text-xl mb-4">{item.title}</h4>
                <ul className="text-sm space-y-2">
                  {item.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <a href="/" className="hover:underline">{detail}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm text-center mt-10">
          © {new Date().getFullYear()} <a href="https://www.techfi.ca/" className="hover:underline">techfi.ca</a> • All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer
