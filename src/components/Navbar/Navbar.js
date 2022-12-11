import React from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from 'react-scroll';
import logo from '../../assets/logo.png';
import shamim from '../../assets/shamim.jpg';

const Navbar = () => {
    const menuItems = <>
        <li>
            <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
            <Link activeClass="active" to="about" spy={true} smooth={true}>About</Link>
        </li>
        <li>
            <Link activeClass="active" to="projects" spy={true} smooth={true}>Projects</Link>
        </li>
        <li>
            <Link activeClass="active" to="my-skills" spy={true} smooth={true}>My Skills</Link>
        </li>
        <li>
            <NavLink to={"/blog"}>Blog</NavLink>
        </li>
        <li>
            <Link activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link>
        </li>
    </>;

    return (
        <div className="navbar bg-base-200 fixed z-50 top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img src={logo} alt="..." className='w-12 h-12' />
                    <h2 className='text-4xl text-primary font-bold'>SHAMIM</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <img src={shamim} alt="..." className='w-12 h-12 rounded-full border border-primary' />
            </div>
        </div>
    );
};

export default Navbar;