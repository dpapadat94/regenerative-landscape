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
          content="Transform your outdoor space with Regenerative Landscape and Garden, North Carolina’s premier experts in sustainable landscaping, personalized garden design, and professional garden care services."
        />
        <meta name="google-site-verification" content="Kf8kfrrBuPspakauekp_fFFQyuHcRC3RgpQnipsOC0Q" />
        <title>Regenerative Landscape and Garden: North Carolina's Top Garden Experts</title>
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
