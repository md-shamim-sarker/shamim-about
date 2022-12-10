import React from 'react';

const Projects = () => {
    return (
        <div id='projects' className='h-screen'>
            <h2 className='text-4xl font-bold text-center my-16'>My Projects</h2>
            <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="..." className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Project Name</h2>
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 1</li>
                            <li>Feature 1</li>
                        </ul>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="w-full btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="..." className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Project Name</h2>
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 1</li>
                            <li>Feature 1</li>
                        </ul>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="w-full btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src="https://placeimg.com/400/225/arch" alt="..." className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Project Name</h2>
                        <h3>Key Features:</h3>
                        <ul>
                            <li>Feature 1</li>
                            <li>Feature 1</li>
                            <li>Feature 1</li>
                        </ul>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="w-full btn btn-primary">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;