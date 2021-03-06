module.exports = {
  siteMetadata: {
    title: "y",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/news`,
        name: "news",
      },
    },
    // contenful からデータを取ってくるプラグイン
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '**********',
        accessToken: '**********',
      },
    },
    // マークダウンを扱うプラグイン
    "gatsby-transformer-remark",
  ],
};
