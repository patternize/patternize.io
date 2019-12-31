module.exports = {
  title: 'Patternize.io',
  tagline: 'Patternize Algorithms and Data Structure',
  url: 'http://patternize.carlrocks.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Patternize.io',
      logo: {
        alt: 'Patternize.io',
        src: 'img/logo.png',
      },
      links: [
        {to: 'docs/DataStructure/README', label: 'Data Structure', position: 'left'},
        {to: 'docs/Patterns/README', label: 'Patterns', position: 'left'},
        {to: 'docs/Language/README', label: 'Language', position: 'left'},
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/patternize',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/DataStructure/List',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'Tableau Public',
              href: 'https://public.tableau.com',
            }
          ],
        },
        {
          title: 'Author Info',
          items: [
            {
              label: 'Website',
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
};
