module.exports = {
  siteMetadata: {
    description: "Personal page of Victor Nunes",
    locale: "en",
    title: "Victor Nunes",
  },
  plugins: [
    {
      resolve: "@wkocjan/gatsby-theme-intro",
      options: {
        basePath: "/",
        contentPath: "content/",
        showThemeLogo: true,
        theme: "classic",
      },
    },
  ],
}
