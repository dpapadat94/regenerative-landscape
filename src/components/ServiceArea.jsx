import servicePic from "../assets/servicePic.png";
import servicePicWebp from "../assets/servicePic.webp";

import { IoLocationOutline } from "react-icons/io5";

const ServiceArea = () => {
  return (
    <div
      id="servicearea"
      className="flex  justify-center w-full h-fit p-2 sm:p-6 "
    >
      <div className="flex flex-col w-[100%] sm:w-[90%] md:w-[50%] gap-12  ">
        <h2 className="text-2xl font-bold text-center">
          Serving Charlotte and the Surrounding Areas
        </h2>
        <div className="flex justify-evenly ">
          <div className=" text-xl sm:text-2xl flex flex-col gap-4 font-light">
            <p className="flex items-center gap-1">
              <IoLocationOutline color="green" />
              North Charlotte
            </p>
            <p className="flex items-center gap-1">
              {" "}
              <IoLocationOutline color="green" />
              Davidson
            </p>
            <p className="flex items-center gap-1">
              {" "}
              <IoLocationOutline color="green" />
              Huntersville
            </p>
            <p className="flex items-center gap-1">
              <IoLocationOutline color="green" />
              Concord
            </p>
            <p className="flex items-center gap-1">
              <IoLocationOutline color="green " />
              Uptown
            </p>
            <p className="flex items-center gap-1">
              {" "}
              <IoLocationOutline color="green" />
              Plaza Midwood
            </p>
          </div>
          <div className="flex flex-col gap-4  text-xl sm:text-2xl font-light">
            <p className="flex items-center gap-1">
              <IoLocationOutline color="green" />
              Southend
            </p>
            <p className="flex items-center gap-1">
              <IoLocationOutline color="green" />
              Belmont
            </p>
            <p className="flex items-center gap-1">
              <IoLocationOutline color="green" />
              East Charlotte
            </p>
            <p className="flex items-center gap-1">
              <IoLocationOutline color="green" />
              Matthews
            </p>
            <p className="flex items-center gap-1">
              <IoLocationOutline color="green" />
              Pineville
            </p>
            <p className="flex items-center gap-1">
              <IoLocationOutline color="green" />
              Ballantyne
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex w-[50%] justify-center p-5">
        <picture>
          <source srcSet={servicePicWebp} type="image/webp" />
          <img src={servicePic} className="w-[100%] rounded-md" alt="" />
        </picture>
      </div>
    </div>
  );
};
export default ServiceArea;
