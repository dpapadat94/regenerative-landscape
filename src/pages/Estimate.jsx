const Estimate = () => {
  return (
    <>
      <div className="w-full h-[80px] bg-green-950"></div>
      <div className=" bg-bannerlawn bg-no-repeat bg-cover border-t-2 w-full h-fit sm:h-[80vh] flex justify-center">
        <div className=" flex justify-center items-center w-[90%] sm:w-[60%]  ">
          <form className="bg-white flex flex-col justify-between gap-8 m-2 h-fit w-[100%] md:w-[80%] lg:w-[70%] p-8 ">
            <h1 className="font-bold text-2xl md:text-3xl text-green-500">
              Schedule Free Estimate
            </h1>
            <p className="font-light">
              {" "}
              Call <span className="font-bold"> 980-579-6001</span> or fill out
              the form below
            </p>

            <div className="flex flex-col  gap-1">
              <label>Your Name/ Business Name</label>
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
                placeholder="Please tell us a bit about what you are looking for and we will be in touch shortly to set up your estimate.  "
                name="message"
                className="bg-[#f3f3f3] w-[100%] h-[6em] p-2"
                required
              />
            </div>
            <button className="text-white bg-green-500">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Estimate;
