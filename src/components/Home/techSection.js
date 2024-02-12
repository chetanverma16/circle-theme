import React from "react"
import Angular from "../../images/angular.png"
import Aws from "../../images/aws.png"
import Cloud from "../../images/cloud.png"
import Nodejs from "../../images/nodejs.png"
import ReactNative from "../../images/react-native.png"
import Reactjs from "../../images/react.png"
import django from "../../images/django.png"
import Swift from "../../images/swift.png"

const TechSection = () => {

  return (
    <>
      <div className="flex overflow-hidden relative w-screen px-0 py-4 my-3">
        <div className="infinite-scroll gap-16 flex">
        {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <img src={Angular} className="py-1 h-24 object-contain opacity-90" alt="Angular" />
              <img src={Aws} className="py-1 h-24 object-contain opacity-90" alt="Aws" />
              <img src={Cloud} className="py-1 h-24 object-contain opacity-90" alt="Cloud" />
              <img src={Nodejs} className="py-1 h-24 object-contain opacity-90" alt="Nodejs" />
              <img src={ReactNative} className="py-1 h-24 object-contain opacity-90" alt="React Native" />
              <img src={Reactjs} className="py-1 h-24 object-contain opacity-90" alt="React" />
              <img src={django} className="py-1 h-24 object-contain opacity-90" alt="Django" />
              <img src={Swift} className="py-1 h-24 object-contain opacity-90" alt="Swift" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default TechSection