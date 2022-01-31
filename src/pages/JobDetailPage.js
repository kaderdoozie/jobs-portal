import React from 'react';
import JobDescription from '../components/JobDescription';
import JobDetailsHeader from '../components/JobDetailsHeader';

const JobDetailPage = () => {
    return <div id='job-details-page' className="p-5">
        <JobDetailsHeader />

        <hr className='py-5'/>
       
       <JobDescription />

    </div>;
};

export default JobDetailPage;
