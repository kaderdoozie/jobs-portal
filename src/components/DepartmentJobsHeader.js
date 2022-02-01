import React, { useEffect, useState } from 'react';
import JobInDepartment from './JobInDepartment';
import env from '../utils/env.json';

const DepartmentJobsHeader = () => {

  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    await fetch(`${env.base_url_local}/api/v1/jobs`)
      .then((response) => response.json())
      .then((json) => {
        if (json) {
          setLoading(false);
          setJobData(json);
        }
        else {
          setLoading(false);
          console.log('department not found')
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error)
      });
  }


  useEffect(() => {
    getData();
  }, []);


  return <>
    <div className="py-2"><div className="font-bold text-3xl text-gray-600 mb-3">Development</div>
      <div className="h-1 w-20 bg-blue-500"></div></div>

    <div id="job-list" className='space-y-5'>

      {loading ? <div className='text-xl'>Loading...</div> : jobData && jobData.filter((item) => item.department.title=="Development").map((job,keyId) => <JobInDepartment key={keyId} job={job}/>)}

    </div>
  </>;
};

export default DepartmentJobsHeader;
