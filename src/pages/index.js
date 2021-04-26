import * as React from "react"
import FeatureSection from "../components/Home/featureSection"
import Header from "../components/Home/header"
import Layout from "../components/layout"

const IndexPage = () => (
  <div className="h-auto w-screen">
    <Layout>
      <Header></Header>
      <FeatureSection></FeatureSection>
    </Layout>
  </div>
)

export default IndexPage
