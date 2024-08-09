//icon imports
import { FaInstagram, FaPhoneAlt } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="flex bg=[#f3f3f3]  justify-between items-center px-2 md:px-10 h-9 ">
      <div className="flex items-center px-3 h-full border-x-[1px] ">
        <FaPhoneAlt size={15} className=" mr-2  text-gray-500" />
        <p className="text-sm text-gray-400">980-579-6001</p>
      </div>
      <div className="flex h-full">
        <a
          target="_blank"
          href="https://www.instagram.com/regenerativelandscapeclt/"
          className="flex items-center gap-1 px-3  border-x-[1px] "
        >
          <FaInstagram size={20} className="text-gray-500 h-full" />
          <p className="hidden md:flex text-gray-500 font-extralight text-sm">
            Follow us on instagram
          </p>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
