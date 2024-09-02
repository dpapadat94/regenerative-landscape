import mailbox from "../assets/mailbox.png";
import mailboxWebp from "../assets/mailbox.webp";

import frontChange from "../assets/frontChange.png";
import frontChangeWebp from "../assets/frontChange.webp";

import removal from "../assets/removal.png";
import removalwebp from "../assets/removal.webp";

import mulchBA from "../assets/mulchBA.png";
import mulchBAwebp from "../assets/mulchBA.webp";

import backyard from "../assets/backyard.png";
import backyardwebp from "../assets/backyard.webp";

import garden3 from "../assets/garden3.png";
import garden3webp from "../assets/garden3.webp";

//icons
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { useState } from "react";

const slides = [
  {
    url: frontChange,
    urlwebp: frontChangeWebp,
  },
  {
    url: mailbox,
    urlwebp: mailboxWebp,
  },
  {
    url: removal,
    urlwebp: removalwebp,
  },
  {
    url: mulchBA,
    urlwebp: mulchBAwebp,
  },
  {
    url: backyard,
    urlwebp: backyardwebp,
  },
  {
    url: garden3,
    urlwebp: garden3webp,
  },
];

const Gallary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  //code looks more complicated because we have to account for the when we click the next slide button on the last image
  const nextImage = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  //code looks more complicated because we have to account for the when we click the prev slide button on the 1st image
  const prevImage = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div id="gallery">
      <div className="hidden md:flex  w-full h-full shadow-md  m-auto">
        <div className="w-[100%] h-[780px] m-auto py-16 px-16 text-gray-700 relative text-center  ">
          <h2 className="text-4xl mb-5 pb-2 font-bold m-x-auto  ">
            See Our Work
          </h2>
          <picture>
            <source srcSet={slides[currentIndex].urlwebp} type="image/webp" />
            <img
              src={slides[currentIndex].url}
              alt=""
              className="w-full h-[70%] lg:h-[90%] object-contain duration-500"
            />
          </picture>
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
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-600 p-3 my-3 border-b-4 border-green-500">
          Gallery
        </h2>
        {slides.map((item, index) => (
          <picture key={index + 10}>
            <source srcSet={item.urlwebp} type="image/webp" />
            <img key={index} src={item.url} />
          </picture>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
