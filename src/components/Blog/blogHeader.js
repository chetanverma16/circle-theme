import React from "react"
import Fade from "react-reveal/Fade"
import nellieImage from '../../images/Nellie.png';
import sfbImage from '../../images/AI for Small Business.png';

const BlogHeader = () => {
  return (
    <Fade bottom>
      <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
        <div className=" max-h-fit max-w max-w-sm object-cover overflow-hidden rounded-xl m-5">
          <img src={sfbImage} />
        </div>
        <div className="m-5">
          <div className="flex gap-2 items-center mb-2">
            <div className="h-8 w-8 object-cover overflow-hidden rounded-full">
              <img
                    className="h-8 w-8"
                    src={nellieImage}
              />
            </div>
            <div className="ml-2 inline">
              <h2 className="text-sm opacity-50 capitalize inline">Nellie Veber</h2>
              <span className="text-sm opacity-50"> - </span>
              <h4 className="text-xs opacity-50 inline">February 14, 2024</h4>
            </div>
          </div>
          <h1 className="text-5xl font-bold font-poppins xxs:text-lg sm:text-5xl capitalize">
            AI for small Business
          </h1>
          <p className="text-lg mt-2 opacity-50 xxs:text-sm sm:text-lg">
          Artificial intelligence (AI) isn't just for huge corporations. 
          Small businesses are increasingly tapping into AI's power to increase their efficiency, 
          profitability, and customer satisfaction. In this blog, we'll explore AI applications 
          tailored to small businesses, emphasizing the benefits, types, and best practices to 
          enhance your operations.

          </p>
        </div>
      </div>
    </Fade>
  )
}

export default BlogHeader
