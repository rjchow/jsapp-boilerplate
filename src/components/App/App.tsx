import { hot } from "react-hot-loader";

import * as React from "react";
import { Link, Route, Switch } from "react-router-dom";

import { config } from "@cfg";
import { Echo } from "@src/components/Echo";
import { CounterContainer } from "@src/containers/Counter";
import { ErrorPage } from "../ErrorPage";

// Let webpack instead of ts handle these imports
const hello = require("./hello.jpg");
const styles = require("./app.scss");

// Include global CSS and variables once
require("@src/styles/root.scss");

// Legacy CSS is supported
require("./legacy.css");

// This is a nice way to define your custom presentational components
// that just pass down props.
export interface IBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

// Example inline functional React component
const Box: React.SFC<IBoxProps> = props => (
  <div className={styles.box} {...props}>
    {props.children}
  </div>
);

class InnerApp extends React.Component<{}, {}> {
  public render() {
    const appPage = ( // Example usage of legacy CSS class name mixed with CSS modules
      <div className={`app ${styles.grid}`}>
        <div className={styles.row}>
          <h1 className={styles.title}>jsapp-boilerplate</h1>
          <div>
            <a href="https://github.com/gyng/jsapp-boilerplate">GitHub</a>
            &nbsp;&middot;&nbsp;
            <span>
              Find me in{" "}
              <a href="https://github.com/gyng/jsapp-boilerplate/blob/master/src/components/App/index.tsx">
                <code>src/components/App/index.tsx</code>
              </a>
            </span>
          </div>
        </div>

        {/* React style prop is still available */}
        <Box className={styles.box} style={{ alignSelf: "flex-start" }}>
          {/* Example usage of switch for routing */}
          <Link to="./counter">
            Link to /counter. Click to show counter. Back/Forward buttons and
            page refresh work.
          </Link>
        </Box>

        <Box>
          <div>
            {/* Styling with CSS modules */}
            <img className={styles.robot} src={hello} alt="Cute robot?" />

            {/* Using other components */}
            <Echo text="Hello, world!" />
            <Link to="/no-page-lives-here">Link to example error page</Link>
          </div>
        </Box>

        {/* Example DOM for nested CSS */}
        <Box>
          <div
            className={styles.themedDiv}
            style={{
              border: "solid 1px grey"
            }}
          >
            This div is themed using PostCSS and React's style prop
          </div>
        </Box>

        <Box>
          <div style={{ alignItems: "flex-start" }}>
            <div style={{ marginBottom: "var(--m-m)" }}>
              Current configuration
            </div>
            <pre>{JSON.stringify(config, null, 2)}</pre>
            <p>
              Configure in{" "}
              <a href="https://github.com/gyng/jsapp-boilerplate/blob/master/config/configValues.js">
                <code>config/configValues.js</code>
              </a>
            </p>
          </div>
        </Box>
      </div>
    );

    // This is your main App router
    // Typically for more complex apps I create a Routes object in src/routes that looks something like
    //
    // `export const AppRoutes = { base: () => "/"", counters: (id) => `/counters/${id}` }`
    //
    // And then use it for linking `<Link to={AppRoutes.counters(123)}>Counter 123</Link>`
    return (
      <Switch>
        {/* Quickstart for URL matches

        // Define your Match props
        export interface IFooMatch {
          id: string;
        }

        // Reference that type in RouteComponentProps when creating your component
        export class Foo extends React.Component<
          IFooProps & Partial<RouteComponentProps<IFooMatch>>
        > { ... }

        // Then add this route into your router. :id will be passed to the Foo component.
        <Route path="/counters/:id" component={CountersPage} /> */}
        <Route exact path="/" render={() => appPage} />
        <Route path="/counter" component={CounterContainer} />
        <Route
          path="/"
          render={() => <ErrorPage code="404" message="Page not found" />}
        />
      </Switch>
    );
  }
}

export const App =
  process.env.NODE_ENV === "development" ? hot(module)(InnerApp) : InnerApp;
