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
      details: ["Our Story", "Mission & Vision", "Leadership Team"],
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
    <div className="px-20 pt-20 pb-5  mt-10 bg-lightblack rounded-xl">
      <div className="grid grid-rows-2 grid-cols-2 xxs:grid-cols-1 lg:grid-cols-3">
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
        <div className="grid grid-cols-4 grid-flow-row-dense auto-rows-auto col-span-2">
          {footerContent.map((item, index) => (
            <div key={index} className="xxs:hidden lg:block col-span-1">
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
        <div className="self-end">
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
