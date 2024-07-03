import { MdArrowOutward } from "react-icons/md";
import mission from '../../../assets/mission.png';
const Mission = () => {
    return (
        <div>
            <div className="flex items-center gap-28 px-[140px] mt-20">
                <div className="w-1/2 space-y-3">
                    <button className="btn btn-outline rounded-full">Who we are</button>
                    <h2 className="text-4xl font-semibold">We Help To Get <br /> Solutions</h2>
                    <p className="text-[16px]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
                    </p>
                    <a className="btn rounded-xl bg-[#FFC637] outline-none">Learn more<MdArrowOutward /></a>
                </div>
                <div className="relative">
                    <div>
                        <img src={mission} alt="Mission" className="w-[560px]" />
                    </div>

                    <div className="bg-[#343268] image-full w-96 shadow-xl rounded-2xl text-white absolute -bottom-8 -left-20">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">Our mission is simple</h2>
                            <p className="text-gray-300 text-[16px]">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;