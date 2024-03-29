const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'dbt-sqlserver-docs',
  tagline: 'dbt adapter for sql server',
  url: 'https://timdenouden.github.io/',
  baseUrl: '/dbt-sqlserver-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'timdenouden', // Usually your GitHub org/user name.
  projectName: 'dbt-sqlserver-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'dbt-sqlserver-docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/dbt-logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/dbt-msft/dbt-sqlserver',
          label: 'GitHub',
          position: 'right',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'dbt',
              href: 'https://docs.getdbt.com/',
            }
          ],
        },
        {
          title: 'More',
          items: [
			{
				label: 'dbt-sqlserver GitHub',
				href: 'https://github.com/dbt-msft/dbt-sqlserver',
			},
            {
              label: 'Docs GitHub',
              href: 'https://github.com/timdenouden/dbt-sqlserver-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Timothy Den Ouden. dbt logo Copyright © 2021 dbt Labs. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/timdenouden/dbt-sqlserver-docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
