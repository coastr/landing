module.exports = {
  siteMetadata: {
    siteUrl: "https://www.coastr.io",
    title: "Coastr",
    titleTemplate: "%s | Coastr",
    description:
      "Coastr allows restaurant customers to pay their bill through their phones",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-F9S5Y1FVJM",
        anonymize: false,
        head: true,
        defer: false,
        pageTransitionDelay: 0,
        enableWebVitalsTracking: true,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favIcon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
