// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "PropertEase",
  tagline: "ease property management",
  favicon: "/img/favicon.ico",

  // Set the production url of your site here
  url: "https://pi-propertease.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PI-PropertEase", // Usually your GitHub org/user name.
  projectName: "PropertEase", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "PropertEase",
        logo: {
          alt: "PropertEase Logo",
          src: "img/propertEaseLogo-light.png",
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'projectSidebar',
            position: 'left',
            label: 'Project Info',
          },
          {
            href: "https://github.com/PI-PropertEase",
            label: "GitHub",
            position: "left",
          },
          {
            href: "https://propertease.atlassian.net/jira/software/projects/SCRUM/boards/1",
            label: "Jira",
            position: "right",
          },
          {
            href: "https://drive.google.com/drive/folders/1FdH44A1MZvOJqbigQ2kSi4ZrfMuVYrrX?usp=drive_link",
            label: "Google Drive",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Project Advisors",
            items: [
              {
                label: "Dr. Osvaldo Pacheco",
                href: "https://www.ua.pt/pt/p/10313442",
              },
              {
                label: "Dr. Rui Costa",
                href: "https://www.ua.pt/pt/degeit/rui_augusto_da_costa",
              },
              {
                label: "Daniel Ferreira",
                href: "https://www.ua.pt/pt/p/80653922",
              },
            ],
          },
          {
            title: "Team Members",
            items: [
              {
                label: "Bárbara Galiza - 105937",
                href: "mailto:barbara.galiza@ua.pt",
              },
              {
                label: "Diana Miranda - 107457",
                href: "mailto:dianarrmiranda@ua.pt",
              },
              {
                label: "João Dourado - 108636",
                href: "mailto:joao.dourado1@ua.pt",
              },
              {
                label: "Miguel Figueiredo - 108287",
                href: "mailto:miguel.belchior@ua.pt",
              },
              {
                label: "Ricardo Quintaneiro - 110056",
                href: "mailto:ricardoquintaneiro@ua.pt",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/PI-PropertEase",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
