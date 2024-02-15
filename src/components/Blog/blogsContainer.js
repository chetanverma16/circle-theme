import React from "react"
import Input from "../Atoms/input"
import Button from "../Atoms/button"
import Fade from "react-reveal/Fade"
import { useStaticQuery, graphql, Link } from "gatsby"

const BlogsContainer = () => {
  // Calling Blog Markdown Lists
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { FileSection: { in: "Blog" } } }
      ) {
        nodes {
          html
          id
          frontmatter {
            title
            path
            subtitle
            image {
              publicURL
              base
            }
          }
        }
      }
    }
  `)
  console.log("data", allMarkdownRemark.nodes)
  return (
    <div className="max-w-7xl mx-auto mt-10 text-white">
      <Fade bottom cascade>
        <div className="grid grid-cols-3 gap-4 xxs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {allMarkdownRemark.nodes.map(blog => (
            <Link to={blog.frontmatter.path}>
              <div className="w-96 h-72 overflow-hidden rounded-xl xxs:w-full sm:w-96">
                <img
                  className="h-full w-full object-cover"
                  src={blog.frontmatter.image[0].publicURL}
                  alt={blog.frontmatter.image[0].base}
                ></img>
              </div>
              <h1 className="text-3xl mt-2 font-poppins font-bold">
                {blog.frontmatter.title}
              </h1>
              <p className="text-sm opacity-50 mt-2">
                {blog.frontmatter.subtitle}
              </p>
            </Link>
          ))}
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="w-full h-72 mt-10 bg-gradient-to-r bg-lightblack p-8 service-card  rounded-xl flex flex-col items-center justify-center">
          <h1 className="font-poppins font-bold text-3xl">
            Join our exclusive tech community
          </h1>
          <h2 className="text-lg mt-2 p-4 opacity-50">
            Join our newsletter to get top news before anyone else
          </h2>
          <div className="flex mt-10  w-2/6">
            <Input placeholder="email." className="w-screen"></Input>
            <Button
              colorClass="bg-white"
              title="Subscribe"
              textColor="text-black"
              marginClass="ml-5"
            ></Button>
          </div>
        </div>
      </Fade>
    </div>
  )
}

export default BlogsContainer
