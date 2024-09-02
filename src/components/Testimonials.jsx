import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full h-fit py-12 flex flex-col justify-center items-center gap-8 bg-vision">
      <h2 className=" text-start text-3xl sm:text-4xl text-white font-bold pb-4 w-[90%] md:w-[68%] border-b-4 border-white ">
        Customer Testimonials{" "}
      </h2>
      <Slider className="w-[80%] sm:w-[70%] shadow-xl   " {...settings}>
        {testimonialData.map((item) => (
          <div
            key={item.id}
            className="bg-[#fff] h-fit p-2 text-black rounded-xl  "
          >
            <div className="flex flex-col items-start justify-between h-full gap-4 p-8  ">
              <p className=" text-sm sm:text-base  text-gray-700 leading-7">
                {`" ${item.text} "`}
              </p>
              <div>
                <p className="text-3xl text-gray-600 font-bold">{item.name}</p>
                <p className="text-sm">{item.location}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const testimonialData = [
  {
    id: 1,
    name: "Nancy",
    text: "Jake has graciously been helping me with my yard for a couple of years now. I am in a community where my grass is taken care of. Jake has helped me with pruning and weeding and transplanting and mulching. He comes on time, does what I need and gives me reasonable estimates. I do not hesitate recommending him.",
    location: "Highland Creek",
  },
  {
    id: 2,
    name: "Steve Knickerbocker",
    text: "Regenerative Landscape is the perfect all in one solution for your gardening and landscaping needs. Jake provided a full range of services including mowing, gardening, softscape and hardscape landscaping, drainage and other yard related services. Despite his relatively young age, Jake has many years of experience as a landscape and gardening  professional. He has exceptional knowledge of plants and in the care and maintenance of all types of landscapes and gardens. Most remarkably though is that in a business that sometimes falls short of great customer service, Jake’s work ethic, honesty and integrity are unmatched. He is always on time, works quickly and efficiently, and gets the job done right. He is an effective communicator and works with you to achieve your landscaping goals. I highly recommend Regenerative Landscaping.",
    location: "Matthews, NC",
  },
];

export default Testimonials;

{
  /* <div className="w-full h-fit py-12 flex flex-col justify-center items-center gap-8 bg-[#f3f3f3]">
<h1 className=" text-center text-3xl sm:text-4xl text-black font-bold pb-2 w-[90%] md:w-[40%] border-b-4 border-green-600 ">
  We Love Our Clients{" "}
</h1>
<div className="w-[80%] flex flex-col justify-center">
  <Slider {...settings}>
    {testimonialData.map((item) => (
      <div
        key={item.id}
        className="bg-[#fff] h-fit p-2 text-black rounded-xl  "
      >
        <div className="flex flex-col items-start justify-between h-full gap-4 p-8  ">
          <p className=" text-sm sm:text-base text-gray-700 leading-7">
            {item.text}
          </p>
          <div>
            <p className="text-3xl text-gray-600 font-bold">
              {item.name}
            </p>
            <p className="text-sm">{item.location}</p>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>
</div> */
}
