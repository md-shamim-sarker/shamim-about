import React from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const sendMessage = (event) => {
        event.preventDefault();
        const form = event.target;
        emailjs.sendForm(process.env.REACT_APP_service_id, process.env.REACT_APP_template_id, form, process.env.REACT_APP_public_key)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.reset();
    };

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
                        <form onSubmit={sendMessage} className="card-body">
                            <div className="form-control">
                                <input name='name' type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <input name='email' type="text" placeholder="Your Email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <textarea name='message' type="text" placeholder="Your Message" className="input input-bordered h-28 p-3" />
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;