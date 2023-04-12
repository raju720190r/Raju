import { setItem } from 'localforage';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Details from '../Details/Details';

const Job = ({job}) => {
    return (

        <div>
            <div className="card w-96 bg-base-100 shadow-xl p-5 rounded">
                <figure><img className='h-40' src={job.brand} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl pb-3">{job.title}</h2>
                    <h5 className='pb-3'>{job.company}</h5>
                    <div className="card-actions justify-end pb-3">
                        <button className="border-2 pl-4 pr-4 pb-2 pt-2 rounded-lg border-indigo-600 mr-5">{job.remote}</button>
                        <button className="border-2 pl-4 pr-4 pb-2 pt-2 rounded-lg border-indigo-600 mr-5">{job.fulltime}</button>
                    </div>
                    <div className='flex pb-3'>
                        <p className='mr-5'>{job.address}</p>
                        <p>$ Salary :{job.salary}</p>
                    </div>
                </div>
                <button className='btn bg-purple-500 p-2 text-white rounded-lg'><Link to={`/details/${job.id}`}>View Details</Link></button>
            </div>
        </div>
    );
};

export default Job;