import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
