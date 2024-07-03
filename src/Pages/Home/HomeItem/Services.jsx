import { MdArrowOutward } from "react-icons/md";
import service1 from '../../../assets/service1.png';
import service2 from '../../../assets/service2.png';
import service3 from '../../../assets/service3.png';
const Services = () => {
    return (
        <div className="grid grid-cols-2 mt-32 px-[140px] gap-10">
            <div className="space-y-5">
                <button className="btn btn-outline rounded-full">Service</button>
                <h2 className="text-4xl font-semibold">Empowering Health, <br /> Enriching Lives</h2>
                <p className="text-[16px]">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.
                </p>
                <a className="btn rounded-xl bg-[#FFC637] outline-none">Appointment<MdArrowOutward /></a>
            </div>
            <div>
                <div className="relative">
                    <div>
                        <img src={service1} alt="Mission" className="w-[520px] rounded-xl" />
                    </div>

                    <div className="bg-[#343268] image-full w-96 shadow-xl rounded-2xl text-white absolute bottom-5 left-5 opacity-80">
                        <div>
                            <div className="card-body">
                                <div>
                                    <h2 className="card-title text-2xl">Advanced Technology</h2>
                                    <div className="flex items-end gap-5">
                                        <p className="text-gray-300 text-[16px]">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                                        <a className="btn rounded-full bg-[#FFC637] outline-none text-white opacity-100"><MdArrowOutward /></a>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <div>
                        <img src={service2} alt="Mission" className="w-[520px] rounded-xl" />
                    </div>

                    <div className="bg-[#343268] image-full w-96 shadow-xl rounded-2xl text-white absolute bottom-5 left-5 opacity-80">
                        <div>
                            <div className="card-body">
                                <div>
                                    <h2 className="card-title text-2xl">Online Doctor Meet</h2>
                                    <div className="flex items-end gap-5">
                                        <p className="text-gray-300 text-[16px]">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                                        <a className="btn rounded-full bg-[#FFC637] outline-none text-white opacity-100"><MdArrowOutward /></a>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <div>
                        <img src={service3} alt="Mission" className="w-[520px] rounded-xl" />
                    </div>

                    <div className="bg-[#343268] image-full w-96 shadow-xl rounded-2xl text-white absolute bottom-5 left-5 opacity-80">
                        <div>
                            <div className="card-body">
                                <div>
                                    <h2 className="card-title text-2xl">Consultancy your health</h2>
                                    <div className="flex items-end gap-5">
                                        <p className="text-gray-300 text-[16px]">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                                        <a className="btn rounded-full bg-[#FFC637] outline-none text-white opacity-100"><MdArrowOutward /></a>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;