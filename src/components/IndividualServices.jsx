import plantIcon from "../assets/plantIcon.png";
import bushIcon from "../assets/bushIcon.png";
import transplantIcon from "../assets/transplantIcon.png";
import trimIcon from "../assets/trimIcon.png";
import junkIcon from "../assets/junkIcon.png";
import mulchIcon from "../assets/mulchIcon.png";
import pineIcon from "../assets/pineIcon.png";
import { FaPeopleGroup } from "react-icons/fa6";
import { Link } from "react-router-dom";

const IndividualServices = () => {
  return (
    <div className="flex flex-col items-center lg:items-start mt-3 mb-16 w-fit ">
      <h2 className="text-3xl mb-3  sm:pl-5 ">Individual Services</h2>
      <p className="font-extralight mb-5 pl-5">
        The following services are offered on an individual basis. For more
        information schedule a{" "}
        <span className="font-bold text-green-500">Free Estimate</span> today{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-center gap-y-3 gap-x-20 lg:gap-x-5">
        <li className="p-4 text-md min-w-[100%] flex items-center gap-2 shadow-md">
          <img src={plantIcon} className="w-7" alt="" />
          Plant Installations
        </li>
        <li className="p-4 text-md min-w-[100%] flex items-center gap-2 shadow-md">
          <img src={bushIcon} className="w-7" alt="" />
          Bush Removal
        </li>

        <li className="p-4 text-md min-w-[100%] flex items-center gap-2 shadow-md">
          <img src={transplantIcon} className="w-7" alt="" />
          Plant Transplanting
        </li>
        <li className="p-4 text-md min-w-[100%] flex items-center gap-2 shadow-md">
          <img src={trimIcon} className="w-7" alt="" />
          Bush Trimming
        </li>

        <li className="p-4 text-md min-w-[100%] flex items-center gap-2 shadow-md">
          <img src={junkIcon} className="w-7" alt="" />
          Debris and Junk Removal
        </li>
        <li className="p-4 text-md min-w-[100%] flex items-center gap-2 shadow-md">
          <img src={mulchIcon} className="w-7" alt="" />
          Mulch Installation
        </li>

        <li className="p-4 text-md min-w-[100%] flex items-center gap-2 shadow-md">
          <img src={pineIcon} className="w-7" alt="" />
          Pine Needle Installation
        </li>
        <Link
          to="estimate"
          className="p-4 text-md min-w-[100%] flex items-center gap-2 border-[2px] border-green-400 bg-white text-gray-700 font-bold shadow-md cursor-pointer"
        >
          <FaPeopleGroup className="w-7 text-green-400" />
          Schedule Today!
        </Link>
      </div>
    </div>
  );
};

export default IndividualServices;
{
  /*<div className="flex flex-wrap gap-2 w-full justify-evenly items-start ">
 <ul className="flex  flex-col gap-4">
<li className="p-4 w-64 text-md flex items-center gap-2 shadow-md">
  <img src={plantIcon} className="w-7" alt="" />
  Plant Installations
</li>
<li className="p-4 w-64 text-md flex items-center gap-2 shadow-md">
  <img src={bushIcon} className="w-7" alt="" />
  Bush Removale
</li>
</ul>
<ul className="flex flex-col gap-4">
<li className="p-4 w-64 text-md flex items-center gap-2 shadow-md">
  <img src={transplantIcon} className="w-7" alt="" />
  Plant Transplanting
</li>
<li className="p-4 w-64 text-md flex items-center gap-2 shadow-md">
  <img src={trimIcon} className="w-7" alt="" />
  Bush Trimming
</li>
</ul>
<ul className="flex flex-col gap-4">
<li className="p-4 w-64 text-md flex items-center gap-2 shadow-md">
  <img src={junkIcon} className="w-7" alt="" />
  Debris and Junk Removal
</li>
<li className="p-4 w-64 text-md flex items-center gap-2 shadow-md">
  <img src={mulchIcon} className="w-7" alt="" />
  Mulch Installation
</li>
</ul>
<ul className="flex flex-col gap-4">
<li className="p-4 w-64 text-md flex items-center gap-2 shadow-md">
  <img src={pineIcon} className="w-7" alt="" />
  Pine Needle Installation
</li>
<li className="p-4 w-64 text-md flex items-center gap-2 shadow-md">
  <img src={pineIcon} className="w-7" alt="" />
  Pine Needle Installation
</li>
</ul>
</div> */
}
