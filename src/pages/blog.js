import React from "react"
import { Link } from "gatsby";
import BlogHeader from "../components/Blog/blogHeader"
import BlogsContainer from "../components/Blog/blogsContainer"
import Layout from "../components/layout"

const Blog = () => {
  return (
    <Layout>
      <Link to={"/blog/ai-for-small-business"}>
        <BlogHeader></BlogHeader>
      </Link>
      <BlogsContainer></BlogsContainer>
    </Layout>
  )
}

export default Blog
