import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/global.css"
import Fade from "react-reveal/Fade"

export default function ServiceTemplate({ data }) {
  const { markdownRemark: post } = data;
  const imageUrl = post.frontmatter.image[0]?.publicURL || '';

  const [titleFirstPart, titleSecondPart] = post.frontmatter.title.split(' ').reduce((acc, word, index, array) => {
    const middleIndex = Math.ceil(array.length / 2);
    if (index < middleIndex) acc[0].push(word);
    else acc[1].push(word);
    return acc;
  }, [[], []]).map(part => part.join(' '));

  const featureSectionData = [
    {
      path: "/services/artificial-intelligence",
      title: "Artificial Intelligence",
      description: "We help you build, accelerate, and launch new AI-powered products and services.",
      icons: [
        {iconTitle: "Build", text:"Build new stuff with our stuff. Pleased and", icon: "ai.svg"},
        {iconTitle: "Accelerate", text:"Build new stuff with our stuff. Pleased and", icon: "machine-learning.svg"},
        {iconTitle: "Launch", text:"Build new stuff with our stuff. Pleased and", icon: "deep-learning.svg"},
      ]
    }
  ]

  return (
    <Layout>
      <div className="servicesBg">
        <section className="pt-20 pb-20">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12">
              <div className="lg:w-1/2 flex flex-col justify-between text-white">
                <div>
                  {/* Adjusted "Service" text for size and transparency */}
                  <h2 className="text-2xl mb-4 font-bold uppercase text-white opacity-75">Service</h2>
                  {/* Responsive and larger title */}
                  <h1 className="font-bold mb-6">
                    <div className="text-4xl md:text-6xl lg:text-8xl">{titleFirstPart}</div>
                    <div className="mt-4 text-4xl md:text-6xl lg:text-8xl">{titleSecondPart}</div>
                  </h1>
                  <p className="mb-8">{post.frontmatter.description}</p>
                </div>
                <div>
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.location.href = '/contact';
                      }
                    }}
                    className="px-24 py-5 bg-brightpink text-white font-semibold text-lg rounded-xl transition transform hover:scale-105 mb-4">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <img src={imageUrl} alt={post.frontmatter.title} className="object-cover self-end" style={{ maxHeight: '600px' }} />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Populate the featureSectionData here according to path if it matches the condition. */}
         {/* Feature section data population */}
         {featureSectionData.map((feature) => {
          console.log(feature.path,"Arda");
          console.log(data,"Arda");
          if (feature.path == data.markdownRemark.frontmatter.path) {
            return (
              <div key={feature.title} className="mt-20 px-4 lg:px-8">
                <Fade bottom cascade>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-white font-bold text-5xl sm:text-5xl lg:text-7xl">
                      How we can help you
                    </h1>
                    <h2 className="text-white text-xl mt-6 opacity-50">
                      Unleashing Potential with Tailored IT Solutions
                    </h2>
                  </div>
                </Fade>
                <Fade bottom cascade>
                  <div className="mt-12 mb-32 px-0 mx-0 grid grid-cols-1 xxs:grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {feature.icons.map((icon) => {
                      return (
                        <div key={icon.iconTitle} className="flex flex-col gap-3">
                          <div className="flex justify-center">
                            <img
                              src={`/icons/${icon.icon}`}
                              alt={icon.iconTitle}
                              className="h-20 w-20 object-contain"
                            />
                          </div>
                          <h3 className="text-white font-bold text-2xl">{icon.iconTitle}</h3>
                          <p className="text-white text-lg opacity-50">{icon.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            );
          }
        }
        )}    
    </Layout>
  );
}


export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        humanDate
        author
        subtitle
        description
        path
        image {
          publicURL
          base
        }
      }
    }
  }
`


