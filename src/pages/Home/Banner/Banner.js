import React from 'react';
import shamim from "../../../assets/shamim.png";
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';

const Banner = () => {
    return (
        <div id='home' className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse gap-x-32 py-10">
                <img src={shamim} className="w-full lg:w-1/3 rounded-lg shadow-2xl" alt='...' />
                <div className='w-full lg:w-1/2'>
                    <h1 className="text-3xl lg:text-5xl font-bold mt-4">Hi, I'm Shamim</h1>
                    <p className="py-6">I always try to keep myself updated with new technologies. <br /> Upcoming few years, I want to be more comfortable and more <br /> skilled in the tech world.</p>
                    <div className='flex gap-3 mb-5'>
                        <a href="/" className='text-2xl hover:text-blue-600'><FaFacebook></FaFacebook></a>
                        <a href="/" className='text-2xl hover:text-blue-600'><FaLinkedin></FaLinkedin></a>
                        <a href="/" className='text-2xl hover:text-blue-600'><FaGithub></FaGithub></a>
                    </div>
                    <a href="./Md_Shamim_Sarker.pdf" download className="btn btn-primary">Download My Resume</a>
                    <a href="./Md_Shamim_Sarker.pdf" className="btn btn-primary ml-3" target='_blank'>See My Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;