import React from "react"

const Input = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      className="w-full px-2 py-2 rounded-lg bg-gray-700 opacity-70 border-transparent flex-1 appearance-none text-white font-poppins focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent sm:width-full md:width-full xxs:text-sm"
    ></input>
  )
}

export default Input
