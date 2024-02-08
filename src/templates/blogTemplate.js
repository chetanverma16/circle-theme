import React from "react"
import { graphql } from "gatsby"

export default function BlogTemplate({ data }) {
  const post = data.markdownRemark
  console.log("post", post.frontmatter?.image?.publicURL)
  return (
    <>
      <section class="section single-page mt-20 mx-8">
        <div class="container mx-auto max-w-7xl">
          <div class="flex flex-col gap-12 justify-start items-start lg:w-9.5/12 mx-auto">
            <button
              onClick={e => {
                e.preventDefault()
                if (typeof window !== "undefined") {
                  window.history.back()
                }
              }}
              className="text-left text-inherit focus:outline-none focus:ring-0 text-white"
            >
              Go Back
            </button>

            <div class="flex flex-col gap-2 justify-center items-left">
              {/* <!-- Header --> */}
              <div class="">
                <h3 class="text-left text-white text-5xl">
                  {post.frontmatter.title}
                </h3>
              </div>
              <div class="flex flex-col md:flex-row gap-1 items-start">
                <h5 class="text-gray-400 text-2xl">
                  {post.frontmatter.subtitle}
                </h5>
              </div>
              {/* <!-- main image --> */}
              <div class="flex justify-start overflow-hidden items-center pt-4 pb-2 h-96 w-full gap-5">
                {post.frontmatter?.image?.map(img => (
                  <div class="max-w-full h-full bg-white p-2 rounded-lg">
                    {/* <!-- Replace with actual image --> */}
                    <img
                      class="w-full h-full object-cover rounded-lg"
                      src={img?.publicURL}
                    />
                  </div>
                ))}
              </div>
              {/* <!-- main image end --> */}
              <div class="flex md:flex-row gap-1 h-14 items-center py-2 border-b border-gray-700">
                {/*<img class="w-6 h-6" src="{icon}" />*/}
                <span class="text-gray-400">{post.frontmatter.author}</span>
                <span class="text-gray-400">•</span>
                <span class="text-gray-400">{post.frontmatter.humanDate}</span>
              </div>
              {/* <!-- Header end --> */}
            </div>

            <div class="flex flex-col justify-center gap-4 items-center w-full">
              <div class="w-full">
                <div
                  className="text-white"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        humanDate
        path
        title
        author
        subtitle
        image {
          publicURL
          base
        }
      }
    }
  }
`
