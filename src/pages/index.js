import * as React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"

   // Components
import Header from "../components/Home/header"
import FeatureSection from "../components/Home/featureSection"
import Testimonial from "../components/Home/testimonial"
import Pricing from "../components/Home/pricing"
import FeaturedBlog from "../components/FeaturedBlog"

   const IndexPage = () => (
     <div className="h-auto w-screen">
       <Layout>
         <Header></Header>
         <FeatureSection></FeatureSection>
         <Testimonial></Testimonial>
         <Pricing></Pricing>
         <FeaturedBlog></FeaturedBlog>

         <Helmet>
           <script
             src="https://widgets.leadconnectorhq.com/loader.js"
             data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
           >
           </script>
           <div
             data-chat-widget
             data-location-id="vOeuzWZBRiQqovwr1h8x"
             data-agency-name="cojovi web dev"
             data-agency-website="https://www.cojovi.com"
             data-locale="en-us"
           >
           </div>
         </Helmet>
       </Layout>
     </div>
   )

   export default IndexPage