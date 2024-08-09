import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import ScrollToTop from "./ScrollHelper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
      <ToastContainer />
    </>
  );
};

export default Layout;
