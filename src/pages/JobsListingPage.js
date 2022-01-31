import React from 'react';
import JobFiltersBox from '../components/JobFiltersBox';
import JobsSection from '../components/JobsSection';

const JobsListingPage = () => {
  return <div id="job-listing-page" className="p-5">
      <JobFiltersBox />
      <JobsSection />
  </div>;
};

export default JobsListingPage;
