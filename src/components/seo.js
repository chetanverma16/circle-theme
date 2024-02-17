/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
    htmlAttributes={{
      lang: "en",
    }}
    title="Effective Predator Management Solutions | OneShot Predator Management"
    titleTemplate="%s | OneShot Predator Management"
    meta={[
      {
        name: "description",
        content: "OneShot Predator Management is Fort Worth Texas's Premier company in effective predator control solutions, offering services to protect your property and livestock from predators. Experienced, licensed professionals ready to assist.",
      },
      {
        property: "og:title",
        content: "Effective Predator Management Solutions in Fort Worth Texas | OneShot Predator Management",
      },
      {
        property: "og:description",
        content: "OneShot Predator Management is Fort Worth Texas's Premier company in effective predator control solutions, offering services to protect your property and livestock from predators. Experienced, licensed professionals ready to assist.",
      },
      {
        property: "og:type",
        content: "www.oneshotpredatormgmt.com",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:creator",
        content: "@YourTwitterHandle",
      },
      {
        name: "twitter:title",
        content: "Effective Predator Management Solutions | OneShot Predator Management",
      },
      {
        name: "twitter:description",
        content: "OneShot Predator Management specializes in humane and effective predator control solutions, offering services to protect your property and livestock from predators. Experienced, licensed professionals ready to assist.",
      },
    ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
