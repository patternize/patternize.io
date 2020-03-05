module.exports = {
  title: 'Patternize.io',
  tagline: 'Patternize Algorithms and Data Structure',
  url: 'http://patternize.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Patternize', // Usually your GitHub org/user name.
  projectName: 'Patternize.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Patternize.io',
      logo: {
        alt: 'Patternize.io',
        src: 'img/logo.svg',
      },
      links: [
          {to: 'docs/Algorithms/Sorting/BubbleSort', label: 'Algorithms', position: 'left'},
          {to: 'docs/DataStructures/Advanced/VList', label: 'Data Structures', position: 'left'},
        {to: 'docs/Patterns/Backtracking/README', label: 'Patterns', position: 'left'},
        {to: 'docs/Language/Java/README', label: 'Language', position: 'left'},
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/patternize/patternize.io',
          label: 'GitHub',
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
              label: 'PyTutor',
              href: 'http://pythontutor.com'
            }
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Princeton Algorithms 4th Edition',
              to: 'https://algs4.cs.princeton.edu/home',
            }
          ],
        },
        {
          title: 'Follow Author',
          items: [
            {
              label: 'Carl Liu',
              href: 'http://www.carlrocks.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gazcn007',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Carl Liu (gazcn007)`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  // for deployments
  url: 'https://patternize.github.io',
  baseUrl: '/',
  projectName: 'patternize.github.io',
  organizationName: 'patternize'
};
