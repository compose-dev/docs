import CodeBlock from "@theme/CodeBlock";
import Heading from "@theme/Heading";
import Details from "@theme/Details";

function Introduction({ framework }: { framework: string }) {
  return (
    <p>
      Create internal apps directly in your {framework} codebase with the
      Compose SDK. This guide will get you started with two starter apps in ~3
      minutes.
    </p>
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
      <p>Use your package manager to install the Compose SDK.</p>
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
      <p>Use your package manager to install the Compose SDK.</p>
      <CodeBlock language="bash">{installSdkPythonNode}</CodeBlock>
    </>
  );
}

const createComposeFileNode = `# From your project root
touch src/compose.ts
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
      <CodeBlock language="bash">{createComposeFileNode}</CodeBlock>
      <p>Then add the following starter code into the file:</p>
      <CodeBlock language="typescript">{composeStarterCodeNode}</CodeBlock>
      <ReplaceApiKey />
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

function RunAppNode() {
  return (
    <>
      <p>
        Run your app's normal dev command. Compose will automatically connect in
        the background.
      </p>
      <CodeBlock language="bash">npm run dev</CodeBlock>
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
};
