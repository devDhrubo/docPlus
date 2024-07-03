import { MdArrowOutward } from 'react-icons/md';
import logo from '../assets/logo dark.png';
const Header = () => {
    const navItem = <>
        <li><a>Home</a></li>
        <li><a>Services</a></li>
        <li><a>Blog</a></li>
        <li><a>About Us</a></li>
    </>
    return (
        <div className="navbar bg-base-100 px-[140px] pt-[27px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItem}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl"><img className='w-[124px] h-[33px]' src={logo} alt="Logo" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-outline rounded-xl">Appointment<MdArrowOutward/></a>
            </div>
        </div>
    );
};

export default Header;