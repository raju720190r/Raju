import React, { useEffect, useState } from 'react';

import { AreaChart, Area, XAxis, YAxis,Tooltip} from 'recharts';


const Statistics = () => {
    const data = [
        {
            name: 'Assignment-1',
            uv:60
            
        },
        {
            name: 'Assignment-2',
            uv: 60
            
        },
        {
            name: 'Assignment-3',
            uv: 60,
            
        },
        {
            name: 'Assignment-4',
            uv: 45
            
        },
        {
            name: 'Assignment-5',
            uv: 46
        },
        {
            name: 'Assignment-6',
            uv: 58
        },
        {
            name: 'Assignment-7',
            uv: 60
        },
    ];


    return (
        <div className='container'>
            <div className='mb-5'><h2 className='text-center text-5xl font-bold'>Assignment Analytics</h2></div>
        <AreaChart 
               width={1200}
                height={400}
                data={data}
                margin={{
                    top: 50,
                    right: 30,
                    left: 30,
                    bottom: 0,
                }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                <Area type="category" dataKey="uv" stroke="red" fill="#a065f7" />
            </AreaChart>
        
        </div>
    );
};

export default Statistics;