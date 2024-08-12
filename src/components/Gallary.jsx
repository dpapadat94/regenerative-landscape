import mailbox from "../assets/mailbox.png";
import frontChange from "../assets/frontChange.png";
import removal from "../assets/removal.png";
import mulchBA from "../assets/mulchBA.png";
import backyard from "../assets/backyard.png";
import garden3 from "../assets/garden3.png";

//icons
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";

const slides = [
  {
    url: frontChange,
  },
  {
    url: mailbox,
  },
  {
    url: removal,
  },
  {
    url: mulchBA,
  },
  {
    url: backyard,
  },
  {
    url: garden3,
  },
];

const Gallary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //code looks more complicated becasue we have to account for the when we click the next slide button on the last image
  const nextImage = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  //code looks more complicated becasue we have to account for the when we click the prev slide button on the 1st image
  const prevImage = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div
        id="gallery"
        className="hidden md:flex w-full h-full shadow-md  m-auto"
      >
        <div className="w-[100%] h-[780px] m-auto py-16 px-16 text-gray-700 relative text-center">
          <h1 className="text-4xl mb-5 font-bold m-x-auto">See Our Work</h1>
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-[70%] lg:h-[90%] bg-center bg-contain bg-no-repeat duration-500"
          ></div>
          {/* left arrow */}
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-20 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
            <BsChevronCompactLeft size={30} onClick={prevImage} />
          </div>

          {/* right arrow */}
          <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-20 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
            <BsChevronCompactRight size={30} onClick={nextImage} />
          </div>
          <h2 className="text-2xl pt-2">{`${currentIndex + 1}/${
            slides.length
          }`}</h2>
        </div>
      </div>
      <div className="flex h-fit flex-col gap-3 items-center md:hidden">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-600 p-3  border-b-4 border-green-500">
          Gallery
        </h1>
        {slides.map((item, index) => (
          <img key={index} src={item.url} />
        ))}
      </div>
    </>
  );
};

export default Gallary;
