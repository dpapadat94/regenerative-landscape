//Router imports
import { Link } from "react-router-dom";
//image imports
import cover from "../assets/c2.png";
import hotel from "../assets/hotel.png";
import design from "../assets/design.png";

const GardenPackages = () => {
  return (
    <>
      <div className="max-w-sm text-center bg-white pt-4 py-1 bg-#fff ">
        <Link to="garden/residential">
          <h5 className=" text-xl pb-4 font-bold text-gray-600">
            <span className="">Full </span>
            Residential Garden Service
          </h5>
        </Link>
        <Link to="garden/residential">
          <img className="" src={cover} alt="" />
        </Link>
        <div className="p-5 inline-flex flex-col items-center ">
          <div className=" relative bottom-12 flex flex-col items-center bg-white shadow-md pt-3 pb-8 px-3">
            <p className="mb-3 font-normal text-gray-800 leading-7 ">
              Personal Gardener service. Our team will spend 2-3 hours per week
              caring for your garden.
            </p>
            <p className="mb-5 font-light">
              Schedule a <span className="text-green-500  ">Free Estimate</span>{" "}
            </p>

            <Link
              to="garden/residential"
              className="px-4 py-4 text-md text-white bg-green-500 rounded-sm hover:bg-green-600 border-2 border-green-500 w-[80%]  "
            >
              View Package Details
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm text-center bg-white pt-4 py-1 bg-#fff ">
        <Link to="garden/commercial">
          <h5 className=" text-xl pb-4 font-bold text-gray-600">
            <span className="text-green-400"> </span>
            Commercial Garden/Plant Care
          </h5>
        </Link>
        <Link to="garden/commercial">
          <img className="" src={hotel} alt="" />
        </Link>
        <div className="p-5 inline-flex flex-col items-center ">
          <div className=" relative bottom-12 flex flex-col items-center bg-white shadow-md pt-3 pb-8 px-3">
            <p className="mb-3 font-normal text-gray-800 leading-7 ">
              Plant care designed for businesses that will make a lasting
              impression on clients, employees, and visitors.
            </p>
            <p className="mb-5 font-light">
              Schedule a <span className="text-green-500  ">Free Estimate</span>{" "}
            </p>

            <Link
              to="garden/commercial"
              className="px-4 py-4 text-md text-white bg-green-500 rounded-sm hover:bg-green-600 border-2 border-green-500 w-[80%]  "
            >
              View Package Details
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-sm text-center bg-white pt-4 py-1 bg-#fff ">
        <Link to="garden/design">
          <h5 className=" text-xl pb-4 font-bold text-gray-600">
            Landscape Design Services
          </h5>
        </Link>
        <Link to="garden/design">
          <img className="" src={design} alt="" />
        </Link>
        <div className="p-5 inline-flex flex-col items-center ">
          <div className=" relative bottom-12 flex flex-col items-center bg-white shadow-md pt-3 pb-8 px-3">
            <p className="mb-3 font-normal text-gray-800 leading-7 ">
              Let our team transform your outdoor space with our expert
              landscape design services.
            </p>
            <p className="mb-5 font-light">
              As Low as <span className="text-green-500   ">$100</span> for
              Design
            </p>
            <Link
              to="garden/design"
              className="px-4 py-4 text-md text-white bg-green-500 rounded-sm hover:bg-green-600 border-2 border-green-500 w-[80%]  "
            >
              View Package Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default GardenPackages;
