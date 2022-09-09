/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: `TSA F1`,
    description: `TSA F1 is group number 1 in class F`,
    author: `@nabilaba`,
    image: `images/preview.jpg`,
    siteUrl: `https://tsa-f1.netlify.app`
  },
  plugins: [
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-sharp`,
    `@chakra-ui/gatsby-plugin`,
    `gatsby-plugin-react-helmet`,
    `gatsby-remark-reading-time`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `TSA F1`,
        short_name: `F1`,
        start_url: `/`,
        background_color: `#001b2b`,
        theme_color: `#004066`,
        display: `standalone`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blogs`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/fonts`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: "blog-permalink",
              isIconAfterHeader: false,
              elements: [`h2`]
            }
          },
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: `_blank`,
              rel: `noopener`
            }
          },
          {
            resolve: `gatsby-remark-prismjs`
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/src/fonts/*": [
            "Cache-Control: public",
            "Cache-Control: max-age=365000000",
            "Cache-Control: immutable"
          ]
        }
      }
    },
    `gatsby-transformer-sharp`
  ]
};
