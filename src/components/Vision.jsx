import logoWhite from "../assets/logoTrans.png";

const Vision = () => {
  return (
    <div className="w-full h-fit bg-vision bg-no-repeat bg-cover pb-10 flex flex-col justify-start items-center ">
      <div className="flex flex-col items-center gap-4 ">
        <h2 className="text-5xl pt-10 text-white font-bold">Our Mission</h2>
        <p className=" text-lg sm:text-xl xl:text-2xl text-center font-light text-white w-[90%] pl-2 sm:border-l-4">
          Our mission is to provide high-quality, eco-friendly landscape and
          gardening services that prioritize regenerative practices and
          sustainable solutions. We are committed to utilizing organic methods,
          native plants, and water conservation techniques to create vibrant and
          healthy outdoor spaces for our clients. Through our work, we aim to
          inspire others to embrace a more sustainable approach to landscaping
          and gardening in order to protect and preserve the natural world for
          future generations.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center sm:items-start sm:justify-start w-[90%] mt-10">
        <img
          src={logoWhite}
          className="w-[85%] sm:w-[45%] md:w-[50%] "
          alt="regenerative landscape and garden logo"
        />
        <div className="flex justify-center items-center flex-col">
          <h2 className="text-5xl pt-10 mb-5 text-white font-bold">
            Our Vision
          </h2>
          <p className="text-xl sm:text-xl xl:text-2xl text-center font-light text-white w-[90%] md:w-[80%] pl-2 sm:border-l-4">
            To create and maintain regenerative landscapes and gardens that
            enhance the beauty of the Charlotte area while promoting
            environmental sustainability and biodiversity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
