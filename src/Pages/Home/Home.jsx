import FAQ from "./HomeItem/FAQ";
import MainHome from "./HomeItem/MainHome";
import Mission from "./HomeItem/Mission";
import Services from "./HomeItem/Services";
import Testimonial from "./HomeItem/Testimonial";

const Home = () => {
    return (
        <div>
            <MainHome />
            <Mission />
            <Services />
            <Testimonial />
            <FAQ/>
        </div>
    );
};

export default Home;