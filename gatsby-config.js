module.exports = {
  siteMetadata: {
    title: `novaSapiens - Blog`,
    name: `novaSapiens`,
    siteUrl: `https://novasapiens.cl`,
    description: `Publicación de contenido digital. Articulos, laboratorios, versionesSapiens.`,
    hero: {
      heading: `No tan solo publicaciones, también es compartir o encontrar el punto de partida a alguna idea o proyecto... novaSapiens`,
      maxWidth: 800,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/`,
      },
      {
        name: `facebook`,
        url: `https://facebook.com/novasapiens`
      }
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        rootPath: "/",
        basePath: "/",
        authorsPage: true,
        articlePermalinkFormat: "posts/:slug",
        sources: {
          local: true,
          //contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `novaSapiens - Blog`,
        short_name: `novaSapiens`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true, // boolean, defaults to true - if false API will return unformatted string from new Date()
        formatting: {
          format: 'dddd D MMMM YYYY', // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
          utc: false, // boolean, defaults to false - output time as UTC or not, following date-and-time API
        },
        locale: 'fr',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-123360999-1`
      },
    },
  ],
};
