import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Load from './component/Load';

import { JobsContextProvider } from './context/JobsContext';
import { SearchContextProvider } from './context/SearchContext';
import { FilterContextProvider } from './context/FullTimeContext';
import { LocationContextProvider } from './context/LocationContext';

import './App.css';

const Description = lazy(() => import('./root/Description'));
const SearchJobs = lazy(() => import('./root/SearchJobs'));

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>
          GitHub <span>Jobs</span>
        </h1>
        <Switch>
          <SearchContextProvider>
            <LocationContextProvider>
              <JobsContextProvider>
                <FilterContextProvider>
                  <Suspense fallback={<Load />}>
                    <Route exact path='/' component={SearchJobs} />
                    <Route path='/:id' component={Description} />
                  </Suspense>
                </FilterContextProvider>
              </JobsContextProvider>
            </LocationContextProvider>
          </SearchContextProvider>
        </Switch>
        <footer>
          <address>
            <a
              title='Profile Dev Challenges'
              className='link-profil-challenge'
              href='https://devchallenges.io/profile/VEssyN5qg9wX5gRmbjfz'
              target='blank'>
              FlorianMilcendeau@devchallenges.io
            </a>
          </address>
        </footer>
      </div>
    </Router>
  );
}

export default App;
