import React, { useState, useEffect } from 'react';
import env from '../utils/env.json';

const JobFiltersBox = () => {

    const [filterBoxData, setFilterBoxData] = useState(null);

    const getData = async () => {
        await fetch(`${env.base_url_local}/api/v1/jobs`)
            .then((response) => response.json())
            .then((json) => {
                if (json) {
                    setFilterBoxData(json);
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


    return <>
        <div id="box-wrapper" className="bg-gray-100 p-7">
            <div className="grid grid-cols-6 gap-5">
                <div className="col-span-6 sm:col-span-6">
                    <input type="text" required className="bg-white w-full border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-400 text-gray-600 dark:text-gray-400" placeholder="Search for Job" />

                </div>

                <div className="col-span-6 sm:col-span-2">
                    <select name="" id="" className="bg-white w-full border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400">
                        <option value="">Department</option>
                        {filterBoxData && filterBoxData.map((dept,keyId)=><option key={keyId} value="{dept.department.id}">{dept.department.title}</option>)}
                    </select>

                </div>

                <div className="col-span-6 sm:col-span-2">
                    <select name="" id="" className="bg-white w-full border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400">
                        <option value="">Location</option>
                        {filterBoxData && filterBoxData.map((loc,keyId)=><option key={keyId} value="{loc.department.id}">{loc.location.title}</option>)}
                    </select>
                </div>

                <div className="col-span-6 sm:col-span-2">
                    <select name="" id="" className="bg-white w-full border border-gray-300  pl-3 py-3 shadow-sm rounded text-sm focus:outline-none focus:border-indigo-700 bg-transparent placeholder-gray-500 text-gray-600 dark:text-gray-400">
                        <option value="">Function</option>
                        {filterBoxData && filterBoxData.map((func,keyId)=><option key={keyId} value="{func.department.id}">{func.function.title}</option>)}
                    </select>
                </div>
            </div>
        </div>
    </>;
};

export default JobFiltersBox;
