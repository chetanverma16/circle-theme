import React from "react"
import Fade from "react-reveal/Fade"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Cards are commented out */}
      {/* <Fade bottom cascade>
        <div className="w-full flex flex-row justify-between mt-10 xxs:flex-col xs:flex-col sm:flex-row">
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">2.4M</h1>
            <h3 className="text-white">Days turn around</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">7M</h1>
            <h3 className="text-white">Days turn around</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">7.4%</h1>
            <h3 className="text-white">Days turn around</h3>
          </div>
          <div className="rounded-xl w-full h-52 flex flex-col content-center justify-center align-middle text-center m-5 bg-gradient-to-r from-lightblack to-lightblack hover:from-purple hover:to-pink transition duration-500 ease-in-out">
            <h1 className="text-white text-5xl">49K</h1>
            <h3 className="text-white">Days turn around</h3>
          </div>
        </div>
      </Fade> */}
      <Fade bottom cascade>
        <div className="mt-24 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl">
            How we can help you
          </h1>
          <h2 className="text-white text-lg mt-5 opacity-50">
            Unleashing Potential with Tailored IT Solutions
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 mb-32 px-0 mx-0 grid grid-cols-1 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-lightblack p-8 rounded-xl service-card ">
            <h1 className="text-white text-2xl">
              Web Development
            </h1>
            <p className="mt-5 text-white opacity-50 text-lg">
            Elevating MVPs to transformative digital experiences.
            </p>
          </div>
          <div className="bg-lightblack p-8 rounded-xl service-card">
            <h1 className="text-white text-2xl">
              Custom Software Development
            </h1>
            <p className="mt-5 text-white opacity-50 text-lg">
            Precision-engineered software for your industry's needs.
            </p>
          </div>
          <div className="bg-lightblack p-8 rounded-xl service-card">
            <h1 className="text-white text-2xl">
              Team Augmentation
            </h1>
            <p className="mt-5 text-white opacity-50 text-lg">
            Our expert developers seamlessly integrate with your operations, on-site or remotely.
            </p>
          </div>
          <div className="bg-lightblack p-8 rounded-xl service-card">
            <h1 className="text-white text-2xl">
              Audit & IT Consulting
            </h1>
            <p className="mt-5 text-white opacity-50 text-lg">
            Targeted project analysis for informed, strategic IT decisions.
            </p>
          </div>
          <div className="bg-lightblack p-8 rounded-xl service-card">
            <h1 className="text-white text-2xl">
              Mobile Development
            </h1>
            <p className="mt-5 text-white opacity-50 text-lg">
            Exceptional iOS and Android apps designed to captivate.
            </p>
          </div>
          <div className="bg-lightblack p-8 rounded-xl service-card">
            <h1 className="text-white text-2xl">
              Product Design
            </h1>
            <p className="mt-5 text-white opacity-50 text-lg">
            Intuitive designs that engage and delight users.
            </p>
          </div>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-2xl sm:text-3xl lg:text-5xl xl:text-7xl">
            From rough ideas, to <br></br>
            powerful products
          </h1>
          <h2 className="text-white text-lg mt-5 opacity-50">
          At Techfi, we believe technology should empower your business, not complicate it. 
            <br></br>
            We're more than just an IT company; we're your partner in seamlessly integrating innovative solutions that drive your business forward. 
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row">
          <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-2/6">
            <h1 className="text-white text-4xl">Stats</h1>
            <div className="mt-5">
              <div>
                <h2 className="text-white opacity-50 text-xl">Year Founded</h2>
                <h1 className="text-white text-sm">2020</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">Total Funding</h2>
                <h1 className="text-white text-sm">$30M</h1>
              </div>
              <div className="mt-5">
                <h2 className="text-white opacity-50 text-xl">Team Members</h2>
                <h1 className="text-white text-sm">120</h1>
              </div>
            </div>
          </div>

          <div className="w-4/6 bg-lightblack p-8 rounded-xl m-5 xxs:w-full xs:w-full sm:w-4/6">
            <h1 className="text-white text-4xl">Our Core Behaviours</h1>
            <p className="mt-10 text-white text-lg opacity-60">
              In a world where technology never stops evolving, Techfi stands as your steadfast ally. 
              We understand your unique challenges and offer tailor-made IT services to meet those needs. 
              Our approach is simple: we listen, we innovate, we deliver. With Techfi, you're not 
              just staying afloat in the digital age—you're leading the charge.
            </p>
          </div>
        </div>
      </Fade>


    </div>
  )
}

export default FeatureSection
