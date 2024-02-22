import React from "react"
import AboutTeamCard from "./aboutTeamCard"
import Ozan from "../../images/ozan.jpg"
import Emin from "../../images/emin.jpg"
import Cagdas from "../../images/cagdas.jpg"
import Kamyab from "../../images/kamyab.jpg"
import Nellie from "../../images/Nellie.png"

const AboutGrid = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 grid grid-cols-3 gap-16 justify-items-center xxs:grid-cols-1 sm:grid-cols-3">
      <AboutTeamCard
        imgSrc={Ozan}
        position="Ozan, Founder/CEO"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc={Emin}
        position="Emin, CHRO"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc={Cagdas}
        position="Cagdas, VP Product"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc={Kamyab}
        position="Kamyab, CTO"
      ></AboutTeamCard>
      <AboutTeamCard
        imgSrc={Nellie}
        position="Nellie, Finance Journalist"
      ></AboutTeamCard>

    </div>
  )
}

export default AboutGrid
