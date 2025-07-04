import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const divider = (label: string) =>
  `<div class='sidebar-component-divider sidebar-component-divider-level-1'><span>${label}</span><div class='sidebar-component-divider-line' /></div>`;

const dividerLevel2 = (label: string) =>
  `<div class='sidebar-component-divider sidebar-component-divider-level-2'><span>${label}</span><div class='sidebar-component-divider-line' /></div>`;

const dividerLevel2LessTopMargin = (label: string) =>
  `<div class='sidebar-component-divider sidebar-component-divider-level-2-less-top-margin'><span>${label}</span><div class='sidebar-component-divider-line' /></div>`;

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // But you can create a sidebar manually
  sidebar: [
    {
      type: "category",
      label: "Get Started",
      items: [
        {
          type: "doc",
          id: "introduction",
          label: "Introduction",
        },
        {
          type: "category",
          label: "Installation",
          items: [
            {
              type: "html",
              value: dividerLevel2LessTopMargin("TS / JS"),
            },
            {
              type: "doc",
              id: "get-started/installation/node-js",
              label: "Node.js",
            },
            {
              type: "doc",
              id: "get-started/installation/express",
              label: "Express",
            },
            {
              type: "doc",
              id: "get-started/installation/fastify",
              label: "Fastify",
            },
            {
              type: "doc",
              id: "get-started/installation/hono",
              label: "Hono",
            },
            {
              type: "doc",
              id: "get-started/installation/koa",
              label: "Koa",
            },
            {
              type: "doc",
              id: "get-started/installation/nest-js",
              label: "NestJS",
            },
            {
              type: "doc",
              id: "get-started/installation/new-project/node-js",
              label: "New Node.js Project",
              className: "hidden-sidebar-item",
            },
            {
              type: "html",
              value: dividerLevel2("Python"),
            },
            {
              type: "doc",
              id: "get-started/installation/python",
              label: "Python",
            },
            {
              type: "doc",
              id: "get-started/installation/django",
              label: "Django",
            },
            {
              type: "doc",
              id: "get-started/installation/fast-api",
              label: "FastAPI",
            },
            {
              type: "doc",
              id: "get-started/installation/flask",
              label: "Flask",
            },
            {
              type: "doc",
              id: "get-started/installation/new-project/python",
              label: "New Python Project",
              className: "hidden-sidebar-item",
            },
          ],
        },
        {
          type: "doc",
          id: "get-started/concepts",
          label: "Core Concepts",
        },
        {
          type: "link",
          label: "Cheat Sheet",
          href: "https://app.composehq.com/app/025ac441-ea1d-42f3-9c39-9db492a8146a/compose-cheat-sheet",
        },
        {
          type: "doc",
          id: "get-started/how-it-works",
          label: "How It Works",
        },
      ],
      collapsed: false,
      collapsible: false,
    },
    {
      type: "category",
      label: "Guides",
      items: [
        {
          type: "doc",
          id: "guides/ai-integration",
          label: "AI Assistant Integration",
          className: "hidden-sidebar-item",
        },
        {
          type: "doc",
          id: "guides/debug-mode",
          label: "Debug Mode",
          className: "hidden-sidebar-item",
        },
        {
          type: "doc",
          id: "guides/deployment",
          label: "Deployment",
        },
        {
          type: "doc",
          id: "guides/forms",
          label: "Forms",
        },
        {
          type: "doc",
          id: "guides/migrate-from-interval",
          label: "Migrate from Interval",
          className: "hidden-sidebar-item",
        },
        {
          type: "doc",
          id: "guides/multipage-apps",
          label: "Multipage Apps",
        },
        {
          type: "doc",
          id: "guides/styling-your-app",
          label: "Style Your App",
        },
        {
          type: "doc",
          id: "guides/troubleshooting-issues",
          label: "Troubleshooting Issues",
        },
        {
          type: "doc",
          id: "guides/upgrade-sdk",
          label: "Upgrade SDK",
          className: "hidden-sidebar-item",
        },
        {
          type: "doc",
          id: "guides/working-with-files",
          label: "Working With Files",
        },
        {
          type: "category",
          label: "Example Apps",
          items: [
            {
              type: "doc",
              id: "examples/crud-app",
              label: "CRUD App",
            },
          ],
          collapsed: true,
          collapsible: true,
        },
      ],
      collapsed: false,
      collapsible: false,
    },
    {
      type: "category",
      label: "Page Actions",
      items: [
        {
          type: "doc",
          id: "page-actions/add",
          label: "Add",
        },
        {
          type: "doc",
          id: "page-actions/confirm-modal",
          label: "Confirm",
        },
        {
          type: "doc",
          id: "page-actions/download",
          label: "Download",
        },
        {
          type: "doc",
          id: "page-actions/link",
          label: "Link",
        },
        {
          type: "doc",
          id: "page-actions/log",
          label: "Log",
        },
        {
          type: "doc",
          id: "page-actions/loading",
          label: "Loading",
        },
        {
          type: "doc",
          id: "page-actions/modal",
          label: "Modal",
        },
        {
          type: "doc",
          id: "page-actions/reload",
          label: "Reload",
        },
        {
          type: "doc",
          id: "page-actions/set-config",
          label: "Set Config",
        },
        {
          type: "doc",
          id: "page-actions/toast",
          label: "Toast",
        },
        {
          type: "doc",
          id: "page-actions/update",
          label: "Update",
        },
      ],
      collapsed: false,
      collapsible: false,
    },
    {
      type: "category",
      label: "Components",
      items: [
        {
          type: "html",
          value: divider("Core"),
        },
        {
          type: "doc",
          id: "components/input/button",
          label: "Button",
        },
        {
          type: "doc",
          id: "components/navigation",
          label: "Navigation",
        },
        {
          type: "doc",
          id: "components/input/table",
          label: "Table",
        },
        {
          type: "html",
          value: divider("Layout"),
        },
        {
          type: "doc",
          id: "components/layout/card",
          label: "Card",
        },
        {
          type: "doc",
          id: "components/layout/distributed-row",
          label: "Distributed Row",
        },
        {
          type: "doc",
          id: "components/dynamic/for-each",
          label: "For Each",
        },
        {
          type: "doc",
          id: "components/layout/row",
          label: "Row",
        },
        {
          type: "doc",
          id: "components/layout/stack",
          label: "Stack",
        },
        {
          type: "html",
          value: divider("Charts"),
        },
        {
          type: "doc",
          id: "components/chart/bar-chart",
          label: "Bar Chart",
        },
        {
          type: "html",
          value: divider("Forms"),
        },
        {
          type: "doc",
          id: "components/layout/form",
          label: "Form",
        },
        {
          type: "doc",
          id: "components/input/checkbox",
          label: "Checkbox",
        },
        {
          type: "doc",
          id: "components/input/date-input",
          label: "Date Input",
        },
        {
          type: "doc",
          id: "components/input/datetime-input",
          label: "DateTime Input",
        },
        {
          type: "doc",
          id: "components/input/email-input",
          label: "Email Input",
        },
        {
          type: "doc",
          id: "components/input/file-drop",
          label: "File Drop",
        },
        {
          type: "doc",
          id: "components/input/json-input",
          label: "JSON Input",
        },
        {
          type: "doc",
          id: "components/input/multi-select-box",
          label: "Multi Select",
        },
        {
          type: "doc",
          id: "components/input/number-input",
          label: "Number Input",
        },
        {
          type: "doc",
          id: "components/input/password-input",
          label: "Password Input",
        },
        {
          type: "doc",
          id: "components/input/radio-group",
          label: "Radio Group",
        },
        {
          type: "doc",
          id: "components/input/select-box",
          label: "Select",
        },
        {
          type: "doc",
          id: "components/input/text-area",
          label: "Text Area",
        },
        {
          type: "doc",
          id: "components/input/text-input",
          label: "Text Input",
        },
        {
          type: "doc",
          id: "components/input/time-input",
          label: "Time Input",
        },
        {
          type: "doc",
          id: "components/input/url-input",
          label: "URL Input",
        },
        {
          type: "html",
          value: divider("Display"),
        },
        {
          type: "doc",
          id: "components/display/code",
          label: "Code",
        },
        {
          type: "doc",
          id: "components/display/divider",
          label: "Divider",
        },
        {
          type: "doc",
          id: "components/display/header",
          label: "Header",
        },
        {
          type: "doc",
          id: "components/display/image",
          label: "Image",
        },
        {
          type: "doc",
          id: "components/display/json",
          label: "JSON",
        },
        {
          type: "doc",
          id: "components/display/markdown",
          label: "Markdown",
        },
        {
          type: "doc",
          id: "components/display/pdf",
          label: "PDF",
        },
        {
          type: "doc",
          id: "components/display/statistic",
          label: "Statistic",
        },
        {
          type: "doc",
          id: "components/display/text",
          label: "Text",
        },
        {
          type: "doc",
          id: "components/display/spinner",
          label: "Spinner",
        },
        {
          type: "html",
          value: divider("Extras"),
        },
        {
          type: "doc",
          id: "components/dynamic/if-else",
          label: "Conditional",
        },
        {
          type: "doc",
          id: "components/input/dataframe",
          label: "DataFrame",
        },
      ],
      collapsed: false,
      collapsible: false,
      link: {
        type: "doc",
        id: "components/index",
      },
    },
    {
      type: "doc",
      id: "deprecated/state",
      label: "State (Deprecated)",
      className: "hidden-sidebar-item",
    },
  ],
};

export default sidebars;
