import React, { useEffect, useState } from 'react';
import DepartmentJobsHeader from './DepartmentJobsHeader';
import JobInDepartment from './JobInDepartment';
import env from '../utils/env.json';

const DepartmentJobs = () => {




    return <div>
        <div id="header" className="py-5">

            {/* {jobData && jobData.filter((item) => item.department.title=="Development").map((item,keyId) => <DepartmentJobsHeader key={keyId} title={item.department.title} item={item}/>)} */}
            <DepartmentJobsHeader />
            
        </div>

        <div id="job-list" className='space-y-3'>

            <JobInDepartment />

            <JobInDepartment />

        </div>
    </div>;
};

export default DepartmentJobs;
