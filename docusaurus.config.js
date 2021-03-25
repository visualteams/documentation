/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'VisualTeams Documentation',
  tagline: '',
  url: 'https://documentation.visualteams.eu',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'visualteams',
  projectName: 'documentation',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Visualteams logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/onpremise',
          activeBasePath: 'docs/onpremise',
          label: 'On Premise',
          position: 'left',
        },
        {
          to: 'docs/plugins',
          activeBasePath: 'docs',
          label: 'Plugins',
          position: 'left',
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
              label: 'On premise',
              to: 'docs/onpremise',
            },
            {
              label: 'Plugins',
              to: 'docs/plugins',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/visualteams',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://www.visualteams.eu',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/visualteams',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tech Ex Machina SAS. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/visualteams/documentation/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/visualteams/documentation/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
