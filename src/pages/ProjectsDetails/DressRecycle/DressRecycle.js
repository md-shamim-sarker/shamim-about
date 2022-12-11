import React from 'react';
import dress from '../../../assets/dress.jpg';
import dress1 from '../../../assets/dress1.jpg';
import dress2 from '../../../assets/dress2.jpg';
import dress3 from '../../../assets/dress3.jpg';
import dress4 from '../../../assets/dress4.jpg';
import dress5 from '../../../assets/dress5.jpg';
import dress6 from '../../../assets/dress6.jpg';
import dress7 from '../../../assets/dress7.jpg';
import dress8 from '../../../assets/dress8.jpg';
import dress9 from '../../../assets/dress9.jpg';
import dress10 from '../../../assets/dress10.jpg';

const DressRecycle = () => {
    return (
        <div className='mt-20'>
            <h2 className='text-5xl font-bold text-center'>Dress Recycle</h2>
            <div className='w-full lg:w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 px-2 py-16'>
                <img src={dress} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={dress1} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={dress2} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={dress3} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={dress4} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={dress5} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={dress6} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={dress7} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={dress8} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={dress9} alt=".." className='border border-blue-700 hover:scale-125' />
                <img src={dress10} alt=".." className='border border-blue-700 hover:scale-125' />
            </div>
            <div className='w-full lg:w-4/5 mx-auto px-2 mb-16'>
                <h2 className='text-xl'><strong>Project Name:</strong> Dress Recycle (Old Dress Selling Web Application)</h2>
                <h3><strong>Key Features:</strong></h3>
                <ul className='list-disc ml-6'>
                    <li>Four types of user role (Super Admin, Admin, Seller and Buyer).</li>
                    <li>Dashboard and payment gateway.</li>
                    <li>Use JWT to ensure security.</li>
                </ul>
                <p><strong>Technologies:</strong> React, Tailwind CSS, Node.js, Express.js, MongoDB, JWT, Stripe, Firebase, Vercel etc.</p>
                <div className="card-actions py-5">
                    <a href={"https://dress-recycle.web.app/"} className="btn btn-primary btn-sm">Live Link</a>
                    <a href={"https://github.com/md-shamim-sarker/dress-recycle-client"} className="btn btn-primary btn-sm">Client Side Code</a>
                    <a href={"https://github.com/md-shamim-sarker/dress-recycle-server"} className="btn btn-primary btn-sm">Server Side Code</a>
                </div>
            </div>
        </div>
    );
};

export default DressRecycle;