import React from 'react';
import emailjs from '@emailjs/browser';
import {toast} from 'react-hot-toast';

const Contact = () => {
    const sendMessage = (event) => {
        event.preventDefault();
        const form = event.target;
        emailjs.sendForm(process.env.REACT_APP_service_id, process.env.REACT_APP_template_id, form, process.env.REACT_APP_public_key)
            .then((result) => {
                console.log(result.text);
                toast.success('Successfully Message Send!');
                form.reset();
            }, (error) => {
                console.log(error.text);
                toast.error("Message Not Send!");
            });
    };

    return (
        <div id='contact' className='my-20'>
            <h2 className='text-4xl font-bold text-center my-10'>Contact Me</h2>
            <div className="hero">
                <div className="w-4/5 hero-content flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 text-center lg:text-left">
                        <h1 className="text-5xl font-bold">My Contact Info</h1>
                        <p className="py-6">
                            <strong>Address: </strong> Dhaka, Bangladesh <br />
                            <strong>Phone: </strong> +8801723795366 <br />
                            <strong>Email: </strong> shamim.sarker.2023@gmail.com <br />
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 card flex-shrink-0 shadow-2xl bg-base-100">
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