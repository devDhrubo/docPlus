import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo light.png';
const Footer = () => {
    return (
        <div>
            <footer className="footer bg-[#020043] text-white p-10 px-20 mt-20">
                <aside className='w-[300px]'>
                    <img src={logo} className='mb-2' alt="" />
                    <p>
                        123 Main Street Anytown,
                        USA Postal Code: 12345
                    </p>
                    <p>
                        Support: support@oyolloo.com
                        (Available : 10:00am to 07:00pm)
                                            </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Home</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Success Page</a>
                    <a className="link link-hover">Terms and Conditions</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Scheduling</a>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Patient Portal</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <div className='flex gap-3 text-white text-xl'>
                        <FaFacebook/>
                        <FaLinkedin/>
                        <FaInstagram/>
                        <FaYoutube/>
                    </div>
                    <p className='mt-4'>@docplus 2024</p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;