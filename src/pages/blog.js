import React from "react"
import BlogHeader from "../components/Blog/blogHeader"
import BlogsContainer from "../components/Blog/blogsContainer"
import Layout from "../components/layout"

const Blog = () => {
  return (
    <Layout>
      <BlogHeader></BlogHeader>
      <BlogsContainer></BlogsContainer>
    </Layout>
  )
}

export default Blog
