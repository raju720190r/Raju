import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between p-5 items-center bg-slate-700 text-white mb-5'>
            <div>
                <h2 className='text-5xl'>BD.Jobs</h2>
            </div>
            <div className=''>
                <Link className='mr-5' to="/">Home</Link>
                <Link className='mr-5' to="/statistics">Statistics</Link>
                <Link className='mr-5' to="/applied">Applied</Link>
                <Link className='mr-5' to="/blogs">Blogs</Link>

            </div>
            <div>
                <button className='btn bg-purple-500 p-2 text-white rounded-lg'>Apply Now</button>
            </div>
        </nav>
    );
};

export default Header;