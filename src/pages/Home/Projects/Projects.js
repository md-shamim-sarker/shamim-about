import React from 'react';
import dress from '../../../assets/dress.jpg';
import construction from '../../../assets/construction.jpg';
import schooling from '../../../assets/schooling.jpg';
import {Link} from 'react-router-dom';

const Projects = () => {
    return (
        <div id='projects'>
            <h2 className='text-4xl font-bold text-center my-10 pt-20'>My Projects</h2>
            <div className='w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={dress} alt="..." className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Dress Recycle</h2>
                        <p>Four types of user role (Super Admin, Admin, Seller and Buyer). Dashboard and payment gateway. Use JWT to ensure security.</p>
                        <div className="card-actions justify-end">
                            <Link to={"/dress-recycle"} className="w-full btn btn-primary btn-sm">Project Details</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={construction} alt="..." className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Creative-Construction </h2>
                        <p>Register with email-password or social account. User can submit feedback. Users can update and delete his/her feedback.</p>
                        <div className="card-actions justify-end">
                            <Link to={"/construction"} className="w-full btn btn-primary btn-sm">Project Details</Link>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={schooling} alt="..." className='w-full' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Schooling.com</h2>
                        <p>Users can register with an email-password or with a social account. Users can see service details with downloadable links. Users can select a service for checkout.</p>
                        <div className="card-actions justify-end">
                            <Link to={"/schooling"} className="w-full btn btn-primary btn-sm">Project Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;