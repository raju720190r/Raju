import React from 'react';

const Category = ({category}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-xl p-5 rounded text-center">
                <figure><img className='h-40 rounded-lg w-52 mb-5' src={category.img} alt="img" /></figure>
                <div className="card-body">
                    <h2 className="font-bold text-xl pb-3">{category.title}</h2>
                    <h5 className='pb-3'>{category.jobs}</h5>
                </div>
            </div>
        </div>
    );
};

export default Category;