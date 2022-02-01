import React, { useEffect, useState } from 'react';
import JobDescription from '../components/JobDescription';
import JobDetailsHeader from '../components/JobDetailsHeader';
import env from '../utils/env.json';
import { useParams } from 'react-router-dom';

const JobDetailPage = () => {

    const { id } = useParams();
    const [jobData, setJobData] = useState(null);
    const [loading, setLoading] = useState(false);

    const getData = async () => {
      setLoading(true);
      await fetch(`${env.base_url_local}/api/v1/jobs/${id}`)
        .then((response) => response.json())
        .then((json) => {
          if (json) {
            setLoading(false);
            console.log(json,'json')
            setJobData(json);
          }
          else {
            console.log('department not found')
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error(error)
          setLoading(false);
        });
    }
  
  
    useEffect(() => {
      getData();
    }, []);

  
    return( <div id='job-details-page' className="p-5">
        {loading ? <div className='text-xl'>Loading...</div> : jobData && <JobDetailsHeader designation={jobData.title} department={jobData.department.title} location={jobData.location.title} type={jobData.type}/>}

        <hr className='py-5'/>
       
       {loading ? <div className='text-xl'>Loading...</div> : jobData  && <JobDescription description={jobData.description} />}

    </div>
    )
};

export default JobDetailPage;
