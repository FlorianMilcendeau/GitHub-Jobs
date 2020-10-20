import React, { createContext, useState } from "react";

export const JobsContext = createContext({
  setJobs: () => {},
  jobs: [],
});

export const JobsContextProvider = ({ children }) => {
  const setJobs = (jobs) => {
    setAllJobs({ ...allJobs, jobs: jobs });
  };

  const initJobs = {
    setJobs: setJobs,
    jobs: [],
  };

  const [allJobs, setAllJobs] = useState(initJobs);
  return <JobsContext.Provider value={allJobs}>{children}</JobsContext.Provider>;
};
