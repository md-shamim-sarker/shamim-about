import React from 'react';
import dress from '../../../assets/dress.jpg';
import construction from '../../../assets/construction.jpg';
import schooling from '../../../assets/schooling.jpg';

const Projects = () => {
    return (
        <div id='projects'>
            <h2 className='text-4xl font-bold text-center my-16'>My Projects</h2>
            <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={dress} alt="..." className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Dress Recycle</h2>
                        <h3>Key Features:</h3>
                        <ul className='list-disc ml-6'>
                            <li>Four types of user role (Super Admin, Admin, Seller and Buyer).</li>
                            <li>Dashboard and payment gateway.</li>
                            <li>Use JWT to ensure security.</li>
                        </ul>
                        <p><strong>Technologies:</strong> React, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Stripe, Firebase, Vercel etc.</p>
                        <div className="card-actions justify-end">
                            <a href={"https://dress-recycle.web.app/"} className="w-full btn btn-primary btn-sm">Live Link</a>
                            <a href={"https://github.com/md-shamim-sarker/dress-recycle-client"} className="w-full btn btn-primary btn-sm">Client Side Code</a>
                            <a href={"https://github.com/md-shamim-sarker/dress-recycle-server"} className="w-full btn btn-primary btn-sm">Server Side Code</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={construction} alt="..." className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Creative-Construction </h2>
                        <h3>Key Features:</h3>
                        <ul className='list-disc ml-6'>
                            <li>Register with email-password or social account.</li>
                            <li>User can submit feedback.</li>
                            <li>Users can update and delete his/her feedback.</li>
                        </ul>
                        <p><strong>Technologies:</strong> React, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, Vercel etc.</p>
                        <div className="card-actions justify-end">
                            <a href={"https://creative-construction-3a070.web.app/"} className="w-full btn btn-primary btn-sm">Live Link</a>
                            <a href={"https://github.com/md-shamim-sarker/creative-construction-client"} className="w-full btn btn-primary btn-sm">Client Side Code</a>
                            <a href={"https://github.com/md-shamim-sarker/creative-construction-server"} className="w-full btn btn-primary btn-sm">Server Side Code</a>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={schooling} alt="..." className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Schooling.com</h2>
                        <h3>Key Features:</h3>
                        <ul className='list-disc ml-6'>
                            <li>Users can register with an email-password or with a social account.</li>
                            <li>Users can see service details with downloadable links.</li>
                            <li>Users can select a service for checkout.</li>
                        </ul>
                        <p><strong>Technologies:</strong> React, Tailwind CSS, Rsuite, Node.js, Express.js, Firebase, Vercel etc.</p>
                        <div className="card-actions justify-end">
                            <a href={"https://schooling-12a8c.web.app/"} className="w-full btn btn-primary btn-sm">Live Link</a>
                            <a href={"https://github.com/md-shamim-sarker/schooling-client"} className="w-full btn btn-primary btn-sm">Client Side Code</a>
                            <a href={"https://github.com/md-shamim-sarker/schooling-server"} className="w-full btn btn-primary btn-sm">Server Side Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;