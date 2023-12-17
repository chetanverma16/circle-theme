import React from "react"
import Layout from "../components/layout"
import PricingHeader from "../components/Pricing/pricingHeader"
import PricingMain from "../components/Home/pricing"
import PricingFAQ from "../components/Pricing/pricingFAQ"
import PricingCTA from "../components/Pricing/pricingCTA"

const Pricing = () => {
  return (
    <Layout>
      <PricingHeader></PricingHeader>
      <div className="mt-20">
        <PricingMain></PricingMain>
      </div>
      <PricingFAQ></PricingFAQ>
      <PricingCTA></PricingCTA>
    </Layout>
  )
}

export default Pricing
