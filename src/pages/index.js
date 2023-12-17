import * as React from "react"
import Layout from "../components/layout"

// Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import Pricing from "../components/Home/pricing"
import FeaturedBlog from "../components/FeaturedBlog"
import TechSection from "../components/Home/techSection"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Header></Header>
      <TechSection></TechSection>
      <FeatureSection></FeatureSection>
      <Testimonial></Testimonial>
      {/* <Pricing></Pricing> */}
      <FeaturedBlog></FeaturedBlog>
    </Layout>
  </div>
)

export default IndexPage
