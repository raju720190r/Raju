import React, { useEffect, useState } from 'react';

const Banner = () => {
    return (
        <div className='mb-5 flex'>
            <div className="banner-text w-1/2">
              <h2 className='text-5xl font-bold tracking-wide pb-4'>One Step <br></br> Closer To Your</h2>
              <h2 className='text-5xl font-bold text-purple-500 tracking-wide pb-4'>Dream Job</h2>
              <p className='pb-3' >xplore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
              <button className='btn bg-purple-500 p-2 text-white rounded-lg'>Get Started</button>

            </div>
            <div className="banner-img w-1/2">
               <img className='w-100 h-80 mx-auto' src="https://i.ibb.co/YcZjybh/man.png" alt="Images" />
            </div>
        </div>
    );
};

export default Banner;