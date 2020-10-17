import React from "react";
import "./App.css";
import SearchJobs from "./root/SearchJobs";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Description from "./root/Description";
import { allJobs, jobsContext } from "./context/JobsContext";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>
          GitHub <span>Jobs</span>
        </h1>
        <Switch>
          <jobsContext.Provider value={allJobs}>
            <Route exact path="/" component={SearchJobs} />
            <Route path="/:id" component={Description} />
          </jobsContext.Provider>
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
