import React from "react"
import Fade from "react-reveal/Fade"

const BlogHeader = () => {
  return (
    <Fade bottom>
      <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <div className="h-full object-cover overflow-hidden rounded-xl m-5">
          <img src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"></img>
        </div>
        <div className="m-5">
          <h2 className="text-sm opacity-50">Design Process</h2>
          <h1 className="text-5xl font-bold font-poppins xxs:text-lg sm:text-5xl">
            Web Design Blog you should be reading
          </h1>
          <p className="text-lg mt-4 opacity-50 xxs:text-sm sm:text-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="flex items-center mt-5">
            <div className="h-10 w-10 object-cover overflow-hidden rounded-full">
              <img
                className="h-10 w-10"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              ></img>
            </div>
            <div className="ml-2">
              <h2>Christina Solerieu</h2>
              <h4 className="text-xs opacity-50">Jan 19, 2021</h4>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default BlogHeader
