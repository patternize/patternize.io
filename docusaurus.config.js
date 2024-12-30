module.exports = {
  title: "Patternize.io",
  tagline: "Patternize Algorithms and Data Structure",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Patternize", // Usually your GitHub org/user name.
  themeConfig: {
    navbar: {
      title: "Patternize.io",
      logo: {
        alt: "Patternize.io",
        src: "img/logo.svg"
      },
      items: [
        {
          to: "docs/Patterns/Backtracking/Introduction",
          label: "Patterns",
          position: "left",
          activeBasePath: "docs/Patterns"
        },
        {
          to: "docs/Algorithms/Sorting/BubbleSort",
          label: "Algorithms",
          position: "left",
          activeBasePath: "docs/Algorithms"
        },
        {
          to: "docs/DataStructures/Basic/BinaryTree/Definitions&&Properties",
          label: "Data Structures",
          position: "left",
          activeBasePath: "docs/DataStructures"
        },
        {
          to: "docs/Language/Java/Overview",
          label: "Language",
          position: "left",
          activeBasePath: "docs/Language"
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          type: 'custom-github-button',
          position: "right",
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Docusaurus",
              href: "https://docusaurus.io"
            },
            {
              label: "PyTutor",
              href: "http://pythontutor.com"
            }
          ]
        },
        {
          title: "Resources",
          items: [
            {
              label: "Princeton Algorithms 4th Edition",
              to: "https://algs4.cs.princeton.edu/home"
            }
          ]
        },
        {
          title: "Follow Us",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/patternize"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Patternize.io`
    },
    algolia: {
      appId: 'BL2GDNRTKH',
      apiKey: "b3b4a1801c88dedb7dc0785d10a51de3",
      indexName: "patternize_io"
    },
    socials: {
      github: 'https://github.com/patternize/patternize.io',
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js")
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  // for deployments
  url: "https://patternize.github.io",
  baseUrl: "/",
  trailingSlash: false,
  projectName: "patternize.github.io",
  organizationName: "patternize",
  scripts: [
    {
      src: 'https://buttons.github.io/buttons.js',
      async: true,
      defer: true
    }
  ]
};
