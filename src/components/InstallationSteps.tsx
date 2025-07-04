import CodeBlock from "@theme/CodeBlock";
import Details from "@theme/Details";
import Admonition from "@theme/Admonition";

function Introduction({
  framework,
  language,
  newProjectLink,
}: {
  framework: string;
  language: string;
  newProjectLink: string;
}) {
  return (
    <>
      <p>
        Create internal apps directly in your {framework} codebase with the
        Compose SDK. This guide will get you started with two starter apps in ~3
        minutes.
      </p>
      <Admonition type="info" title="Want to start from scratch?">
        <p>
          This guide helps you install Compose into your existing {framework}{" "}
          codebase. If you're just exploring for now or prefer to start from
          scratch, you can also{" "}
          <a href={newProjectLink}>
            create a new {language} project with the SDK and some starter apps
          </a>
          .
        </p>
      </Admonition>
    </>
  );
}

const installSdkNode = `npm install @composehq/sdk
# or
yarn add @composehq/sdk
# or
pnpm add @composehq/sdk
`;

function InstallSdkNode() {
  return (
    <>
      <p>
        Use your package manager to install the Compose SDK.{" "}
        <strong>The SDK requires Node.js 16 or higher.</strong>
      </p>
      <CodeBlock language="bash">{installSdkNode}</CodeBlock>
    </>
  );
}

const installSdkPythonNode = `pip install compose-sdk
# or
poetry add compose-sdk
# or
uv add compose-sdk
`;

function InstallSdkPython() {
  return (
    <>
      <p>
        Use your package manager to install the Compose SDK.{" "}
        <strong>The SDK requires Python 3.9 or higher.</strong>
      </p>
      <CodeBlock language="bash">{installSdkPythonNode}</CodeBlock>
    </>
  );
}

const createComposeFileNode = (fileName: string) => `# From your project root
touch src/${fileName}
`;

const composeStarterCodeNode = `import { Compose } from "@composehq/sdk";

const nav = new Compose.Navigation(["view-users", "create-user"])

// For demo purposes. In a real app, you'd use your actual database.
const dbUsers = [
    { name: "John Doe", email: "john@doe.com" },
    { name: "Jane Smith", email: "jane@smith.com" },
]

const viewUsersApp = new Compose.App({
    route: "view-users",
    navigation: nav,
    handler: async ({ page, ui }) => {
        page.add(() => ui.header("View Users", { size: "lg" }))
        const users = [...dbUsers] // fake database call
        page.add(() => ui.table("users-table", users));
    }
})

const createUserApp = new Compose.App({
    route: "create-user",
    navigation: nav,
    handler: async ({ page, ui }) => {
        page.add(() => ui.header("Create User", { size: "lg" }))
        page.add(() => ui.form(
            "create-user-form",
            [
                ui.textInput("name"),
                ui.emailInput("email")
            ],
            {
                onSubmit: async (form) => {
                    dbUsers.push({ name: form.name, email: form.email });
                    page.toast("User created successfully", { appearance: "success" });
                    page.link("view-users");
                }
            }
        ))
    }
})

const composeClient = new Compose.Client({
    apiKey: "API_KEY_HERE", // replace with your own API key
    apps: [viewUsersApp, createUserApp]
});

export { composeClient };`;

const ComposeStarterCodeNestjs = `import { Injectable, OnModuleInit } from '@nestjs/common';
import { Compose } from '@composehq/sdk';

// For demo purposes. In a real app, you'd use your actual database.
const dbUsers = [
  { name: 'John Doe', email: 'john@doe.com' },
  { name: 'Jane Smith', email: 'jane@smith.com' },
];

@Injectable()
export class ComposeService implements OnModuleInit {
  // Hook into NestJS lifecycle to start the Compose client once all modules are loaded.
  onModuleInit() {
    const nav = new Compose.Navigation(['view-users', 'create-user']);

    const viewUsersApp = new Compose.App({
      route: 'view-users',
      navigation: nav,
      handler: ({ page, ui }) => {
        page.add(() => ui.header('View Users', { size: 'lg' }));
        const users = [...dbUsers]; // fake database call
        page.add(() => ui.table('users-table', users));
      },
    });

    const createUserApp = new Compose.App({
      route: 'create-user',
      navigation: nav,
      handler: ({ page, ui }) => {
        page.add(() => ui.header('Create User', { size: 'lg' }));
        page.add(() =>
          ui.form(
            'create-user-form',
            [ui.textInput('name'), ui.emailInput('email')],
            {
              onSubmit: (form) => {
                dbUsers.push({ name: form.name, email: form.email });
                page.toast('User created successfully', {
                  appearance: 'success',
                });
                page.link('view-users');
              },
            },
          ),
        );
      },
    });

    const client = new Compose.Client({
      apiKey: 'API_KEY_HERE', // replace with your own API key
      apps: [viewUsersApp, createUserApp],
    });

    client.connect();
  }
}
`;

