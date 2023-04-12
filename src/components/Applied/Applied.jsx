import { getItem } from 'localforage';
import React, { useEffect, useState } from 'react';

const Applied = () => {
    // const [job, setJob] = useState([]);
    // // const [applied,setApplied]= useState([]);
    // const JobId = localStorage?.getItem("jobId")
    // useEffect(() => {
    //     fetch('Jobs.json')
    //         .then(res => res.json())
    //         .then(data => setJob(data?.find(item => item?.id == JobId)))

    // }, [JobId]);



    // useEffect(()=>{  
    //     const applied = job?.find(item=>item?.id==JobId)
    //     // console.log(applied)
    // },[])
    return (
        <div>
            {/* <h2 className='text-5xl text-center'>Job Details</h2>
            <div className='flex bg-slate-300 items-center'>
                <div className='p-3 w-1/6'>
                    <img className='rounded-lg w-40' src={job.brand} alt="" />
                </div>
                <div className='flex w-3/4 justify-between items-center'>
                    <div>
                        <h2 className='text-2xl font-bold mb-3  pb'>{job.title}</h2>
                        <h5>{job.company}</h5>
                        <div className='flex'>
                            <p className='pr-5'>{job.address}</p>
                            <p>$ Salary : {job.salary}</p>
                         </div>
                    </div>
                    <div>
                    <button className='btn bg-purple-500 p-2 text-white rounded-lg mr-5'>View Details</button>
                    </div>
                </div>

            </div> */}
        </div>
    );
};

export default Applied;