import React from "react"
import CareersHeader from "../components/Careers/careersHeader"
import CareersRoles from "../components/Careers/careersRoles"
import Layout from "../components/layout"

const Careers = () => {
  return (
    <Layout>
      <CareersHeader></CareersHeader>
      <CareersRoles></CareersRoles>
    </Layout>
  )
}

export default Careers