const ComposeStarterAppsPython = `import compose_sdk as c

# For demo purposes. In a real app, you'd use your actual database.
db_users = [
    { "name": "John Doe", "email": "john@doe.com" },
    { "name": "Jane Smith", "email": "jane@smith.com" },
]

def view_users_handler(page: c.Page, ui: c.UI):
    page.add(lambda: ui.header("View Users", size="lg"))
    users = [*db_users] # fake database call
    page.add(lambda: ui.table("users-table", users))

def create_user_handler(page: c.Page, ui: c.UI):
    def on_submit(form):
        db_users.append({ "name": form["name"], "email": form["email"] })
        page.toast("User created successfully", appearance="success")
        page.link("view-users")

    page.add(lambda: ui.header("Create User", size="lg"))
    page.add(lambda: ui.form(
        "create-user-form",
        [
            ui.text_input("name"),
            ui.email_input("email")
        ],
        on_submit=on_submit
    ))


nav = c.Navigation(["view-users", "create-user"])

view_users_app = c.App(route="view-users", nav=nav, handler=view_users_handler)
create_user_app = c.App(route="create-user", nav=nav, handler=create_user_handler)`;

const ComposeStarterCodePython = `import compose_sdk as c

# For demo purposes. In a real app, you'd use your actual database.
db_users = [
    { "name": "John Doe", "email": "john@doe.com" },
    { "name": "Jane Smith", "email": "jane@smith.com" },
]

def view_users_handler(page: c.Page, ui: c.UI):
    page.add(lambda: ui.header("View Users", size="lg"))
    users = [*db_users] # fake database call
    page.add(lambda: ui.table("users-table", users))

def create_user_handler(page: c.Page, ui: c.UI):
    def on_submit(form):
        db_users.append({ "name": form["name"], "email": form["email"] })
        page.toast("User created successfully", appearance="success")
        page.link("view-users")

    page.add(lambda: ui.header("Create User", size="lg"))
    page.add(lambda: ui.form(
        "create-user-form",
        [
            ui.text_input("name"),
            ui.email_input("email")
        ],
        on_submit=on_submit
    ))

nav = c.Navigation(["view-users", "create-user"])

compose_client = c.Client(
    api_key="API_KEY_HERE",
    apps=[
        c.App(route="view-users", nav=nav, handler=view_users_handler),
        c.App(route="create-user", nav=nav, handler=create_user_handler)
    ]
)
`;

function ReplaceApiKey() {
  return (
    <>
      <p>
        Replace <code>API_KEY_HERE</code> with your own Compose API key. Create
        a free account{" "}
        <a href="https://app.composehq.com/auth/signup" target="_blank">
          on Compose
        </a>{" "}
        to get one.
      </p>
      <img src="/img/copy-api-key.png" className="rounded" />
    </>
  );
}

function AddStarterAppsNode() {
  return (
    <>
      <p>
        Create a new file in your codebase, e.g. <code>compose.ts</code>.
      </p>
      <CodeBlock language="bash">
        {createComposeFileNode("compose.ts")}
      </CodeBlock>
      <p>Then add the following starter code into the file:</p>
      <CodeBlock language="typescript">{composeStarterCodeNode}</CodeBlock>
      <ReplaceApiKey />
    </>
  );
}

