import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"

const BlogsContainer = () => {
  const blogData = [
    {
      img:
        "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      heading: "The Quick Brown Fox Jumped over the lazy dog.",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      heading: "The Quick Brown Fox Jumped over the lazy dog.",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      heading: "The Quick Brown Fox Jumped over the lazy dog.",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      heading: "The Quick Brown Fox Jumped over the lazy dog.",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      heading: "The Quick Brown Fox Jumped over the lazy dog.",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://images.unsplash.com/photo-1552960394-c81add8de6b8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      heading: "The Quick Brown Fox Jumped over the lazy dog.",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://images.unsplash.com/photo-1507209575474-fa61e9d3086b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njd8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      heading: "The Quick Brown Fox Jumped over the lazy dog.",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      heading: "The Quick Brown Fox Jumped over the lazy dog.",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img:
        "https://images.unsplash.com/photo-1542330952-bffc55e812b2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      heading: "The Quick Brown Fox Jumped over the lazy dog.",
      para:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ]
  return (
    <div className="max-w-7xl mx-auto mt-10 text-white">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 gap-4 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map(blog => (
            <div>
              <div className="w-96 h-72 overflow-hidden rounded-xl xxs:w-full sm:w-96">
                <img
                  className="h-full w-full object-cover"
                  src={blog.img}
                ></img>
              </div>
              <h1 className="text-3xl mt-2 font-poppins font-bold">
                {blog.heading}
              </h1>
              <p className="text-sm opacity-50 mt-2">{blog.para}</p>
            </div>
          ))}
        </div>
      </Fade>
      <div className="w-full h-72 mt-10 bg-gradient-to-r from-pink to-purple rounded-xl flex flex-col items-center justify-center">
        <h1 className="font-poppins font-bold text-3xl">Stay in the loop</h1>
        <h2 className="text-lg mt-2 opacity-50">
          Join our newsletter to get top news before anyone else
        </h2>
        <div className="flex-row mt-10">
          <Input placeholder="email."></Input>
          <Button
            colorClass="bg-white"
            title="Subscribe"
            textColor="text-black"
            marginClass="ml-5"
          ></Button>
        </div>
      </div>
    </div>
  )
}

export default BlogsContainer
