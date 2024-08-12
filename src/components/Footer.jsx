import { Link } from "react-router-dom";
import logoWhite from "../assets/logoWordsWhite.png";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-fit bg-green-950 border-t-2  ">
      <footer className=" shadow  ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-col gap-2">
              <p className="text-gray-300">
                <span className="font-bold">Phone:</span> 980-579-6001
              </p>
              <div className="flex justify-start items-start gap-1">
                <a href="https://www.instagram.com/regenerativelandscapeclt/">
                  <p className="text-gray-300">
                    {" "}
                    <span className="font-bold">Follow us: </span>
                    Instagram
                  </p>
                </a>
                <a href="https://www.instagram.com/regenerativelandscapeclt/">
                  <FaInstagram size={20} color="white" />
                </a>
              </div>
            </div>
            <img
              src={logoWhite}
              alt="regenerative landscape and garden logo"
              className="hidden lg:flex w-52"
            />

            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 ">
              <li>
                <Link to="/" className="hover:underline me-4 md:me-6">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="lawncare/regular"
                  className="hover:underline me-4 md:me-6"
                >
                  Lawn Care
                </Link>
              </li>
              <li>
                <Link to="contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
          <div className="flex justify-center items-center gap-3">
            <h2 className="block text-xl text-white sm:text-center font-light">
              Get Started Today
            </h2>
            <Link
              to="estimate"
              className="cursor-pointer text-center bg-green-500 hover:bg-green-500 text-white font-base hover:text-white py-2 px-2  border border-green-500 hover:border-transparent rounded w-fit "
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
