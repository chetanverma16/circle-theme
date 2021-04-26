import * as React from "react"
import Layout from "../components/layout"
import Input from "../components/input"
import Button from "../components/button"

const IndexPage = () => (
  <div className="bg-black h-screen w-screen">
    <Layout>
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-white font-poppins opacity-50 font-semibold mt-20">
          We deliver premium creative solution
        </h2>
        <h1 className="text-white font-poppins font-semibold text-7xl">
          Change starts with <br></br> a{" "}
          <span class="text-gradient bg-gradient-to-r from-pink to-purple">
            single box.
          </span>
        </h1>
        <div className="flex-row mt-10">
          <Input placeholder="email."></Input>
          <Button title="Request Access"></Button>
        </div>
      </div>
    </Layout>
  </div>
)

export default IndexPage
