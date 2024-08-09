// Router import
import { Link } from "react-router-dom";
//image imports
import lawn from "../assets/Lawn.png";
import regularLawn from "../assets/regularLawn.png";
import hoa from "../assets/HOA.png";

const LawnCarePackages = () => {
  return (
    <>
      <div className="max-w-sm text-center bg-white pt-4 py-1 bg-#fff ">
        <Link to="/lawncare/regular">
          <h5 className=" text-xl pb-4 font-bold text-gray-600">
            <span className="">Regular </span>
            Weekly Lawn Mow
          </h5>
        </Link>
        <Link to="/lawncare/regular">
          <img className="" src={regularLawn} alt="" />
        </Link>
        <div className="p-5 inline-flex flex-col items-center ">
          <div className=" relative bottom-12 flex flex-col items-center bg-white shadow-md pt-3 pb-8 px-3">
            <p className="mb-3 font-normal text-gray-800 leading-7 ">
              Keep your lawn perfectly maintained and cared for with our Regular
              Weekly Mowing Package.
            </p>
            <p className="mb-5 font-light">
              Starting as low as{" "}
              <span className="text-green-500  text-xl ">$45</span> per week
            </p>

            <Link
              to="/lawncare/regular"
              className="px-4 py-4 text-md text-white bg-green-500 rounded-sm hover:bg-green-600 border-2 border-green-500 w-[80%]  "
            >
              View Package Details
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-sm text-center bg-white pt-4 py-1 bg-#fff ">
        <Link to="lawncare/premium">
          <h5 className=" text-xl pb-4 font-bold text-gray-600">
            <span className="text-green-400">Premium </span>
            Lawn Mow
          </h5>
        </Link>
        <Link to="lawncare/premium">
          <img className="" src={lawn} alt="" />
        </Link>
        <div className="p-5 inline-flex flex-col items-center ">
          <div className=" relative bottom-12 flex flex-col items-center bg-white shadow-md pt-3 pb-8 px-3">
            <p className="mb-3 font-normal text-gray-800 leading-7 ">
              Premium offers all the benefits of our Regular package, plus care
              for your plants & more.
            </p>
            <p className="mb-5 font-light">
              Starting as low as{" "}
              <span className="text-green-500  text-xl ">$70</span> per week
            </p>

            <Link
              to="lawncare/premium"
              className="px-4 py-4 text-md text-white bg-green-500 rounded-sm hover:bg-green-600 border-2 border-green-500 w-[80%]  "
            >
              View Package Details
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-sm text-center bg-white pt-4 py-1 bg-#fff ">
        <Link to="lawncare/hoa">
          <h5 className=" text-xl pb-4 font-bold text-gray-600">
            <span className=""></span>
            HOA Premium Lawncare
          </h5>
        </Link>
        <Link to="lawncare/hoa">
          <img className="" src={hoa} alt="" />
        </Link>
        <div className="p-5 inline-flex flex-col items-center ">
          <div className=" relative bottom-12 flex flex-col items-center bg-white shadow-md pt-3 pb-8 px-3">
            <p className="mb-3 font-normal text-gray-800 leading-7 ">
              Experience the same level of lawn and yard care that would be
              provided to an HOA community.
            </p>
            <p className="mb-5 font-light">
              Call for a free estimate
              <span className="text-green-500  text-xl "></span>
            </p>

            <Link
              to="lawncare/hoa"
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

export default LawnCarePackages;
