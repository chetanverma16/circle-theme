import React from "react"

const Button = ({ title }) => {
  return (
    <button className="bg-gradient-to-r from-pink to-purple px-3 py-2 ml-5 rounded-lg text-white text-sm">
      {title}
    </button>
  )
}

export default Button
