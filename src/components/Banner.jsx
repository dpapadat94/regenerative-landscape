import mower from "../assets/mower.png";
import eco from "../assets/eco.png";

const Banner = () => {
  return (
    <div className="bg-green-500 p-3 flex items-center bg-banner bg-no-repeat bg-cover mb-10 justify-evenly">
      <img src={mower} alt="" className="w-[200px] hidden sm:flex" />
      <div className="flex flex-col justify-start items-start  gap-2">
        <h2 className="text-2xl md:text-4xl font-bold text-white lg:w-[80%] md:w-[100%] ">
          We are <span className="text-green-400">100%</span> Electric!
        </h2>

        <p className="text-xl sm:text-2xl font-light text-white">
          All of our equipment is fully electric for decreased noise and
          pollution.{" "}
        </p>
      </div>
      <img src={eco} alt="" className="w-[200px] hidden md:flex" />
    </div>
  );
};

export default Banner;
