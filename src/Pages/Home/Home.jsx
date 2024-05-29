import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import Stats from "./Stats/Stats";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
    return (
        <div className="px-4">
            <Banner></Banner>
            <Services/>
            <Stats/>
            <Testimonial></Testimonial>
            <Contact/>
        </div>
    );
};

export default Home;