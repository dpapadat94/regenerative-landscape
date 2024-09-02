import { Helmet } from "react-helmet-async";
import logo from "../assets/logoTrans.png";
const About = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Discover the passion behind Regenerative Landscape and Garden—Charlotte's trusted landscaping team dedicated to excellence and sustainability."
        />

        <title>Learn More About Regenerative Landscape and Garden</title>
      </Helmet>
      <div className="w-full h-[80px] bg-green-950"></div>
      <div className="w-full h-fit sm:h-fit flex flex-col justify-center items-center bg-aboutbg bg-no-repeat bg-cover">
        <div className=" w-[90%] lg:w-[75%]  p-6 gap-8 flex flex-col justify-evenly items-center   ">
          <h2 className="text-5xl text-white font-bold">About Us</h2>
          <p className="text-white text-xl italic">A Message from Our Owner</p>
          <p className="text-white leading-8 ">
            &quot;I have been landscaping for four years, which stemmed from my
            love of gardening. As a personal gardener, I look for individuals
            who have a variety of outdoor plants and/or large gardens that they
            would like to have serviced year round. I am here to help those who
            do not want to have to think twice about how to care for a plant and
            want to enjoy their outdoor space, rather than work to maintain it.
            I have experience maintaining gardens, lawns, privacy hedges, and
            trees. Though, there is nothing I enjoy more than maintaining a
            vegetable garden throughout the year, so clients can enjoy fresh
            produce from their own backyard, no matter the season. I look
            forward to sharing my knowledge with my clients and educating them
            on how we can work with nature, rather than against it. Let&apos;s
            help the world, the pollinators, and the microbes in your soil, to
            improve the view you see everyday. &quot;
          </p>
          <img
            src={logo}
            className="w-[70%] lg:w-[40%]"
            alt="regenerative landscape and garden logo"
          />
        </div>
      </div>
    </>
  );
};

export default About;
