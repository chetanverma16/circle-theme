import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Banner from "../images/blogs-banner.png";

export default function BlogTemplate({ data }) {
  const post = data.markdownRemark;
  return (
    <Layout>
      <div
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
          {/* Title and Subtitle */}
          <div className="text-center py-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white">{post.frontmatter.title}</h1>
            <p className="text-lg md:text-xl text-gray-400 mt-4">{post.frontmatter.subtitle}</p>
          </div>
          {/* Centered Image */}
          <div className="mt-8 px-4 flex justify-center">
            <div className="bg-white p-2 rounded-lg max-w-md mx-auto"> {/* Adjust max-w-md as needed */}
              <img
                className="w-full h-auto object-cover rounded-lg"
                src={post.frontmatter?.image[0]?.publicURL} // Assuming there is always one image
                alt="Blog Post Image"
              />
            </div>
          </div>
          {/* Author and Date */}
          <div className="flex justify-center gap-1 h-14 items-center py-2">
            <div className="h-8 w-8 object-cover overflow-hidden rounded-full">
              <img
                className="h-8 w-8 object-cover"
                src={post.frontmatter.authorImg}
                alt="Author"
              />
            </div>
            <span className="text-white">{post.frontmatter.author}</span>
            <span className="text-gray-300">•</span>
            <span className="text-white">{post.frontmatter.humanDate}</span>
          </div>
        </div>
      {/* Blog Content */}
      <section className="mt-20 mx-auto px-4 md:px-20 lg:px-44">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col justify-center gap-4 items-center w-full">
            <div className="w-full">
              <div className="reset-common-blog-css">
                <div
                  className="text-base md:text-lg text-white"
                  dangerouslySetInnerHTML={{ __html: post.html }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        humanDate
        path
        author
        authorImg
        subtitle
        image {
          publicURL
        }
      }
    }
  }
`





