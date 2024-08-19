/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `The Philosophy Club at UVA`,
    description: `The official website of the philosophy club at UVA.`,
    author: `Grant Zou`,
    siteUrl: `https://uvaphilclub.github.io`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "HYGRAPH",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "hygraph",
        // Url to query from
        url: "https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clx2dm8fq00r407v12j32u6sq/master",
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-sass',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `UVA Phil Club`,
        short_name: `Phil Club`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Phil Club Simplified Logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
  
}
