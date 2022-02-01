import React from 'react';

const JobDescription = (props) => {
    return <>
        <div className='space-y-2'>
            
            <div dangerouslySetInnerHTML={{ __html: props.description }} />
        </div>
    </>;
};

export default JobDescription;
