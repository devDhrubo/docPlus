import { MdArrowOutward } from "react-icons/md";
import logo from '../../../assets/logo light.png';

const CTA = () => {
    return (
        <div className="px-[140px] mt-20">
            <div
                className="hero h-[470px] rounded-3xl"
                style={{
                    backgroundImage: "url(https://i.ibb.co/yFW1L5H/Rectangle-32.png)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content lg:flex-row-reverse">
                    <div>
                        <img src={logo} className="-mt-48" alt="" />
                    </div>
                    <div>
                        <h1 className="mb-5 text-4xl font-bold w-[800px] text-white">Get Your <br />
                            First Appointment <br />
                            at 50% Off!</h1>
                        <div className="flex gap-3">
                            <a className="btn rounded-xl bg-[#FFC637] outline-none">Appointment<MdArrowOutward /></a>
                            <a className="btn btn-outline rounded-xl border-white text-white">Learn more<MdArrowOutward /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;