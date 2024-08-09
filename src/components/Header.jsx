import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import logoGreen from "../assets/logoWordsGreen.png";
import logo from "../assets/logoWordsWhite.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [nav, setNav] = useState(false);
  const [sticky, setSticky] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    console.log("Nav toggled", !nav);
  };

  const handleScroll = () => {
    if (window.scrollY > 55) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full min-h-[50px] flex justify-between items-center z-10  bg-transparent  ${
        sticky
          ? "fixed top-0 left-0 z-10 text-gray-500 shadow-md bg-white"
          : "absolute top-13 text-white"
      }`}
    >
      <Link to="/">
        <img src={sticky ? logoGreen : logo} alt="" className="ml-4 w-44" />
      </Link>

      <ul className="hidden lg:flex">
        <li>
          <Link className="p-3 cursor-pointer hover:text-green-500 " to="/">
            Home
          </Link>
        </li>
        <li className={sticky ? "border-l-[1px]" : ""}>
          <Link
            className="cursor-pointer p-3 hover:text-green-500"
            to="lawncare/regular"
          >
            Lawn Care
          </Link>
        </li>
        <li className={sticky ? "border-l-[1px]" : ""}>
          <Link
            className="p-3 cursor-pointer hover:text-green-500"
            to="garden/residential"
          >
            Garden Care
          </Link>
        </li>
        <li className={sticky ? "border-l-[1px]" : ""}>
          <Link className="p-3 cursor-pointer hover:text-green-500" to="about">
            About Us
          </Link>
        </li>
        <li className={sticky ? "border-l-[1px]" : ""}>
          <Link
            className=" p-3 cursor-pointer hover:text-green-500"
            to="contact"
          >
            Contact
          </Link>
        </li>
      </ul>
      <Link
        to="estimate"
        className={`hidden lg:flex  cursor-pointer text-center  hover:bg-green-500 text-white font-base hover:text-white py-2 px-2 mt-2 mx-4 border  hover:border-transparent rounded w-fit ${
          sticky
            ? "bg-green-500 border-non hover:bg-green-800"
            : "bg-transparent border-white"
        }`}
      >
        Request Free Estimate
      </Link>

      {/* mobile menu */}
      <div onClick={handleNav} className="lg:hidden z-10">
        <FaBars
          size={20}
          className={`mr-4 cursor-pointer ${
            sticky ? "text-gray-500" : "text-white"
          }`}
        />
      </div>
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden lg:hidden ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "fixed top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li>
            <Link className="p-3 cursor-pointer text-xl" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNav}
              className="p-3 text-xl"
              to="/lawncare/regular"
            >
              Lawn Care
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNav}
              className="p-3 text-xl"
              to="garden/residential"
            >
              Garden Care
            </Link>
          </li>

          <li>
            <Link onClick={handleNav} className="p-3 text-xl" to="about">
              About Us
            </Link>
          </li>

          <li>
            <Link onClick={handleNav} className="p-3 text-xl" to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
