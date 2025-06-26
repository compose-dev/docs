import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  // Gets used for SEO purposes for the title of the page
  title: "Compose Documentation",
  tagline: "The fastest way to build internal tools. Made for developers.",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://docs.composehq.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  projectName: "compose documentation",

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
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          breadcrumbs: false,
          routeBasePath: "/",
        },
        theme: {
          customCss: ["./src/css/custom.css", "./src/css/colored-pills.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      logo: {
        alt: "Compose Logo",
        src: "img/dark-logo-with-text.svg",
        srcDark: "img/light-logo-with-text.svg",
        href: "https://composehq.com",
        target: "_self",
      },
      items: [
        {
          href: "https://app.composehq.com",
          label: "Login to Compose",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "python"],
    },
    algolia: {
      appId: "6GOWOBAUE3",
      apiKey: "d8cadda8b4e5a4d4eeb19b73beb46b8b",
      indexName: "composehq",
      contextualSearch: true,
    },
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    function rootRedirectPlugin() {
      return {
        name: "root-redirect-plugin",
        contentLoaded({ actions }) {
          actions.addRoute({
            path: "/",
            component: "@site/src/components/Redirect",
            exact: true,
          });
          actions.addRoute({
            path: "/quickstart",
            component: "@site/src/components/Redirect",
            exact: true,
          });
        },
      };
    },
  ],
};

export default config;
