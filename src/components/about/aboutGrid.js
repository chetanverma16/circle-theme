import React from "react"
import AboutTeamCard from "./aboutTeamCard"
import Ozan from "../../images/ozan.jpg"
import Emin from "../../images/emin.jpg"
import Cagdas from "../../images/cagdas.jpg"
import Kamyab from "../../images/kamyab.jpg"
import Nikhil from "../../images/nikhil.jpg"

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
        imgSrc={Nikhil}
        position="Nikhil, CMO"
      ></AboutTeamCard>

    </div>
  )
}

export default AboutGrid
