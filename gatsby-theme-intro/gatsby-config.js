module.exports = ({
  basePath = "/",
  contentPath = "content/",
  showThemeLogo = true,
  theme = "classic",
}) => {
  return {
    siteMetadata: {
      description: "Personal page of Victor Nunes",
      locale: "en",
      showThemeLogo,
      title: "Victor Nunes",
    },
    plugins: [
      {
        resolve: `gatsby-plugin-postcss`,
        options: {
          postCssPlugins: [
            require("tailwindcss")(require("./tailwind.config")(theme)),
            require("postcss-input-range"),
            require("autoprefixer"),
          ],
        },
      },
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-yaml`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: contentPath,
        },
      },
      {
        resolve: "gatsby-plugin-react-svg",
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
    ],
  }
}
