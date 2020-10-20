import React, { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { JobsContextProvider } from "./context/JobsContext";
import Load from "./component/Load";
import { SearchContextProvider } from "./context/SearchContext";

const Description = lazy(() => import("./root/Description"));
const SearchJobs = lazy(() => import("./root/SearchJobs"));

function App() {
  return (
    <Router>
      <div className="App">
        <h1>
          GitHub <span>Jobs</span>
        </h1>
        <Switch>
          <SearchContextProvider>
            <JobsContextProvider>
              <Suspense fallback={<Load />}>
                <Route exact path="/" component={SearchJobs} />
                <Route path="/:id" component={Description} />
              </Suspense>
            </JobsContextProvider>
          </SearchContextProvider>
        </Switch>
        <footer>
          <address>
            <a
              title="Profile Dev Challenges"
              className="link-profil-challenge"
              href="https://devchallenges.io/profile/VEssyN5qg9wX5gRmbjfz"
              target="blank"
            >
              FlorianMilcendeau@devchallenges.io
            </a>
          </address>
        </footer>
      </div>
    </Router>
  );
}

export default App;
