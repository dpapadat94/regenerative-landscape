import { Helmet } from "react-helmet-async";
import { FaCheck } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";

//fetching data for each package
const LawnCarePage = () => {
  const lawnData = useLoaderData();
  let { id } = useParams();

  // getting the package that matches the selected param from link
  const currentPackage = lawnData.packages.find(function (item) {
    return item.id === id;
  });

  //form
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("access_key", "a84daf55-ad37-4cb1-a870-5841e81c074d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("message successfully sent");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error("Error Occured on sumbit, please try again");
    }
  };

  return (
<>
      <Helmet>
        <meta
          name="description"
          content="Keep your lawn healthy and beautiful with our expert lawn care services. We offer professional mowing, fertilization, and maintenance for lush, green lawns year-round"/>

        <title>Expert Lawn Care Services | Regenerative Landscape and Garden</title>
      </Helmet>
      <div className="w-full h-[80px] bg-green-950"></div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:h-[90vh] px-2 md:pl-5 bg-bannerlawn bg-no-repeat bg-cover ">
        <div className="text-white w-[90%]  md:w-fit  flex flex-col gap-5 ">
          <div className="text-center">
            {currentPackage.price ? (
              <>
                <h1 className="text-3xl sm:4xl lg:text-6xl mt-8 lg:mt-0  font-bold mb-2">
                  {currentPackage.title}
                </h1>
                <p className="text-xl sm:text-2xl mb-4">
                  Starting at{" "}
                  <span className="text-green-300">
                    ${currentPackage.price}
                  </span>{" "}
                  Package Includes:
                </p>
              </>
            ) : (
              <>
                <h2 className="text-3xl sm:4xl lg:text-6xl mt-8 lg:mt-0  font-bold mb-2">
                  {currentPackage.title}
                </h2>
                <p className="text-xl sm:text-2xl mb-4">
                  Schedule a Free Estimate
                </p>
              </>
            )}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xl  lg:text-2xl font-bold">
            {currentPackage.details.map((detail) => (
              <p key={detail} className="p-2 flex  items-start  gap-2">
                <FaCheck color="lightGreen" />
                {detail}
              </p>
            ))}
          </div>
          <div className="text-center">
            <h2 className="mb-3">Other Lawn Care Packages</h2>
            <div className="flex flex-col md:flex-row justify-center gap-5">
              <Link
                className="border-2 p-2 min-w-[15em] bg-green-500"
                to={`/lawncare/${currentPackage.link1}`}
              >
                {currentPackage.linkText1}
              </Link>
              <Link
                className="border-2 p-2 min-w-[15em] bg-green-800"
                to={`/lawncare/${currentPackage.link2}`}
              >
                {currentPackage.linkText2}
              </Link>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-white flex flex-col justify-between gap-8 m-10 h-fit w-[80%] lg:w-[33%] p-8 "
        >
          <h2 className="font-bold text-2xl md:text-3xl">
            Schedule Free Estimate
          </h2>
          <p className="font-light">
            {" "}
            Call <span className="font-bold"> 980-579-6001</span> or fill out
            the form below:
          </p>
          <div className="flex flex-col  gap-1">
            <label>Your Name/Business Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              required
              className="bg-[#f3f3f3] h-[3em] p-2"
            />
          </div>
          <div className="flex flex-col  gap-1">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              className="bg-[#f3f3f3] h-[3em] p-2"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Type Message</label>
            <textarea
              placeholder="Please provide details as to what kind of service you are intersted in. We will be in touch shortly to set up your free estimate! "
              name="message"
              className="bg-[#f3f3f3] w-[100%] h-[6em] p-2"
              required
            />
          </div>
          <button type="submit" className="text-white bg-green-500">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export const LawnCareLoader = async () => {
  const res = await fetch("/data/lawnData.json");
  const data = await res.json();
  return data;
};

export default LawnCarePage;
