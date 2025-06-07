import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

export default function Layout() {
  return (
    <>
      <div className="flex flex-col min-h-screen justify-between  items-center  w-full bg-gray-50">
        <Navbar />

        <Outlet />

        <Footer />
      </div>
      <ToastContainer position="bottom-right" />
    </>
  );
}
