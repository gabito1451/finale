/* eslint-disable react/prop-types */
import { useState } from "react";
import hamburgerMenu from "../assets/hamburger-menu.svg";
import searchIcon from "../assets/search_icon.svg";
import messageIcon from "../assets/message_icon.svg";
import bellIcon from "../assets/bell_icon.svg";
import closeIcon from "../assets/close-icon.svg";
import homeIcon from "../assets/home-icon.svg";
import orderIcon from "../assets/order-icon.svg";
import appointmentIcon from "../assets/appointment-icon.svg";
import msgPageIcon from "../assets/message-page-icon.svg";
import accountIcon from "../assets/setting_icon.svg";
import supportIcon from "../assets/support_icon.svg";
import logoutIcon from "../assets/logout_icon.svg";
import avatarSample from "../assets/avatar-sample.png";
import logo from "../assets/logo.png";
import { MdPayment } from "react-icons/md";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Popconfirm } from "antd";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({}) => {
  const [menuOpen, setMenuState] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => {
    setTimeout(() => {
      setMenuState(false);
    }, 500);
  };

  return (
    <div className=" h-[100vh] w-[100vw] overflow-hidden roboto-regular font-medium flex">
      <div className="sidebar relative h-full flex-grow-0 md:w-[91px] lg:w-[220px]">
        <div
          className={`bg-[#0D47A1] ${
            menuOpen ? "block" : "hidden"
          } z-10 h-[100vh] absolute w-[100vw] md:relative md:block md:w-full`}
        >
          <div className="w-full pt-2 flex px-4 box-border justify-between items-center">
            <img className="w-14 h-14" src={logo} alt="logo" />
            <img
              className="w-10 h-10 cursor-pointer md:hidden"
              onClick={() => {
                setMenuState(false);
              }}
              src={closeIcon}
              alt="close"
            />
          </div>
          <ul className="menu-items-container pt-8 text-white w-full flex flex-col md:gap-2 lg:gap-1 gap-3">
            <Link
              to={""}
              onClick={closeMenu}
              className={`${
                String(location.pathname).replaceAll("/", "").toLowerCase() ==
                "firstdashboard"
                  ? "active-item"
                  : ""
              } w-full md:p-4 md:justify-center md:items-center lg:justify-start box-border flex px-5 gap-2 items-center py-2 font-light`}
            >
              <img src={homeIcon} className="w-4 h-4" alt="home" />
              <span className="top-[1px] relative md:hidden lg:inline">
                Home
              </span>
            </Link>
            <Link
              onClick={closeMenu}
              to={"/dashboard/order"}
              className={`${
                String(location.pathname).replaceAll("/", "").toLowerCase() ==
                "dashboardorder"
                  ? "active-item"
                  : ""
              } w-full md:p-4 md:justify-center md:items-center lg:justify-start box-border flex px-5 gap-2 items-center py-2 font-light`}
            >
              <img src={orderIcon} className="w-4 h-4" alt="order" />
              <span className="top-[1px] relative md:hidden lg:inline">
                Order
              </span>
            </Link>
            <Link
              onClick={closeMenu}
              to={"/dashboard/appointments"}
              className={`${
                String(location.pathname).replaceAll("/", "").toLowerCase() ==
                "dashboardappointments"
                  ? "active-item"
                  : ""
              } w-full md:p-4 md:justify-center md:items-center lg:justify-start box-border flex px-5 gap-2 items-center py-2 font-light`}
            >
              <img
                src={appointmentIcon}
                className="w-4 h-4"
                alt="appointments"
              />

              <span className="top-[1px] relative md:hidden lg:inline">
                My Appointments
              </span>
            </Link>

            <Link
              to={"/dashboard/Message"}
              onClick={closeMenu}
              className={`${
                String(location.pathname).replaceAll("/", "").toLowerCase() ==
                "dashboardmessage"
                  ? "active-item"
                  : ""
              } w-full md:p-4 md:justify-center md:items-center lg:justify-start box-border flex px-5 gap-2 items-center py-2 font-light`}
            >
              <img src={msgPageIcon} className="w-4 h-4" alt="message" />
              <span className="top-[1px] relative md:hidden lg:inline">
                Message
              </span>
            </Link>
            <Link
              to={"/dashboard"}
              className={`${
                String(location.pathname).replaceAll("/", "").toLowerCase() ==
                "payment"
                  ? "active-item"
                  : ""
              } w-full md:p-4 md:justify-center md:items-center lg:justify-start box-border flex px-5 gap-2 items-center py-2 font-light`}
            >
              {/* <img src={msgPageIcon} className="w-4 h-4" alt="payment" /> */}
              <MdPayment size={18} />
              <span className="top-[1px] relative md:hidden lg:inline">
                Payment
              </span>
            </Link>
          </ul>
          <ul className="menu-items-container pt-8 text-white w-full flex flex-col md:gap-2 lg:gap-1 gap-3">
            <Link
              onClick={closeMenu}
              to={"/dashboard/Settings"}
              className={`${
                String(location.pathname).replaceAll("/", "").toLowerCase() ==
                "dashboardsettings"
                  ? "active-item"
                  : ""
              } w-full md:p-4 md:justify-center md:items-center lg:justify-start box-border flex px-5 gap-2 items-center py-2 font-light`}
            >
              <img src={accountIcon} className="w-4 h-4" alt="account" />
              <span className="top-[1px] relative md:hidden lg:inline">
                Account Setting
              </span>
            </Link>
            <Link
              className={`${
                String(location.pathname).replaceAll("/", "").toLowerCase() ==
                "support"
                  ? "active-item"
                  : ""
              } w-full md:p-4 md:justify-center md:items-center lg:justify-start box-border flex px-5 gap-2 items-center py-2 font-light`}
            >
              <img src={supportIcon} className="w-4 h-4" alt="support" />
              <span className="top-[1px] relative md:hidden lg:inline">
                Support
              </span>
            </Link>
            <Link
              className={` w-full md:p-4 md:justify-center md:items-center lg:justify-start box-border flex px-5 gap-2 items-center py-2 font-light`}
            >
              <Popconfirm
                placement="top"
                title="Log Out"
                description="Sure you want to log out ?"
                okText="Yes"
                cancelText="No"
                onConfirm={() => {
                  sessionStorage.removeItem("currentUser");

                  // Use navigate to redirect to the home page

                  navigate("/");
                }}
                overlayStyle={{ minWidth: "250px" }}
                className="flex items-center justify-center gap-2 hover:bg-none "
              >
                <img src={logoutIcon} className="w-4 h-4" alt="logout" />
                <span className="top-[1px] relative md:hidden lg:inline">
                  LogOut
                </span>
              </Popconfirm>
            </Link>
          </ul>
        </div>
      </div>
      <div className="body h-full flex-grow ">
        <nav className="flex shadow-black bg-white justify-between md:py-4 md:px-8 py-2 px-4">
          <div className="flex h-[52px] items-center gap-4">
            <img
              className="w-6 md:hidden h-6 cursor-pointer"
              onClick={() => {
                setMenuState(!menuOpen);
              }}
              src={hamburgerMenu}
              alt="menu"
            />
            <div className="h-full flex items-center relative">
              <img
                src={searchIcon}
                className="w-4 md:w-6 md:h-6 absolute left-3 h-4"
                alt="search"
              />
              <input
                className="w-[165px] md:w-[465px] h-7 md:h-[57px] text-[12px] md:text-[16px] block bg-[#1A73E81A] pl-11 pr-2 rounded-[5px]"
                type="search"
                placeholder="Search Services"
              />
            </div>
          </div>
          <div className="flex gap-3 md:gap-6 items-center">
            <img
              src={messageIcon}
              className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]"
              alt="message"
            />
            <img
              src={bellIcon}
              className="w-[14px] h-[14px] md:w-[24px] md:h-[24px]"
              alt="bell"
            />
            <img
              src={avatarSample}
              className="w-6 h-6 md:w-[43px] md:h-[43px]"
              alt="avatar"
            />
          </div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
