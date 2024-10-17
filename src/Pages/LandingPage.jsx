import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import HeaderButton from "../ui/HeaderButton";
import CenteredButton from "../ui/CenteredButton";
import ServicesGrid from "../Components/ServicesGrid";
import ProfilesGrid from "../Components/ProfilesGrid";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import ImageCarousel from "../Components/ImageCarousel";
import appleStoreIcon from "../assets/appleStoreIcon.svg";
import playStoreIcon from "../assets/playStoreIcon.svg";
import one from "../assets/one.svg";
import two from "../assets/two.svg";
import three from "../assets/three.svg";
import four from "../assets/four.svg";
import Line from "../assets/Line.svg";
import Line3 from "../assets/Line3.svg";
import imgIcon from "../assets/imgIcon.svg";
import girlImg from "../assets/girlImg.svg";

const LandingPage = () => {
  const [displayText, setDisplayText] = useState("");
  return (
    <div className="w-full">
      <Navbar />
      <div className="container">
        <div className="first-div flex px-[40px] py-[40px] md:gap-2 lg:gap-28 bg-[#f5f5f5]">
          <div className=" flex-1">
            <HeaderButton className="font-bold">
              ON DEMAND SERVICE PLATFORM
            </HeaderButton>
            <h1 className="mt-[10px] text-[25px] leading-[38px] md:leading-[60px] md:text-[48px] text-[#000000] font-bold">
              {displayText ? (
                displayText
              ) : (
                <Typewriter
                  words={["GROW YOUR BUSINESS WITH OUR PLATFORM"]}
                  loop={1} // Runs once through both sentences
                  typeSpeed={120}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={() =>
                    setDisplayText("GROW YOUR BUSINESS WITH OUR PLATFORM")
                  } // Once done, display first sentence
                />
              )}
            </h1>
            <p className="text-[13px] md:text-[16px] font-normal text-[-#000000]">
              Connect with more clients, streamline your services and watch your{" "}
              <br /> business thrive. Join a commuinity of professionals, gain
              more exposure and <br /> drive your business forward.
            </p>
            <div className="flex rounded-lg max-w-[450px]  mt-5 ">
              <input
                type="text"
                placeholder="I need help with ........."
                className="w-full bg-[url('/public/search_icon.svg')] bg-[length:20px_20px] bg-[position:10px_center] bg-no-repeat bg-[#edebea] outline-none py-[18px] px-10  h-9   border-none"
              />
              <Link to="/SignUp">
                <CenteredButton className="whitespace-nowrap px-6  text-[16px] font-bold">
                  Get Started
                </CenteredButton>
              </Link>
            </div>
          </div>
          <div className=" first-div-image  bg-[url('./Assets/Rectangle 34(1).svg')] bg-no-repeat  justify-end md:flex-1">
            <ImageCarousel />
          </div>
        </div>
        {/* over 1.1 milloin reviews */}
        <div className=" flex flex-col gap-3 md:flex-row md:justify-between md:items-center px-[40px] py-[20px] bg-[#0d47a1]">
          <div>
            <p className="font-bold text-[24px] text-white">
              Over 1.1 Million Reviews
            </p>
            <p className="text-[16px] text-white font-normal">
              In Cleaning, Home Repairs and Planning{" "}
            </p>
          </div>
          <div className="flex">
            <img src={appleStoreIcon} alt="" />
            <img src={playStoreIcon} alt="" />
          </div>
        </div>
        {/* 3rd div */}
        <div className="px-[40px] flex flex-col gap-20  lg:flex-row mt-[70px]">
          <div className="">
            <HeaderButton>WHY JOIN US</HeaderButton>
            <h2 className="mt-[10px] text-[30px] leading-[48px] text-[#000000] font-bold md:whitespace-nowrap ">
              UNLOCK YOUR PROFESSIONAL <br /> POTENTIAL
            </h2>
            <p className="mt-[10px] text-[16px] font-normal text-[-#000000]">
              Connect with more clients, enjoy a flexible schedule, secure{" "}
              <br />
              reliable payments, and grow your business with our dedicated{" "}
              <br />
              support and resources.
            </p>
            <div className=" flex gap-5 mt-[40px]">
              <CenteredButton className="whitespace-nowrap px-1 md:px-6 text-[10px] md:text-[16px] font-bold">
                Sign up Now
              </CenteredButton>
              <CenteredButton className="whitespace-nowrap px-1 md:px-6 text-[10px] md:text-[16px] font-bold">
                Learn more
              </CenteredButton>
            </div>
          </div>
          {/* second section in the 3rd div */}
          <div className="flex flex-col w-full m-auto md:m-0 md:flex-row gap-7  ">
            <div className="md:mt-[70px] px-[10px] md:px[0px]">
              <div
                data-aos="fade-down-right"
                className="flex  justify-center items-center gap-10 md:gap-10 mb-6 md:mb-0"
              >
                <img
                  src={one}
                  alt=""
                  className="hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out  maskIm-radial-blur"
                />
                <div>
                  <h1 className="text-[24px] font-semibold whitespace-nowrap">
                    Expand Your Reach
                  </h1>
                  <p className="text-[16px] text-left md:text-right">
                    Access a{" "}
                    <span className="text-[#1a73ea]">
                      large and growing <br />
                      client base
                    </span>{" "}
                    actively seeking <br /> professional services
                  </p>
                </div>
              </div>
              <img
                src={Line}
                alt=""
                className="hidden md:flex my-[20px] md:my-[50px] ml-24"
              />
              <div className="flex  justify-center items-center gap-10 md:gap-10">
                <img
                  src={two}
                  alt=""
                  className="hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out  mask-radial-blur"
                />
                <div>
                  <h1 className="text-[24px] font-semibold whitespace-nowrap">
                    Secure Payments
                  </h1>
                  <p className="text-[16px] text-left">
                    Our
                    <span className="text-[#1a73ea]">
                      secure payment <br />
                    </span>{" "}
                    system ensure you get <br /> paid on time, every time
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={Line3} alt="" className="hidden md:flex h-[450px]" />
            </div>
            <div className="  ">
              <div className=" flex  justify-center items-center gap-10 md:gap-10  mb-6 md:mb-0">
                <img
                  src={three}
                  alt=""
                  className="hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out  mask-radial-blur"
                />
                <div>
                  <h1 className="text-[24px] font-semibold whitespace-nowrap">
                    Flexible Schedule
                  </h1>
                  <p className="text-[16px] text-left">
                    <span className="text-[#1a73ea]">
                      Choose when and where
                    </span>{" "}
                    <br /> you want to work. Accept <br />
                    jobs that fit your schedule.
                  </p>
                </div>
              </div>
              <img
                src={Line}
                alt=""
                className=" hidden md:flex my-[20px] md:my-[50px]  "
              />
              <div
                data-aos="fade-up-left"
                className=" flex  justify-center items-center gap-10 md:gap-10"
              >
                <img
                  src={four}
                  alt=""
                  className="hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out  mask-radial-blur"
                />
                <div>
                  <h1 className="text-[24px] font-semibold whitespace-nowrap">
                    Dedicated Support
                  </h1>
                  <p className="text-[16px] text-left">
                    Our
                    <span className="text-[#1a73ea]">support team</span> is{" "}
                    <br />
                    available to help you with <br /> any questions or issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section id="image-section">
          <img src={imgIcon} alt="" className="mt-5 mx-auto" />
        </section>
        <section id="popular-services">
          <HeaderButton className="mt-[70px] mx-10 text-[18px] font-normal">
            POPULAR SERVICES
          </HeaderButton>
          <ServicesGrid />
        </section>
        <HeaderButton className=" px-10 ml-10 text-[16px] md:text-[18px]  font-normal mt-4 whitespace-nowrap">
          REAL STORIES, REAL IMPACT
        </HeaderButton>
        <ProfilesGrid />
        <div className="w-full  flex flex-col m-auto md:flex-row lg:px-[200px] mt-14 px=[40px]">
          <img
            src={girlImg}
            data-aos="fade-down-right"
            alt=""
            className="h-[300px] md:h-[500px] flex-1 "
          />
          <div className="flex-col flex-1">
            <HeaderButton className="mb-[20px] ml-3 md:ml-0">
              Frequently asked questions
            </HeaderButton>
            <Accordion className="flex-1" />
          </div>
        </div>
        <div className="bg-[#e3f2fd] mt-4">
          <p className="font-semibold text-[16px] text-[#1a73ea] py-5 px-10">
            Special Offer
            <h1 className="text-center font-bold text-[#000000] text-[28px] md:text-[48px] leading-[30px] md:leading-[48px] pb-10 pt-2">
              Get a bonus for your first 5 <br /> completed task
            </h1>
            <Link to="/SignUp">
              <CenteredButton className="flex justify-center items-center m-auto">
                Sign up Now!!
              </CenteredButton>
            </Link>
          </p>
        </div>

        {/* footer */}
        <section id="contact">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
