import React from 'react';
import shamim from '../../../assets/shamim.jpg';

const About = () => {
    return (
        <div id='about' className='w-full flex flex-col items-center'>
            <h2 className='text-4xl font-bold text-center my-10 pt-10'>About Me</h2>
            <div className='w-2/4 mx-auto text-lg flex flex-col items-center gap-5'>
                <img src={shamim} alt="..." className='w-52 h-52 rounded-full' />
                <p className='text-center'>I am Md. Shamim Sarker. I am from Bangladesh. I have completed my graduation in Statistics from Begum Rokeya University, Rangpur. I am comfortable to develop any MERN application.</p>
            </div>
        </div>
    );
};

export default About;