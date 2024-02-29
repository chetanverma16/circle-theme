import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "../styles/global.css"
import Fade from "react-reveal/Fade"
import featureConfig from "../constants/servicesFeature.json";
import sectionConfig from "../constants/servicesSection.json";

export default function ServiceTemplate({ data }) {
  const { markdownRemark: post } = data;
  const imageUrl = post.frontmatter.image[0]?.publicURL || '';

  const [titleFirstPart, titleSecondPart] = post.frontmatter.title.split(' ').reduce((acc, word, index, array) => {
    const middleIndex = Math.ceil(array.length / 2);
    if (index < middleIndex) acc[0].push(word);
    else acc[1].push(word);
    return acc;
  }, [[], []]).map(part => part.join(' '));

  return (
    <Layout>
      <div className="services-bg">
        <section className="pt-20 pb-20">
          <div className="container mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-stretch gap-12">
              <div className="lg:w-1/2 flex flex-col justify-between text-white">
                <div>
                  <h2 className="text-2xl mb-4 font-bold uppercase text-white opacity-75">Service</h2>
                  <h1 className="font-bold mb-6">
                    <div className="text-4xl xxs:text-5xl xs:text-6xl sm:text-7xl xl:text-8xl">{titleFirstPart}</div>
                    <div className="mt-4 text-4xl xxs:text-5xl xs:text-6xl sm:text-7xl xl:text-8xl">{titleSecondPart}</div>
                  </h1>
                  {/* Image for smaller screens. Hidden otherwise. */}
                  <div className="lg:hidden">
                  <img src={imageUrl} alt={post.frontmatter.title} className="object-cover self-end" style={{ maxHeight: '600px' }} />
                  </div>
                  <p className="mb-8">{post.frontmatter.description}</p>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 mb-8"  style={{ maxWidth: '640px' }} >
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        window.location.href = '/contact';
                      }
                    }}
                    className="services-button px-24 py-4 mb-4">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="hidden lg:w-1/2 lg:flex justify-center lg:justify-end">
                <img src={imageUrl} alt={post.frontmatter.title} className="object-cover self-end" style={{ maxHeight: '600px' }} />
              </div>
            </div>
          </div>
        </section>
      </div>
         {/* Feature section data population */}
         {featureConfig.featureSectionData.map((feature) => {
          if (feature.path == data.markdownRemark.frontmatter.path) {
            return (
              <div className="max-w-7xl mx-auto">
                <div className="mt-8 m-4">
                <Fade bottom cascade>
                  <div className="flex flex-col gap-3 mt-20">
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
                        <div key={icon.iconTitle} className="bg-lightblack p-8 rounded-xl service-card">
                          <div className="flex items-center justify-start mb-2">
                            <img
                              src={`/icons/${icon.icon}`}
                              alt={icon.iconTitle}
                              className="w-9 mr-3"
                            />
                            <h3 className="text-white text-2xl align-middle">{icon.iconTitle}</h3>
                          </div>
                          <p className="mt-5 text-white text-lg opacity-50">{icon.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </Fade>
                </div>
              </div>
            );
          }
        }
        )}

      {/* "Why Techfi?" section data population */}
      {sectionConfig.servicesSectionData.map((section) => {
        if (section.path == data.markdownRemark.frontmatter.path) {
          return (
            <div className="max-w-7xl mx-auto">
              <div className="mt-8 m-4">
              <div className="flex flex-col gap-3 mt-20">
                <h1 className="text-white font-bold text-5xl sm:text-5xl lg:text-7xl">
                  Why Techfi?
                </h1>
                <h2 className="text-white text-xl mt-6 opacity-50">
                  Why us when there are so many other options?
                </h2>
              </div>
      
              <Fade bottom cascade>
                <div className="mt-10 mb-32 px-0 mx-0 grid grid-cols-1 md:grid-cols-2 gap-5">
                  {section.icons.map((icon) => {
                          return (
                  <div className="p-8 service-card">
                      <img
                      src={`/icons/${icon.icon}`}
                      alt={icon.iconTitle}
                      className="w-14 pb-5"
                      />                    
                    <h1 className="text-white text-2xl font-semibold">
                      {icon.iconTitle}
                    </h1>
                    <p className="mt-5 text-white opacity-50 text-lg">
                      {icon.text}
                    </p>
                  </div>
                    );
                  })}
                </div>
              </Fade>
            </div>
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


