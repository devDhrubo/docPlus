import { FaStar } from "react-icons/fa";

const Testimonial = () => {
    return (
        <div className="px-[140px] mt-20">
            <div className="space-y-3 mb-5">
                <button className="btn btn-outline rounded-full">Testimonial</button>
                <h2 className="text-4xl font-semibold text-[#020043]">What they say about us</h2>
            </div>
            <div className="flex items-center gap-5">
                <div className="card bg-[#FFFFF5] w-[370px] h-64 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-xl">Expertise and Compassion Combined</h2>
                        <p className="text-[12px]">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                        <div className="card-actions mt-2">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/FwjNrSP/fa33964c6065acf9d0348d177213ec83.jpg" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-sm"> <span className="font-bold">Sarah D,</span>IT Professional</h2>
                                <div className="flex gap-1 text-[#FFC637]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFFFF5] w-[370px] h-64 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-xl">Life-Saving Care, Life-Changing Experience</h2>
                        <p className="text-[12px]">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                        <div className="card-actions mt-2">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/RBySdLQ/2c7d99fe281ecd3bcd65ab915bac6dd5.jpg" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-sm"> <span className="font-bold">Michael R,</span>Business Executive</h2>
                                <div className="flex gap-1 text-[#FFC637]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card bg-[#FFFFF5] w-[370px] h-64 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-xl">A Partner in Health and
                            Wellness</h2>
                        <p className="text-[12px]">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                        <div className="card-actions mt-2">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/BV9B4w7/205e460b479e2e5b48aec07710c08d50.png" />
                                </div>
                            </div>
                            <div>
                                <h2 className="text-sm"> <span className="font-bold">David S,</span>Lawyer</h2>
                                <div className="flex gap-1 text-[#FFC637]">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;