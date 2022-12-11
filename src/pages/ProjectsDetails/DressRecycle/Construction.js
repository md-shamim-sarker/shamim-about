import React from 'react';
import construction from '../../../assets/construction.jpg';
import construction1 from '../../../assets/construction1.jpg';
import construction2 from '../../../assets/construction2.jpg';
import construction3 from '../../../assets/construction3.jpg';
import construction4 from '../../../assets/construction4.jpg';
import construction5 from '../../../assets/construction5.jpg';
import photoHandler from '../../../utilities/photoHandler';

const Construction = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-5xl font-bold text-center'>Creative Construction</h2>
            <div className='w-full lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-2 py-16'>
                {photoHandler(construction)}
                {photoHandler(construction1)}
                {photoHandler(construction2)}
                {photoHandler(construction3)}
                {photoHandler(construction4)}
                {photoHandler(construction5)}
            </div>
            <div className='w-full lg:w-4/5 mx-auto px-2 mb-16'>
                <h2 className='text-xl'><strong>Project Name:</strong> Creative-Construction (Personal Business Site)</h2>
                <h3><strong>Key Features:</strong></h3>
                <ul className='list-disc ml-6'>
                    <li>Users can register with an email-password or with a social account. </li>
                    <li>User can add services and can submit feedback which is sorted by descending order by date. </li>
                    <li>Users can update and delete his/her feedback.
                    </li>
                </ul>
                <p><strong>Technologies:</strong> React, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, Vercel etc.</p>
                <div className="card-actions py-5">

                    <a href={"https://creative-construction-3a070.web.app/"} className="btn btn-primary btn-sm">Live Link</a>
                    <a href={"https://github.com/md-shamim-sarker/creative-construction-client"} className="btn btn-primary btn-sm">Client Side Code</a>
                    <a href={"https://github.com/md-shamim-sarker/creative-construction-server"} className="btn btn-primary btn-sm">Server Side Code</a>

                </div>
            </div>
        </div>
    );
};

export default Construction;