import { Icon } from "@iconify/react";
import Link from "@docusaurus/Link";

interface FrameworkCard {
  name: string;
  description: string;
  icon: string;
  link: string;
  color: string;
}

const URL_PREFIX = "/get-started/installation";

const pythonFrameworks: FrameworkCard[] = [
  {
    name: "Python",
    description: "General Python installation guide",
    icon: "devicon:python",
    link: `${URL_PREFIX}/python`,
    color: "#3776ab",
  },
  {
    name: "Django",
    description: "Install into your Django project",
    icon: "material-icon-theme:django",
    link: `${URL_PREFIX}/django`,
    color: "#092e20",
  },
  {
    name: "FastAPI",
    description: "Install into your FastAPI project",
    icon: "devicon:fastapi",
    link: `${URL_PREFIX}/fast-api`,
    color: "#009688",
  },
  {
    name: "Flask",
    description: "Install into your Flask project",
    icon: "file-icons:flask",
    link: `${URL_PREFIX}/flask`,
    color: "#000000",
  },
];

const nodeFrameworks: FrameworkCard[] = [
  {
    name: "Node.js",
    description: "General Node.js installation guide",
    icon: "devicon:nodejs",
    link: `${URL_PREFIX}/node-js`,
    color: "#339933",
  },
  {
    name: "Express",
    description: "Install into your Express project",
    icon: "simple-icons:express",
    link: `${URL_PREFIX}/express`,
    color: "#000000",
  },
  {
    name: "Fastify",
    description: "Install into your Fastify project",
    icon: "simple-icons:fastify",
    link: `${URL_PREFIX}/fastify`,
    color: "#000000",
  },
  {
    name: "Hono",
    description: "Install into your Hono project",
    icon: "simple-icons:hono",
    link: `${URL_PREFIX}/hono`,
    color: "#ff6900",
  },
  {
    name: "Koa",
    description: "Install into your Koa project",
    icon: "simple-icons:koa",
    link: `${URL_PREFIX}/koa`,
    color: "#33333d",
  },
];

const newProjects: FrameworkCard[] = [
  {
    name: "Create a new Node.js project",
    description: "Create a new project with the SDK and some starter apps",
    icon: "devicon:nodejs",
    link: `${URL_PREFIX}/new-project/node-js`,
    color: "#339933",
  },
  {
    name: "Create a new Python project",
    description: "Create a new project with the SDK and some starter apps",
    icon: "devicon:python",
    link: `${URL_PREFIX}/new-project/python`,
    color: "#000000",
  },
];

function FrameworkCard({ framework }: { framework: FrameworkCard }) {
  return (
    <a
      href={framework.link}
      style={{
        border: "1px solid var(--ifm-color-emphasis-200)",
        borderRadius: "8px",
        padding: "1rem",
        height: "100%",
        backgroundColor: "var(--ifm-background-color)",
        transition: "all 0.2s ease",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        textDecoration: "none",
        color: "var(--ifm-color-content)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--ifm-color-primary)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--ifm-color-emphasis-200)";
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <Icon icon={framework.icon} height={24} />
        <p
          style={{
            margin: 0,
            color: "var(--ifm-color-content)",
          }}
        >
          {framework.name}
        </p>
      </div>
      <Icon icon="weui:arrow-outlined" height={24} />
    </a>
  );
}

function PythonInstallationGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      {pythonFrameworks.map((framework) => (
        <FrameworkCard key={framework.name} framework={framework} />
      ))}
    </div>
  );
}

function NodeInstallationGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      {nodeFrameworks.map((framework) => (
        <FrameworkCard key={framework.name} framework={framework} />
      ))}
    </div>
  );
}

function NewProjectGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      {newProjects.map((project) => (
        <FrameworkCard key={project.name} framework={project} />
      ))}
    </div>
  );
}

export { PythonInstallationGrid, NodeInstallationGrid, NewProjectGrid };
