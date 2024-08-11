import { FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import { toast } from "react-toastify";

const Contact = () => {
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
      <div className="w-full h-[80px] bg-green-950"></div>
      <div className="w-full h-fit sm:h-[80vh] flex flex-col sm:flex-row">
        <div className="w-full sm:w-[40%] flex flex-col items-center justify-evenly p-4 gap-4 sm:gap-0 ">
          <h1 className="text-3xl font-bold text-green-500 pb-2 border-b-2 border-green-500">
            Contact Us
          </h1>
          <div className="flex flex-col gap-5">
            <div className="flex-flex-col text-center">
              <h2 className="text-xl font-bold">Phone:</h2>
              <p className="text-xl ">980-579-6001</p>
            </div>

            <div className="text-center">
              <p className="font-bold text-xl">Social:</p>
              <div className="flex gap-2 justify-center items-center">
                {" "}
                <a href="https://www.instagram.com/regenerativelandscapeclt/">
                  <p className="text-gray-800 text-xl"> Instagram</p>
                </a>
                <a href="https://www.instagram.com/regenerativelandscapeclt/">
                  <FaInstagram size={25} color="black" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center p-2 border-2 border-green-500 rounded-lg">
            <h1 className="font-bold text-xl text-green-500">
              Interested In Composting?
            </h1>
            <p className="text-gray-500">
              Be the first to know when our Composting Service goes live! For
              just $7 per week, we will pick up your compost weekly and deliver
              rich compost soil to you at the end of the year. To be added to
              the waitlist, submit the free estimate form with &quot;Add to
              Waitlist&quot; as the message text.{" "}
            </p>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className=" flex justify-center items-center w-full sm:w-[60%] bg-bannerlawn bg-no-repeat bg-cover border-t-2 border-green-500 sm:border-t-0">
          <form
            onSubmit={onSubmit}
            className="bg-white flex flex-col justify-between gap-8 sm:m-2 h-fit w-[100%] md:w-[80%] lg:w-[70%] p-8 "
          >
            <h1 className="font-bold text-2xl md:text-3xl text-green-500">
              Schedule Free Estimate
            </h1>

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
                placeholder="Please provide details as to what kind of service you are intersted in. We will be in touch shortly to set up your free estimate!  "
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
      </div>
    </>
  );
};

export default Contact;
