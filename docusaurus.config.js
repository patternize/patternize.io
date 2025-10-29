const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'Patternize.io',
  tagline: 'Visualize Algorithms & Data Structures in Action',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Patternize', // Usually your GitHub org/user name.
  themeConfig: {
    navbar: {
      title: 'Patternize.io',
      logo: {
        alt: 'Patternize.io',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'Algorithms/Sorting/BubbleSort',
          label: 'CS Core',
          position: 'left',
          activeBaseRegex: '(Algorithms|DataStructures)',
        },
        {
          to: 'Stories/ManhattanDistance/manhattan-distance',
          label: 'Applications',
          position: 'left',
          activeBasePath: 'Stories',
        },
        {
          to: 'MachineLearning/BasicMath/Basics',
          label: 'Machine Learning',
          position: 'left',
          activeBasePath: 'MachineLearning',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          type: 'custom-github-button',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Docusaurus',
              href: 'https://docusaurus.io',
            },
            {
              label: 'airbnb/visx',
              href: 'https://airbnb.io/visx',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Stanford CS229 Machine Learning',
              to: 'https://cs229.stanford.edu/',
            },
            {
              label: 'Stanford CS161 Introduction to Algorithms',
              to: 'https://stanford-cs161.github.io/',
            },
          ],
        },
        {
          title: 'Follow Us',
          items: [
            {
              label: 'Patternize.io',
              href: 'https://github.com/patternize',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Patternize.io`,
    },
    algolia: {
      appId: 'BL2GDNRTKH',
      apiKey: '8adbddd2627f1fda49d44116656932ff',
      indexName: 'patternize_io',
    },
    socials: {
      github: 'https://github.com/patternize/patternize.io',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'javascript',
      additionalLanguages: ['java', 'typescript', 'css', 'json', 'bash'],
    },
    mermaid: {
      theme: { light: 'neutral', dark: 'dark' },
    },
    metadata: [
      {
        name: 'keywords',
        content:
          'algorithms, data structures, visualization, programming, computer science, learning',
      },
      {
        name: 'description',
        content:
          'Interactive visualizations of algorithms and data structures for better learning',
      },
      { name: 'og:type', content: 'website' },
      {
        name: 'og:title',
        content: 'Patternize.io - Algorithm Visualizations',
      },
      {
        name: 'og:description',
        content:
          'Learn algorithms and data structures through interactive visualizations',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'canonical',
        content:
          'https://patternize.github.io/docs/Applications/ReactFiber/intro-to-react-fiber',
      },
      {
        name: 'google-site-verification',
        content: 'JN9CClo-YacOkqWq94rsPvJaScJJpeowfQaO7TF6Dvw',
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: [
            '**/tags/**',
            '**/search/**',
            '**/404/**',
            '**/blog/**',
            '**/archive/**',
          ],
          filename: 'sitemap.xml',
        },
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  // for deployments
  url: 'https://patternize.github.io',
  baseUrl: '/',
  trailingSlash: false,
  projectName: 'patternize.github.io',
  organizationName: 'patternize',
  scripts: [
    {
      src: 'https://buttons.github.io/buttons.js',
      async: true,
      defer: true,
    },
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};
