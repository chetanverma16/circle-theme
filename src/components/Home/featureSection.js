import React from "react"
import Fade from "react-reveal/Fade"
import Customer from "../../images/customer.svg"
import Innovation from "../../images/innovation.svg"
import Scalability from "../../images/scalability.svg"
import Security from "../../images/security.svg"
import Talent from "../../images/talent.svg"
import Tailor from "../../images/tailor.svg"
import YoutubeAnalyzer from "../../images/youtubeAnalyzer.jpg"
import Auditing from "../../images/carbon_cloud-auditing.svg"
import Development from "../../images/carbon_development.svg"
import Management from "../../images/carbon_id-management.svg"
import Ai from "../../images/eos-icons_ai.svg"
import Vr from "../../images/eos-icons_virtual-reality.svg"
import Team from "../../images/fluent_people-team-16-filled.svg"
const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mt-8 m-4">
        <Fade bottom cascade>
          <div className="flex flex-col gap-3">
            <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl">
              How we can help you
            </h1>
            <h2 className="text-white text-lg mt-5 opacity-50">
              Unleashing Potential with Tailored IT Solutions
            </h2>
          </div>
        </Fade>
        <Fade bottom cascade>
          <div className="mt-12 mb-32 px-0 mx-0 grid grid-cols-1 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-lightblack p-8 rounded-xl service-card">
              <div className="flex items-center justify-start mb-2">
              <img src={Ai} className="w-12 mr-3"></img>
              <h1 className="text-white text-2xl align-middle ">Artificial Intelligence</h1>
              </div>
              <p className="mt-5 text-white opacity-50 text-lg">
                Empowering Tomorrow, Revolutionizing Business with Cutting-Edge AI Solutions.
              </p>
            </div>

            <div className="bg-lightblack p-8 rounded-xl service-card">
              <div className="flex items-center justify-start mb-2">
              <img src={Team} className="w-12 mr-3"></img>
              <h1 className="text-white text-2xl align-middle ">Business Automation</h1>
              </div>
              <p className="mt-5 text-white opacity-50 text-lg">
                Automate your business operations for efficiency.
              </p>
            </div>

            <div className="bg-lightblack p-8 rounded-xl service-card ">
              <div className="flex items-center justify-start mb-2">
              <img src={Development} className="w-12 mr-3"></img>
              <h1 className="text-white text-2xl sm:text-xl md:text-2xl align-middle">Web / Mobile Development</h1>
              </div>
              <p className="mt-5 text-white opacity-50 text-lg">
                Custom software solutions tailored to your needs.
              </p>
            </div>

            <div className="bg-lightblack p-8 rounded-xl service-card">
              <div className="flex items-center justify-start mb-2">
              <img src={Auditing} className="w-12 mr-3"></img>
              <h1 className="text-white text-2xl align-middle ">Audit & IT Consulting</h1>
              </div>
              <p className="mt-5 text-white opacity-50 text-lg">
                Expert analysis for strategic IT decision-making.
              </p>
            </div>

            <div className="bg-lightblack p-8 rounded-xl service-card">
              <div className="flex items-center justify-start mb-2">
              <img src={Vr} className="w-12 mr-3"></img>
              <h1 className="text-white text-2xl align-middle ">AR & VR</h1>
              </div>
              <p className="mt-5 text-white opacity-50 text-lg">
                Transforming experiences with advanced AR & VR technologies.
              </p>
            </div>

            <div className="bg-lightblack p-8 rounded-xl service-card">
              <div className="flex items-center justify-start mb-2">
              <img src={Management} className="w-12 mr-3"></img>
              <h1 className="text-white text-2xl align-middle ">Digital Branding</h1>
              </div>
              <p className="mt-5 text-white opacity-50 text-lg">
              Engaging brand designs tailored to delight your audience.
              </p>
            </div>
          </div>
        </Fade>
      </div>
      {/* Cards are commented out */}
      {/* <Fade bottom cascade>
        <div className="w-full flex flex-row justify-between xxs:flex-col xs:flex-col sm:flex-row">
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
        <div className="mt-4"> {/* Reduced top margin for closer alignment */}
          <h1 className="text-white text-5xl font-bold lg:text-7xl px-8">
            Projects
          </h1>
        </div>
        <Fade bottom cascade>
          <div className="flex justify-between items-center mt-8"> {/* Reduced margin to close the gap */}
            <div className="grid px-8 md:px-0 md:grid-cols-2 gap-12 lg:gap-60"> {/* Adjusted padding for alignment */}
              <div className="md:p-8 rounded-lg service-card group hover:transform-none button">
                <a href="https://youtubeanalyzer.tech/" target="_Blank">
                  <img src={YoutubeAnalyzer} alt="AI-based enterprise software interface for a retail dashboard" className="w-auto rounded-lg mb-4" />
                  <h3 className="text-gray-300 text-3xl font-semibold mb-4 group-hover:text-gray-200 transition-colors duration-100">ChatGPT powered Chrome Extension</h3>
                  <p className="text-gray-400 text-lg group-hover:text-gray-300 transition-colors duration-100">Chrome extension enabled by ChatGPT AI to deliver users instant content insights.</p>
                </a>
              </div>
            </div>
          </div>
          {/* <div className="flex justify-between p-5">
            <button className="px-4 py-3 button bg-lightBlue-500 rounded">
              <a href="#" className="text-white text-sm font-semibold py-2 px-4 rounded-lg">Start your innovation journey</a>
            </button>
          </div> */}
        </Fade>
        <div className="mt-24 md:mt-36 lg:mt-48 px-8">
          <h1 className="text-white text-7xl font-bold xxs:text-2xl xs:text-3xl sm:text-5xl lg:text-7xl">
            Why Techfi?
          </h1>
          <h2 className="text-white text-lg mt-5 opacity-50">
            Why us when there are so many other options?
          </h2>
        </div>
      </Fade>
      <Fade bottom cascade>
        <div className="mt-10 mb-32 px-0 mx-0 grid grid-cols-1 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-8 service-card ">
            <img src={Innovation} alt="reason" className="w-14 pb-5" />
            <h1 className="text-white text-2xl font-semibold">
              Innovation at the Forefront
            </h1>
            <p className="mt-5 text-white opacity-50 text-lg">
              We don't just keep up; we set the pace. With a keen eye on the
              horizon, we anticipate and embrace the dynamic changes in
              technology, ensuring that our solutions are not just current but
              future-ready.
            </p>
          </div>
          <div className="p-8 service-card">
            <img src={Customer} alt="reason" className="w-14 pb-5" />
            <h1 className="text-white text-2xl font-semibold">
              Customer Success-Centric
            </h1>
            <p className="mt-5 text-white opacity-50 text-lg">
              Your goals are our mission. We dive deep into understanding your
              needs, ensuring that every solution we provide is aligned with
              your success metrics, making your victory our victory.
            </p>
          </div>
          <div className="p-8 service-card">
            <img src={Tailor} alt="reason" className="w-14 pb-5" />
            <h1 className="text-white text-2xl font-semibold">
              Tailor-Made Expertise
            </h1>
            <p className="mt-5 text-white opacity-50 text-lg">
              Like a bespoke suit, our services are crafted to fit your unique
              needs. We listen, we personalize, we deliver IT solutions that are
              as individual as your business.
            </p>
          </div>
          <div className="p-8 service-card">
            <img src={Talent} alt="reason" className="w-14 pb-5" />
            <h1 className="text-white text-2xl font-semibold">Talent Haven</h1>
            <p className="mt-5 text-white opacity-50 text-lg">
              We are a crucible for top-tier tech talent. Our team is not just
              skilled; they're passionate professionals who thrive on innovation
              and excellence.
            </p>
          </div>
          <div className="p-8 service-card">
            <img src={Scalability} alt="reason" className="w-14 pb-5" />
            <h1 className="text-white text-2xl font-semibold">
              Scalability Assured
            </h1>
            <p className="mt-5 text-white opacity-50 text-lg">
              As your business grows, so do our solutions. We architect IT
              services that flex and scale to meet the expanding needs of your
              enterprise, ensuring seamless evolution.
            </p>
          </div>
          <div className="p-8 service-card">
            <img src={Security} alt="reason" className="w-14 pb-5" />
            <h1 className="text-white text-2xl font-semibold">
              Guardians of Security
            </h1>
            <p className="mt-5 text-white opacity-50 text-lg">
              In the digital realm, security is paramount. We protect your
              assets with state-of-the-art security protocols, guarding your
              business against threats, so you can operate with peace of mind.
            </p>
          </div>
        </div>
      </Fade>
      {/* <Fade bottom cascade>
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
      </Fade> */}
    </div>
  )
}

export default FeatureSection
