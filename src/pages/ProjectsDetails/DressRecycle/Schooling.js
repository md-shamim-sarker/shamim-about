import React from 'react';
import schooling from '../../../assets/schooling.jpg';
import schooling1 from '../../../assets/schooling1.jpg';
import schooling2 from '../../../assets/schooling2.jpg';
import schooling3 from '../../../assets/schooling3.jpg';
import schooling4 from '../../../assets/schooling4.jpg';
import schooling5 from '../../../assets/schooling5.jpg';

const Schooling = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-5xl font-bold text-center'>Schooling.com</h2>
            <div className='w-full lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-2 py-16'>
                <img src={schooling} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={schooling1} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={schooling2} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={schooling3} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={schooling4} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={schooling5} alt=".." className='border border-blue-700 hover:scale-125' />
            </div>
            <div className='w-full lg:w-4/5 mx-auto px-2 mb-16'>
                <h2 className='text-xl'><strong>Project Name:</strong> Schooling.com (Educational Web Application) </h2>
                <h3><strong>Key Features:</strong></h3>
                <ul className='list-disc ml-6'>
                    <li>Users can register with an email-password or with a social account. </li>
                    <li>Users can see service details with downloadable links. </li>
                    <li>Users can select a service for checkout.
                    </li>
                </ul>
                <p><strong>Technologies:</strong> React, Tailwind CSS, Rsuite, Node.js, Express.js, Firebase, Vercel etc.</p>
                <div className="card-actions py-5">
                    <a href={"https://schooling-12a8c.web.app/"} className="btn btn-primary btn-sm">Live Link</a>
                    <a href={"https://github.com/md-shamim-sarker/schooling-client"} className="btn btn-primary btn-sm">Client Side Code</a>
                    <a href={"https://github.com/md-shamim-sarker/schooling-server"} className="btn btn-primary btn-sm">Server Side Code</a>
                </div>
            </div>
        </div>
    );
};

export default Schooling;