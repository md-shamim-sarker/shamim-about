import React from 'react';
import {FaFacebook, FaGithub, FaLinkedin} from 'react-icons/fa';
import {Link} from 'react-scroll';

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <Link activeClass="active" to="home" spy={true} smooth={true} className="cursor-pointer hover:underline">Home</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} className="cursor-pointer hover:underline">Projects</Link>
                <Link activeClass="active" to="my-skills" spy={true} smooth={true} className="cursor-pointer hover:underline">My Skills</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} className="cursor-pointer hover:underline">Contact</Link>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <div className='flex gap-3'>
                        <a href="https://web.facebook.com/shamimspro" className='text-2xl hover:text-blue-600'><FaFacebook></FaFacebook></a>
                        <a href="https://www.linkedin.com/in/mdshamimsarker/" className='text-2xl hover:text-blue-600'><FaLinkedin></FaLinkedin></a>
                        <a href="https://github.com/md-shamim-sarker" className='text-2xl hover:text-blue-600'><FaGithub></FaGithub></a>
                    </div>
                </div>
            </div>
            <div>
                <p>Copyright © 2022 - All right reserved by Shamim Sarker</p>
            </div>
        </footer>
    );
};

export default Footer;