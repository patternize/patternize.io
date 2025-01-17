module.exports = {
  title: "Patternize.io",
  tagline: "Visualize Algorithms & Data Structures in Action",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Patternize", // Usually your GitHub org/user name.
  themeConfig: {
    navbar: {
      title: "Patternize.io",
      logo: {
        alt: "Patternize.io",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "Algorithms/Sorting/BubbleSort",
          label: "Algorithms",
          position: "left",
          activeBasePath: "Algorithms",
        },
        {
          to: "DataStructures/Basic/BinaryTree/Definitions&&Properties",
          label: "Data Structures",
          position: "left",
          activeBasePath: "DataStructures",
        },
        {
          to: "Stories/ManhattanDistance/manhattan-distance",
          label: "Interactive Stories",
          position: "left",
          activeBasePath: "Stories",
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          type: "custom-github-button",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Links",
          items: [
            {
              label: "Docusaurus",
              href: "https://docusaurus.io",
            },
            {
              label: "airbnb/visx",
              href: "https://airbnb.io/visx",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Princeton Algorithms 4th Edition",
              to: "https://algs4.cs.princeton.edu/home",
            },
          ],
        },
        {
          title: "Follow Us",
          items: [
            {
              label: "Patternize.io",
              href: "https://github.com/patternize",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Patternize.io`,
    },
    algolia: {
      appId: "BL2GDNRTKH",
      apiKey: "8adbddd2627f1fda49d44116656932ff",
      indexName: "patternize_io",
    },
    socials: {
      github: "https://github.com/patternize/patternize.io",
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
      defaultLanguage: "javascript",
      additionalLanguages: ["java", "typescript", "css", "json", "bash"],
    },
    metadata: [
      {
        name: "keywords",
        content:
          "algorithms, data structures, visualization, programming, computer science, learning",
      },
      {
        name: "description",
        content:
          "Interactive visualizations of algorithms and data structures for better learning",
      },
      { name: "og:type", content: "website" },
      { name: "og:title", content: "Patternize.io - Algorithm Visualizations" },
      {
        name: "og:description",
        content:
          "Learn algorithms and data structures through interactive visualizations",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "canonical",
        content:
          "https://patternize.github.io/docs/Applications/ReactFiber/intro-to-react-fiber",
      },
      {
        name: "google-site-verification",
        content: "JN9CClo-YacOkqWq94rsPvJaScJJpeowfQaO7TF6Dvw",
      },
    ],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-sitemap",
      {
        changefreq: "weekly",
        priority: 0.5,
        ignorePatterns: [
          "**/tags/**",
          "**/search/**",
          "**/404/**",
          "**/blog/**",
          "**/archive/**",
        ],
        filename: "sitemap.xml",
      },
    ],
  ],
  // for deployments
  url: "https://patternize.github.io",
  baseUrl: "/",
  trailingSlash: false,
  projectName: "patternize.github.io",
  organizationName: "patternize",
  scripts: [
    {
      src: "https://buttons.github.io/buttons.js",
      async: true,
      defer: true,
    },
  ],
};
