import React from "react"

const Button = ({ title }) => {
  return (
    <button
      className="bg-gradient-to-r from-pink to-purple px-3 py-2 ml-5 rounded-lg text-white text-sm transform scale-100 transition hover:scale-110 active:scal
    -95 focus:outline-none focus:ring-1 focus:ring-offset-1 "
    >
      {title}
    </button>
  )
}

export default Button
