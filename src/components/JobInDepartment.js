import React from 'react';
import { Link } from 'react-router-dom';
import { LocationMarkerIcon, OfficeBuildingIcon } from '@heroicons/react/solid';

const JobInDepartment = (props) => {

    const applyForJob = () => {

    }

    return <>
        <div id="job-wrapper">
            {/* <div className="font-bold text-lg text-gray-600">
                Quality Assurance Analyst
            </div> */}
            <div className="font-bold text-lg text-gray-600">
                {props.job.title}
            </div>

            <div className="flex justify-between">
                <div id="details" className='flex space-x-3'>
                    <div id="designation">
                        <div className="flex space-x-1">
                            <div id="designation-icon">
                                <OfficeBuildingIcon className='h-5 w-5 text-gray-500' />
                            </div>
                            <div id="designation-name" className="text-sm">
                                {props.job.department.title}
                            </div>
                        </div>
                    </div>

                    <div id="location">
                        <div className="flex space-x-1">
                            <div id="designation-icon">
                                <LocationMarkerIcon className='h-5 w-5 text-gray-500' />
                            </div>
                            <div id="designation-name" className="text-sm">
                                {props.job.location.title}
                            </div>
                        </div>
                    </div>

                    <div id="type">
                        <div className="w-15 px-2 py-1 bg-gray-400 text-white font-semibold rounded text-xs uppercase">
                            {props.job.type}
                        </div>
                    </div>
                </div>

                <div id="action" className='flex space-x-3 mr-7'>
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = `${props.job.applyUrl}`;
                    }} className="rounded-full text-blue-500 bg-white border border-blue-500 font-semibold text-sm py-2 px-4">Apply</button>

                    <Link to={`/job-details/${props.job.id}`} className="font-semibold text-gray-600 py-2 px-4">View</Link>

                </div>
            </div>

        </div>
    </>;
};

export default JobInDepartment;
