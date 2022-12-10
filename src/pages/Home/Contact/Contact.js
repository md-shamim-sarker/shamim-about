import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-16'>Contact Me</h2>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left w-1/2">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <input type="text" placeholder="Your Email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <textarea type="text" placeholder="Your Message" className="input input-bordered h-28 p-3" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;