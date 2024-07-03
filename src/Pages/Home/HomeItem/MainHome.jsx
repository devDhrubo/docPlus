import analytics from '../../../assets/analytics.png';
import contract from '../../../assets/contract.png';
import star from '../../../assets/star.png';
import people from '../../../assets/people.png';
import coin from '../../../assets/coin.png';
import video from '../../../assets/video.png';
const MainHome = () => {
    return (
        <div className="px-[140px]">
            <div
                className="hero h-[470px] rounded-3xl mt-6"
                style={{
                    backgroundImage: "url(https://i.ibb.co/sHzs0vv/home.png)",
                }}>
                <div className="hero-overlay bg-opacity-40"></div>
            </div>

            <div className='absolute text-center ml-72 text-[#020043]'>
                <h2 className='text-[48px] font-semibold mt-10'>Comprehensive Care <br /> for Every Patient</h2>
            </div>

            <div className='flex gap-4 relative mt-20'>
                {/* card 01 */}
                <div className="card bg-base-100 w-[216px] h[312px] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-[40px] mt-5">90%</h2>
                        <p>Patient satisfaction rate, reflecting our commitment.</p>
                    </div>
                    <figure>
                        <img
                            src={analytics}
                            className="rounded-xl w-[130px] mb-4" />
                    </figure>
                </div>

                {/* card 02 */}
                <div className="card bg-base-100 w-[216px] h-[250px] shadow-xl mt-28">
                    <div className="card-body">
                        <h2 className="card-title text-[40px] mt-5">500+</h2>
                        <p>Board-certified doctors</p>
                    </div>
                    <figure>
                        <img
                            src={contract}
                            className="rounded-xl w-[77px] h-[77px] mb-4 ml-20" />
                    </figure>
                </div>

                {/* card 03 */}
                <div className="card bg-base-100 w-[216px] h-[200px] shadow-xl mt-40">
                    <div className="card-body">
                        <div className='flex items-center gap-2'><h2 className="card-title text-[40px] mt-5">4.8+</h2><img className='w-10 h-10 mt-3' src={star} /></div>
                        <p>Over 20,000 Patient</p>
                        <img src={people} className='w-20' alt="" />
                    </div>
                    <figure>
                        <img
                            src={contract}
                            className="rounded-xl w-[77px] h-[77px] mb-4 ml-20" />
                    </figure>
                </div>

                {/* card 04 */}
                <div className="card bg-base-100 w-[216px] h-[250px] shadow-xl mt-28">
                    <div className="card-body">
                        <h2 className="card-title text-[40px] mt-5">$5000+</h2>
                        <p>Money spend for poor patient</p>
                    </div>
                    <figure>
                        <img
                            src={coin}
                            className="rounded-xl w-[77px] h-[77px] mb-4 ml-20" />
                    </figure>
                </div>

                {/* card 05 */}
                <div className="card bg-base-100 w-[216px] h[312px] shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-[40px] mt-5">50+</h2>
                        <p>Money spend for poor patient</p>
                    </div>
                    <figure>
                        <img
                            src={video}
                            className="rounded-xl w-[130px] mb-4" />
                    </figure>
                </div>

            </div>
        </div>
    );
};

export default MainHome;