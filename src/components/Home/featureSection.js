import React from "react"

const FeatureSection = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="w-full flex flex-row justify-between mt-10">
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
      <div className="mt-10 px-8">
        <h1 className="text-white text-7xl font-bold">
          From rough design files, to <br></br>
          powerful products
        </h1>
        <h2 className="text-white text-sm mt-5 opacity-50">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          <br></br>
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </h2>
      </div>
      <div className="mt-10 flex flex-row justify-space">
        <div className="w-2/6 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5">
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

        <div className="w-4/6 bg-lightblack p-8 rounded-xl m-5">
          <h1 className="text-white text-4xl">Our Core Behaviours</h1>
          <p className="mt-10 text-white opacity-50">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="mt-10 px-8">
        <h1 className="text-white text-7xl font-bold">
          Work more easily with everyone
        </h1>
        <h2 className="text-white text-sm mt-5 opacity-50">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          <br></br>
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </h2>
      </div>
      <div className="mt-10 flex flex-row justify-space">
        <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl m-5">
          <h1 className="text-white text-2xl">
            Built with speed in <br></br> mind
          </h1>
          <p className="mt-10 text-white opacity-50 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        <div className="w-1/3 bg-lightblack p-8 rounded-xl m-5">
          <h1 className="text-white text-2xl">
            Work From <br></br>anywhere
          </h1>
          <p className="mt-10 text-white opacity-50 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
        <div className="w-1/3 bg-lightblack p-8 rounded-xl m-5">
          <h1 className="text-white text-2xl">
            Chat and share in<br></br>one tool
          </h1>
          <p className="mt-10 text-white opacity-50 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
