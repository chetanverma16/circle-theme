import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const FeaturedBlog = () => {
  const [shuffleArrayElement, setShuffleArrayElement] = useState([])
  function shuffleArray(arr, count) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]] // Swap elements
    }
    return arr.slice(0, count)
  }
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
  useEffect(() => {
    setShuffleArrayElement(() => shuffleArray(allMarkdownRemark.nodes, 3))
  }, [allMarkdownRemark.nodes])

  return (
    <div className="max-w-7xl mx-auto px-8 mt-10">
      <h1 className="text-white font-poppins font-bold text-6xl xxs:text-lg xs:text-xl sm:text-xl lg:text-6xl">
        Stay ahead with fresh blogs insights
      </h1>
      <p className="text-white text-lg mt-5 opacity-50 w-3/4 xxs:w-full lg:w-3/4">
        Discover practical tips and insights to boost productivity and
        efficiency for small and medium businesses. From time management hacks
        to innovative tech solutions, our blog has you covered. Stay informed,
        stay ahead, and unlock your business's potential with our curated
        articles.
      </p>
      <div className="grid grid-cols-3 mt-10 gap-4 xxs:grid-cols-1 lg:grid-cols-3">
        {shuffleArrayElement &&
          shuffleArrayElement.map(blog => (
            <Link to={blog.frontmatter.path}>
              <div className="rounded-xl overflow-hidden opacity-70 relative hover:opacity-100">
                <img
                  className="relative w-full h-72 object-cover rounded-xl"
                  src={blog.frontmatter.image[0].publicURL}
                  alt={blog.frontmatter.image[0].base}
                ></img>
                <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 text-3xl text-white font-bold p-2">
                  {blog.frontmatter.title}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  )
}

export default FeaturedBlog
