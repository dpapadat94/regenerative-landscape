//image imports
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import cover from "../assets/cover.png";

const Hero = () => {
  return (
    <div className="w-full h-[80vh]  ">
      <img src={cover} alt="" className="w-full	h-full object-cover" />
      <div className="max-w-[1140px] mx-auto">
        <div className="absolute top-[20%] w-full md:top-[30%] lg:max-w-[80%]  xl:max-w-[65%] flex flex-col gap-5 text-white p-4">
          <h1 className="font-bold text-3xl sm:text-5xl mb-3 pl-3 border-l-2 sm:border-l-8 border-green-500">
            Charlotte&apos;s Premiere Landscape and Garden Experts
          </h1>
          <p className=" sm:text-lg sm:flex sm:leading-7">
            At Regenerative Landscape and Garden, we specialize in turning your
            outdoor spaces into stunning and sustainable environments. Call
            today to schedule a free estimate and let our team bring your vision
            to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              to="estimate"
              className="cursor-pointer text-center bg-green-500 hover:bg-green-500 text-white font-base hover:text-white py-2 px-2 mt-2 border border-green-500 hover:border-transparent rounded w-full sm:w-[12em] "
            >
              Request Free Estimate
            </Link>
            <Scroll
              to="gallery"
              smooth={true}
              duration={300}
              className="cursor-pointer text-center bg-transparent hover:bg-green-500 text-white font-bold hover:text-white py-2 px-2 mt-2 border-green-500 border-2  rounded w-full sm:w-[12em] "
            >
              View Gallery
            </Scroll>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
