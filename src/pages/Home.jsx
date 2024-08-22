import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Gallary from "../components/Gallary";
import Hero from "../components/Hero";
import ServiceArea from "../components/ServiceArea";
import Services from "../components/Services";
import Vision from "../components/Vision";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Transform your outdoor space with Regenerative Landscape and Garden—Charlotte's premier landscaping experts. Stunning, sustainable, superior."
        />
        <title>Regenerative Landscape and Garden</title>
      </Helmet>
      <Hero />
      <Services />
      <Banner />
      <Vision />
      <Gallary />
      <Testimonials />
      <ServiceArea />
    </div>
  );
};

export default Home;
