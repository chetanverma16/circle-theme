import { Link } from "gatsby"
import React from "react"
import Button from "./Atoms/button"

const Footer = () => {
  const footerContent = [
    {
      title: "Services",
      details: [
        "Web Application",
        "Mobile Application",
        "Cloud Services (AWS)",
      ],
    },
    {
      title: "About Us",
      details: ["Our Story", "Core Values", "Leadership Team"],
    },
    {
      title: "Resources",
      details: ["Blog", "Case Studies", "FAQs"],
    },
    {
      title: "Legal",
      details: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
    },
  ]

  return (
    <div className="px-9 sm:px-20 pt-10  sm:pt-20 pb-5  mt-10 bg-lightblack rounded-xl">
      <div className="grid sm:grid-rows-2 grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center sm:justify-items-start max-w-7xl mx-auto px-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-4xl text-bold">Techfi</h1>
          <div>
            <Button
              colorClass="bg-lightBlue-400"
              title="Contact Us"
              textColor="text-white"
            ></Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense auto-rows-auto col-span-2 gap-8">
          {footerContent.map((item, index) => (
            <div key={index} className="col-span-1">
              <h4 className="text-xl text-white mb-5">{item.title}</h4>
              <ul className="flex flex-col text-sm font-poppins gap-2">
                {item.details.map((item, index) => (
                  <li key={index}>
                    <Link to="/">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="self-end xs:col-span-2">
          <h1 className="text-white text-sm">
            © 2023 <a href="https://www.techfi.ca/">techfi.ca</a>• All Rights
            Reserved.
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Footer