function AddStarterAppsNestjs() {
  return (
    <>
      <p>
        The best way to integrate Compose is via a module that will contain all
        the Compose related code.
      </p>
      <p>
        Create a <code>compose</code> folder in your codebase, and within it
        create two files: <code>compose.module.ts</code> and{" "}
        <code>compose.service.ts</code>
      </p>
      <CodeBlock language="bash">
        {`mkdir -p src/compose
touch src/compose/compose.module.ts
touch src/compose/compose.service.ts`}
      </CodeBlock>
      <h4>
        <code>compose.service.ts</code>
      </h4>
      <p>
        Our service will contain the Compose client and starter apps. As you
        build more apps, you can break them out into separate files. Creating a
        service will also allow you to easily import other services and use them
        in your Compose apps.
      </p>
      <CodeBlock language="typescript">{ComposeStarterCodeNestjs}</CodeBlock>
      <ReplaceApiKey />
      <h4>
        <code>compose.module.ts</code>
      </h4>
      <p>Our module will register the service.</p>
      <CodeBlock language="typescript">{`import { Module } from '@nestjs/common';
import { ComposeService } from './compose.service';

@Module({
  providers: [ComposeService],
  exports: [ComposeService],
})
export class ComposeModule {}
`}</CodeBlock>
      <h4>
        <code>src/app.module.ts</code>
      </h4>
      <p>Register the Compose module in your main file.</p>
      <CodeBlock language="typescript">{`import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ComposeModule } from './compose/compose.module';

@Module({
  // highlight-next-line
  imports: [ComposeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
`}</CodeBlock>
    </>
  );
}

function StarterAppsPython() {
  return (
    <>
      <CodeBlock language="python">{ComposeStarterAppsPython}</CodeBlock>
    </>
  );
}

function StarterCodePython() {
  return (
    <>
      <CodeBlock language="python">{ComposeStarterCodePython}</CodeBlock>
    </>
  );
}

function RunAppNode({ command = "npm run dev" }: { command?: string }) {
  return (
    <>
      <p>
        Run your app's normal dev command. Compose will automatically connect in
        the background.
      </p>
      <CodeBlock language="bash">
        {command} # replace with the actual command
      </CodeBlock>
      <p>
        You should see your apps come online in the{" "}
        <a href="https://app.composehq.com/home" target="_blank">
          Compose web dashboard
        </a>
        .
      </p>
    </>
  );
}

function NextStepsNode() {
  return (
    <>
      <ol>
        <li>
          Replace <code>dbUsers</code> with real database calls.
        </li>
        <li>
          Go through Compose's <a href="/get-started/concepts">core concepts</a>{" "}
          to quickly become productive with the SDK.
        </li>
        <li>
          Join the{" "}
          <a href="https://discord.gg/82rk2N8ZE6" target="_blank">
            Discord community
          </a>{" "}
          to ask questions and talk to the core team.
        </li>
      </ol>
    </>
  );
}

function NextStepsPython() {
  return (
    <>
      <ol>
        <li>
          Replace <code>db_users</code> with real database calls.
        </li>
        <li>
          Go through Compose's <a href="/get-started/concepts">core concepts</a>{" "}
          to quickly become productive with the SDK.
        </li>
        <li>
          Join the{" "}
          <a href="https://discord.gg/82rk2N8ZE6" target="_blank">
            Discord community
          </a>{" "}
          to ask questions and talk to the core team.
        </li>
      </ol>
    </>
  );
}

function ConnectClientDetailsPython({ framework }: { framework: string }) {
  return (
    <Details
      summary={
        <summary>
          <span>
            <code>connect_async</code> vs <code>connect</code>
          </span>
        </summary>
      }
    >
      <p>
        The Python SDK provides two methods to connect to the Compose web
        dashboard: <code>connect_async</code> and <code>connect</code>.
      </p>
      <ul>
        <li>
          <code>connect_async</code> starts the WebSocket connection in a
          separate background thread. Use this in environments like {framework}{" "}
          where blocking the main thread would interfere with request handling.
        </li>
        <li>
          <code>connect</code> runs the connection in the main thread. Use this
          when running a standalone Python process dedicated to Compose apps.
        </li>
      </ul>
    </Details>
  );
}
export {
  Introduction,
  InstallSdkNode,
  InstallSdkPython,
  AddStarterAppsNode,
  StarterAppsPython,
  StarterCodePython,
  RunAppNode,
  NextStepsNode,
  NextStepsPython,
  ReplaceApiKey,
  ConnectClientDetailsPython,
  AddStarterAppsNestjs,
};
