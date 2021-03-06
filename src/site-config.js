// This configuration file allows you to customise many aspects of this Gatsby
// starter.
// For information on supported markdown syntax: https://github.com/remarkjs/remark/blob/master/test/fixtures/input/markdown-documentation-syntax.text

module.exports = {
  // ---------------------------------------------------------------------------
  // Site Data
  // ---------------------------------------------------------------------------

  data: {
    // Used in the site copyright
    owner: `Dennis Merkulov`,
    // Used for the main site title and in RSS Feed
    title: `FX2`,
    // Used in RSS Feed
    description: `Blog about programming and everything`,
    url: `http://forxtu.xyz`,
    // Starting year of copyright range
    startYear: `2018`,
    // Show the credit in the footer (much appreciated)
    showCredit: false,
    // Formatting for dates displayed across the site
    // For format see: http://momentjs.com/docs/#/displaying/format/
    dateFormat: `Do MMMM YYYY`
  },

  // ---------------------------------------------------------------------------
  // Metadata
  // ---------------------------------------------------------------------------

  metadata: {
    home: {
      title: `Home Page / FORXTU`,
      description: `Dennis Merkulov. forxtu.xyz - a personal blog about programming and lifestyle.`,
      keywords: `home, forxtu, programming, lifestyle`
    },
    about: {
      title: `About Page / FORXTU`,
      description: `Hi! I'm Dennis, a web front-end developer. I write simple and effective tutorials and topics about web development. Also I write about my life, travels and other cool stuff.`,
      keywords: `about, forxtu, programming, lifestyle`
    },
    contact: {
      title: `Contact Page / FORXTU`,
      description: `Feel free to contact me! You can use this form, any social media or send me an email`,
      keywords: `contact, forxtu, programming, lifestyle`
    },
    articles: {
      title: `Articles Page / FORXTU`,
      description: `The Articles`,
      keywords: `articles, forxtu, programming, lifestyle`
    },
    projects: {
      title: `Projects Page / FORXTU`,
      description: `The Projects`,
      keywords: `projects`
    },
    tag: {
      title: ` Tag `,
      description: `Resources tagged with`,
      keywords: `tags, forxtu, lifestyle`
    },
    tags: {
      title: `Tags / FORXTU`,
      description: `Explore topics by tags! - forxtu.xyz - Dennis Merkulov`,
      keywords: `tags, forxtu, programming, lifestyle`
    },
    category: {
      title: ` Category `,
      description: `Resources in category`,
      keywords: `categories, forxtu, lifestyle`
    },
    categories: {
      title: `Categories / FORXTU`,
      description: `Explore topics by categires! - forxtu.xyz - Dennis Merkulov`,
      keywords: `categories, forxtu, programming, lifestyle`
    }
  },

  // ---------------------------------------------------------------------------
  // SEO
  // ---------------------------------------------------------------------------

  seo: {
    // Your Google Tracking ID, in the form: UA-000000-0
    // If you leave undefined, the tracking code will not be added
    googleTrackingID: `UA-79963580-3`
  },

  // ---------------------------------------------------------------------------
  // Site Structure
  // ---------------------------------------------------------------------------

  structure: {
    // -------------------------------------------------------------------------
    // Directories
    // -------------------------------------------------------------------------

    // Directory path for downloads, relative to your root url
    downloadsDir: `downloads`,
    // Directly path for code used in REPLs
    codeDir: `code`,

    // -------------------------------------------------------------------------
    // Pages
    // -------------------------------------------------------------------------

    pages: {
      home: {
        // Page title
        title: `Featured articles`,
        // Title used for nav
        navTitle: `Home`,
        // Path used in URL
        path: `/`
      },
      about: {
        // Page title
        title: `About me and project`,
        // Title used for nav
        navTitle: `About`,
        // Path used in URL
        path: `/about`
      },
      notFound: {
        // Page title
        title: `Page Not Found`,
        // Path used in URL
        path: `/404`
      }
    },

    // -------------------------------------------------------------------------
    // Resources
    // -------------------------------------------------------------------------

    resources: {
      // Configuration for articles
      articles: {
        // Resource Name (will be pluralised for page title)
        title: `Article`,
        // Title used for nav
        navTitle: `Articles`,
        // Name of dir containing markdown docs
        directory: `articles`,
        // Path used in URL
        path: `/articles`,
        // Paginate to this number of items per page
        groupSize: 5
      },
      // Configuration for projects
      projects: {
        // Resource Name (will be pluralised for page title)
        title: `Project`,
        // Title used for nav
        navTitle: `Projects`,
        // Name of dir containing markdown docs
        directory: `projects`,
        // Path used in URL
        path: `/projects`
      },
      // Configuration for tags
      tags: {
        // Resource Name (will be pluralised for page title)
        title: `Tag`,
        // Title used for nav
        navTitle: `Tags`,
        // Path used in URL
        path: `/tags`
      }
    }
  },

  // ---------------------------------------------------------------------------
  // Media
  // ---------------------------------------------------------------------------

  media: {
    images: {
      // The maximum width an image used on the site will be displayed at.
      // Responsive images will be generated at double this width to provide for
      // hi-dpi screens.
      maxWidth: 1200,
      // JPG quality for images encoded for the site
      quality: 60
    }
  },

  // ---------------------------------------------------------------------------
  // CLI
  // ---------------------------------------------------------------------------

  // Internal
  cli: {
    // Emojo used to prefix messages reported during build
    emoji: `FX2 - `
  }
}
