import React, { useState } from "react"
import Fade from "react-reveal/Fade"
import Layout from "../components/layout"
import Input from "../components/Atoms/input"
import Button from "../components/Atoms/button"
import CNTower from "../images/cn-tower.png"


const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  // const [company, setCompany] = useState("");
  // const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    // SENDING AWS LAMBDA FUNCTION FROM GATSBY Application
    const url = process.env.GATSBY_AWS_LAMBDA + "/send-email"
    const data = {
      email,
      subject:
        new Date().toLocaleDateString() + " - " + email.split("@")[0] ?? "",
      name,
      message: message,
    }
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        setName("")
        setEmail("")
        // setCompany("");
        // setPhone("");
        setMessage("")
      })
      .catch(error => {
        // Handle any errors here
        console.error(error)
      })
  }

  return (
    <Layout>
      <Fade bottom cascade>
        <div className="max-w-7xl mx-auto mt-10 flex text-white xxs:flex-col sm:flex-row">
          <div className="bg-lightblack p-10 rounded-xl w-3/4 m-5">
            <h2 className="text-xs opacity-50">Get in touch</h2>
            <h1 className="text-4xl font-bold font-poppins mt-2 xxs:text-lg sm:text-2xl lg:text-4xl">
              Let's work together
            </h1>
            <p className="text-lg mt-2 opacity-50 w-3/4 xxs:text-xs xxs:w-full sm:text-sm sm:w-3/4">
              Ready to turn your vision into reality? We're just a message away!
              Reach out to us today to discuss your project, ideas, or any
              inquiries you may have. Our team is excited to learn about your
              needs and eager to provide tailored solutions.
            </p>
            <form className="mt-5">
              <div className="flex xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <Input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Your Name"
                  ></Input>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <Input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Your Email"
                  ></Input>
                </div>
              </div>
              {/* 
              <div className="flex mt-5 xxs:flex-col sm:flex-row">
                <div className="sm:mr-5 xxs:mr-0">
                  <Input value={company} onChange={e => setCompany(e.target.value)} placeholder="Your Company"></Input>
                </div>
                <div className="sm:ml-5 xxs:ml-0 xxs:mt-2 sm:mt-0">
                  <Input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Your Phone"></Input>
                </div>
              </div> */}
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="mt-5 w-full bg-white bg-opacity-20 rounded-xl p-5"
                rows="5"
                placeholder="How can we help you?"
              ></textarea>
              <Button
                title="Send us a message"
                colorClass="bg-lightBlue-400 hover:bg-lightBlue-500"
                marginClass="mt-5"
                onClick={handleSubmit}
              ></Button>
            </form>
          </div>
          <div className="w-1/4 overflow-hidden rounded-xl m-5 xxs:hidden sm:block">
            <img
              className="object-cover h-full w-full"
              src={CNTower}
            ></img>
          </div>
        </div>
      </Fade>
    </Layout>
  )
}

export default Contact
