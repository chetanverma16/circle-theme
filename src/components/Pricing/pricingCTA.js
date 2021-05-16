import React from "react"
import Button from "../Atoms/button"

const PricingCTA = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 flex flex-col text-white text-center items-center">
      <h1 className="text-4xl font-bold font-poppins xxs:text-2xl sm:text-4xl">
        Ready to create better products?
      </h1>
      <p className="text-lg opacity-50 w-2/4 mt-5 xxs:text-sm xxs:w-full xxs:p-2 sm:p-0 sm:w-2/4">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,{" "}
      </p>
      <div className="mt-2">
        <Button
          title="Start Free Trial"
          colorClass="bg-gradient-to-r from-pink to-purple "
        ></Button>
      </div>
    </div>
  )
}

export default PricingCTA
