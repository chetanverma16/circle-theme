import React from "react"

const Button = ({ title, colorClass, textColor, onClick, marginClass }) => {
  return (
    <button
      onClick={onClick}
      className={`${colorClass} ${textColor} ${marginClass} px-3 py-2 rounded-lg text-sm transform scale-100 transition hover:scale-110 active:scal
    -95 focus:outline-none focus:ring-1 focus:ring-offset-1 sm:width-full md:width-full lg:width-full`}
    >
      {title}
    </button>
  )
}

export default Button
