import Banner from "../components/Banner";
import Gallary from "../components/Gallary";
import Hero from "../components/Hero";
import ServiceArea from "../components/ServiceArea";
import Services from "../components/Services";
import Vision from "../components/Vision";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Banner />
      <Vision />
      <Gallary />
      <ServiceArea />
    </div>
  );
};

export default Home;
