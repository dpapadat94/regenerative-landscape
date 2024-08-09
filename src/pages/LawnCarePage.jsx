import { FaCheck } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";

//fetching data for each package
const LawnCarePage = () => {
  const lawnData = useLoaderData();
  let { id } = useParams();
  console.log(id);

  // getting the package that matches the selected param from link
  const currentPackage = lawnData.packages.find(function (item) {
    return item.id === id;
  });
  console.log(currentPackage);

  return (
    <>
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
                <h1 className="text-3xl sm:4xl lg:text-6xl mt-8 lg:mt-0  font-bold mb-2">
                  {currentPackage.title}
                </h1>
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
            <h1 className="mb-3">Other Lawn Care Packages</h1>
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

        <form className="bg-white flex flex-col justify-between gap-8 m-10 h-fit w-[80%] lg:w-[33%] p-8 ">
          <h1 className="font-bold text-2xl md:text-3xl">
            Schedule Free Estimate
          </h1>
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
          <button className="text-white bg-green-500">Submit</button>
        </form>
      </div>
    </>
  );
};

export const lawnCareLoader = async () => {
  const res = await fetch("/data/lawnData.json");
  const data = await res.json();
  return data;
};

export default LawnCarePage;
