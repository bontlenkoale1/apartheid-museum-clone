import { Outlet } from "react-router-dom";
import "./Main.css";
import Footer from "./Footer";
import { Navbar } from "./Navbar";


const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
