import React from "react"
import AboutGrid from "../components/about/aboutGrid"
import AboutHeader from "../components/about/aboutHeader"
import AboutMore from "../components/about/aboutMore"
import AboutTeamBigCard from "../components/about/aboutTeamBigCard"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <AboutHeader></AboutHeader>
      <AboutMore></AboutMore>
      <AboutTeamBigCard></AboutTeamBigCard>
      <AboutGrid></AboutGrid>
    </Layout>
  )
}

export default About
