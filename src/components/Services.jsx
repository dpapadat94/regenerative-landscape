// image imports
import IndividualServices from "./IndividualServices";
import LawnCarePackages from "./LawnCarePackages";
import GardenPackages from "./GardenPackages";

const Services = () => {
  return (
    <div className="w-fit h-fit pt-5  flex flex-col gap-1 justify-center items-center bg-[#fff]  mx-auto px-2 ">
      <h2 className=" text-3xl sm:text-4xl font-bold text-gray-600 p-3 justify-center border-b-4 border-green-500 ">
        Landscaping Services
      </h2>
      <IndividualServices />

      <h2 className="text-gray-600 text-3xl sm:text-4xl font-bold  pb-3 border-b-4 border-green-500  ">
        Lawn Care Packages
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 ">
        <LawnCarePackages />
      </div>
      <h2 className="text-gray-600 text-3xl  sm:text-4xl font-bold pb-3 border-b-4 border-green-500  ">
        Gardening Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
        <GardenPackages />
      </div>
    </div>
  );
};

export default Services;
