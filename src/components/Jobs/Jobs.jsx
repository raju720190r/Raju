import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from './Job';
import Category from './Category';

const Jobs = () => {
    const [categorys,setCategorys]= useState([]);
    useEffect(()=>{
        fetch('category.json')
        .then(res=>res.json())
        .then(data=>setCategorys(data))

    },[]);
    const jobsData = useLoaderData();
    return (
        <div className='mb-5'>
            <div className="job-title pb-3">
                <h2 className='text-3xl font-bold text-center pb-2'>Job Category List</h2>
                <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid md:grid-cols-4 sm:grid-cols-2 justify-items-center mb-5'>
                    {
                        categorys.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
            <div className=" justify-items-center">
                <div className="job-title pb-5">
                    <h2 className='text-3xl font-bold text-center pb-3'>Featured Jobs</h2>
                    <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className='grid md:grid-cols-2 justify-items-center'>
                    {
                        jobsData.map(job => <Job
                            key={job.id}
                            job={job}
                        ></Job>)
                    }
                </div>
            </div>


        </div>
    );
};

export default Jobs;