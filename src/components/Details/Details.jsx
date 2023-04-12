import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';

const Details = () => {

//    const [singleData, setSingleData] =useState([]);
//    useEffect(()=>{
//     fetch('../../../public/Jobs.json')
//     .then((rep)=>rep.json())
//     .then((data)=>setSingleData(data))

//    },[]);
//    const idFin= singleData[0]
//    const {} = newSingleData;

   
   
   
   
   
   
   
   
   
   
   
    // const jobDetails=useLoaderData();
    // let{detailsId}= useParams();
    // const SingleJObDetails = jobDetails.find(job=>job.id===detailsId)
    // console.log(SingleJObDetails)








// const navigate = useNavigate();
    // const handleDetails = (id)=>{
    //        localStorage.setItem("jobId", id)  
    //        navigate("/applied")
    // } 

    // const [job, setJob] = useState([]);
    // // const [applied,setApplied]= useState([]);
    // const JobId = localStorage?.getItem("jobId")
    // useEffect(() => {
    //     fetch('Jobs.json')
    //         .then(res => res.json())
    //         .then(data => setJob(data?.find(item => item?.id == JobId)))
    // }, [JobId]);
    return (
        <div className='flex'>
            
            {/* <div className='w-3/4 p-5'>
                <div>
                <h2 className='font-bold'>{job.id}</h2>
        
                <p>{job.description}</p>
                
                </div>
                <div>
                <h2 className='font-bold'>{job.responsibilityTitle}</h2>
                <p>{job.responsibility}</p>
                </div>
                <div>
                <h2 className='font-bold'>{job.requirementsTitle}</h2>
                <p>{job.requirements}</p>
                </div>
                <div>
                <h2 className='font-bold'>{job.experienceTitle}</h2>
                <p>{job.experience}</p>
                </div>

            </div>
            <div className='bg-slate-300 w-1/4 p-5 rounded'>
                <div>
                    <h2 className='pb-2 text-xl font-bold'>Job Details</h2>
                    <p className='pb-2'>$ Salary : {job.salary}</p>
                    <p className='pb-2'>Job Title :{job.title}</p>
                </div>
                <div>
                    <h2 className='pb-2 text-xl font-bold'>Contact Information</h2>
                    <p className='pb-2'>Phone :{job.phone}</p>
                    <p className='pb-2'>Email :{job.email}</p>
                    <p className='pb-2'>Address:{job.address}</p>
                </div>
                <div className='text-center'>
                <button className='btn bg-purple-500 p-2 text-white rounded-lg mr-5' onClick={()=>handleDetails(job.id)}>Apply Now</button>
                </div>

            </div> */}
        </div>
    );
};

export default Details;