import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://placeimg.com/400/260/arch" className="w-full lg:w-1/2 rounded-lg shadow-2xl" alt='...' />
                <div className='w-full lg:w-1/2'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Download Resume</button>
                    <button className="btn btn-primary ml-2">Only See Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;