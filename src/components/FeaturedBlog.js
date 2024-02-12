import React from "react"

const FeaturedBlog = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 mt-10">
      <h1 className="text-white font-poppins font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
        Stay ahead with fresh insights
      </h1>
      <p className="text-white text-lg mt-5 opacity-50 w-3/4 xxs:w-full lg:w-3/4">
      Discover practical tips and insights to boost productivity and efficiency for small and medium businesses. 
      From time management hacks to innovative tech solutions, our blog has you covered. 
      Stay informed, stay ahead, and unlock your business's potential with our curated articles.
      </p>
      <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3">
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img
            className="relative"
            alt="blog"
            src="https://images.unsplash.com/photo-1620034949504-339c43e9cd56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          ></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            The quick brown fox jumped over the lazy dog.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img
            className="relative"
            alt="blog"
            src="https://images.unsplash.com/photo-1620034949504-339c43e9cd56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          ></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            The quick brown fox jumped over the lazy dog.
          </div>
        </div>
        <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
          <img
            className="relative"
            alt="blog"
            src="https://images.unsplash.com/photo-1620034949504-339c43e9cd56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          ></img>
          <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
            The quick brown fox jumped over the lazy dog.
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBlog
