import React, { useEffect, useState } from 'react';
import JobInDepartment from './JobInDepartment';
import env from '../utils/env.json';

const DepartmentJobsHeader = (props) => {

  const [jobData, setJobData] = useState(null);

  const getData = async () => {
    await fetch(`${env.base_url_local}/api/v1/jobs`)
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          setJobData(json);
        }
        else {
          console.log('department not found')
        }
      })
      .catch((error) => {
        console.error(error)
      });
  }


  useEffect(() => {
    getData();
  }, []);

  // if (jobData !== null) {
  //   var developmentJobs = jobData.filter((item) => item.department.title == "Development");
  //   console.log(developmentJobs, 'devjobs')
  // }

  return <>
    <div className="py-2"><div className="font-bold text-3xl text-gray-600 mb-3">Development</div>
      <div className="h-1 w-20 bg-blue-500"></div></div>

    <div id="job-list" className='space-y-3'>

      {jobData && jobData.filter((item) => item.department.title=="Development").map((job,keyId) => <JobInDepartment key={keyId} job={job}/>)}



    </div>
  </>;
};

export default DepartmentJobsHeader;
