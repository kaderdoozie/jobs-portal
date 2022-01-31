import React from 'react';
import { LocationMarkerIcon, OfficeBuildingIcon } from '@heroicons/react/solid';

const JobDetailsHeader = () => {
    return <>
        <div id="header-section" className='flex-col space-y-5'>
            <div className="text-gray-800 font-bold">
                Development Department at Teknorix Goa
            </div>

            <div className="text-gray-800 text-3xl font-bold">
                React JS Developer/Sr. Developer
            </div>

            <div id="details" className='flex space-x-3'>
                <div id="designation">
                    <div className="flex space-x-1">
                        <div id="designation-icon">
                            <OfficeBuildingIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <div id="designation-name" className="text-sm">
                            Quality Assurance
                        </div>
                    </div>
                </div>

                <div id="location">
                    <div className="flex space-x-1">
                        <div id="designation-icon">
                            <LocationMarkerIcon className='h-5 w-5 text-gray-500' />
                        </div>
                        <div id="designation-name" className="text-sm">
                            Verna, Goa
                        </div>
                    </div>
                </div>

                <div id="type">
                    <div className="w-15 px-2 py-1 bg-gray-400 text-white font-semibold rounded text-xs">
                        FULL TIME
                    </div>
                </div>
            </div>

            <div id="apply">
                <button className="rounded-full text-white bg-blue-500 border-blue-500 font-semibold text-sm py-2 px-10 my-5">Apply</button>
            </div>

        </div>
    </>;
};

export default JobDetailsHeader;
