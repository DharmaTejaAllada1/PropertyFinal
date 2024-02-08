import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const RelestatewebsitehomepagePage = () => {
  const navigate = useNavigate();

  const [groupseventeenvalue, setGroupseventeenvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-100_01 font-poppins h-[8100px] mx-auto relative w-full">
        <div className="absolute bottom-[0] flex flex-col md:gap-10 gap-[352px] inset-x-[0] items-center justify-end mx-auto w-full">
          <div className="flex flex-col items-start justify-start max-w-[1143px] md:px-5 w-full">
            <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between md:ml-[0] ml-[3px] w-[96%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[86px] justify-start w-[78%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[362px] sm:text-[32px] md:text-[38px] text-[42px] text-orange-700"
                  size="txtInterBold42"
                >
                  <span className="text-light_blue-900 font-inter text-left font-bold">
                    {" "}
                  </span>
                  <span className="text-blue-700 font-inter text-left font-bold">
                    Stats Are
                  </span>
                  <span className="text-light_blue-900 font-inter text-left font-bold">
                    {" "}
                  </span>
                  <span className="text-black-900 font-inter text-left font-bold">
                    Numbers
                  </span>
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <Img
                    className="h-[404px] md:h-auto object-cover"
                    src="images/img_rectangle64.png"
                    alt="rectangleSixtyFour"
                  />
                  <div className="md:h-[201px] h-[218px] md:mt-0 mt-[110px] relative w-[21%] md:w-full">
                    <div className="absolute flex flex-col font-poppins inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                      <div className="flex flex-col justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[42px] md:text-5xl text-[109px] text-light_blue-900"
                          size="txtPoppinsRegular109"
                        >
                          16
                        </Text>
                        <Text
                          className="mt-1 text-[22px] text-gray-600 sm:text-lg md:text-xl"
                          size="txtPoppinsRegular22"
                        >
                          CRAZY THINKERS
                        </Text>
                      </div>
                    </div>
                    <Text
                      className="absolute bottom-[0] right-[18%] md:text-5xl text-[109px] text-blue-700"
                      size="txtInterRegular109"
                    >
                      __
                    </Text>
                  </div>
                  <Img
                    className="h-[404px] md:h-auto object-cover"
                    src="images/img_rectangle66.png"
                    alt="rectangleSixtySix"
                  />
                </div>
              </div>
              <div className="flex flex-col font-poppins justify-start md:mt-0 mt-[228px] w-[17%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[23px] md:text-5xl text-[109px] text-blue-700"
                  size="txtPoppinsRegular109Blue700"
                >
                  7K
                </Text>
                <div className="font-inter md:h-[132px] h-[155px] relative w-full">
                  <Text
                    className="absolute bottom-[0] inset-x-[0] mx-auto md:text-5xl text-[109px] text-gray-600 w-max"
                    size="txtInterRegular109Gray600"
                  >
                    <span className="md:text-xl sm:text-lg text-gray-600 font-poppins text-left text-[22px] font-normal">
                      HOURS OF WORK{" "}
                    </span>
                    <span className="text-gray-600 font-poppins text-left font-normal">
                      {" "}
                    </span>
                  </Text>
                  <Text
                    className="absolute h-[99px] left-[19%] md:text-5xl text-[109px] text-light_blue-900 top-[0]"
                    size="txtInterRegular109Lightblue900"
                  >
                    __
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between md:ml-[0] ml-[11px] w-[99%] md:w-full">
              <div className="flex flex-col items-center justify-start md:mt-0 mt-[123px]">
                <Text
                  className="md:text-5xl text-[73px] text-light_blue-900"
                  size="txtInterBold73"
                >
                  310
                </Text>
                <div className="h-[102px] relative w-full">
                  <Text
                    className="mb-[-5.96px] mx-auto md:text-5xl text-[73px] text-blue-700 z-[1]"
                    size="txtInterBold73Blue700"
                  >
                    ___
                  </Text>
                  <Text
                    className="mt-auto mx-auto text-[22px] text-gray-600 sm:text-lg md:text-xl"
                    size="txtPoppinsRegular22"
                  >
                    PROJECTS COMPLETED
                  </Text>
                </div>
              </div>
              <Img
                className="h-[404px] md:h-auto mb-[3px] object-cover"
                src="images/img_rectangle69.png"
                alt="rectangleSixtyNine"
              />
              <div className="h-[173px] md:mt-0 mt-[122px] relative w-[19%] md:w-full">
                <div className="flex flex-col h-full items-center justify-start m-auto w-full">
                  <div className="flex flex-col gap-[51px] justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[62px] md:text-5xl text-[73px] text-blue-700"
                      size="txtInterBold73Blue700"
                    >
                      25
                    </Text>
                    <Text
                      className="text-[22px] text-gray-600 sm:text-lg md:text-xl"
                      size="txtPoppinsRegular22"
                    >
                      YEARS OF EXPERTIES
                    </Text>
                  </div>
                </div>
                <Text
                  className="absolute bottom-[9%] right-[22%] md:text-5xl text-[73px] text-light_blue-900"
                  size="txtInterBold73"
                >
                  ___
                </Text>
              </div>
              <Img
                className="h-[404px] md:h-auto md:mt-0 mt-[3px] object-cover"
                src="images/img_rectangle6713.png"
                alt="rectangle6713"
              />
            </div>
            <Text
              className="mt-[279px] text-4xl sm:text-[32px] md:text-[34px] text-deep_orange-A200"
              size="txtPoppinsSemiBold36"
            >
              <span className="text-light_blue-900 font-poppins text-left font-semibold">
                Customer
              </span>
              <span className="text-black-900 font-poppins text-left font-semibold">
                {" "}
                Testmonials
              </span>
            </Text>
            <div className="flex md:flex-col flex-row font-poppins gap-3.5 items-center justify-between md:ml-[0] ml-[3px] mt-[100px] w-full">
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-[9px] w-1/2 md:w-full">
                <Img
                  className="h-[81px] md:h-auto object-cover w-[81px]"
                  src="images/img_rectangle72.png"
                  alt="rectangleSeventyTwo"
                />
                <Text
                  className="leading-[29.00px] mt-[21px] text-center text-gray-700 text-lg w-[92%] sm:w-full"
                  size="txtPoppinsLight18"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&#39;t look even slightly believable
                  </>
                </Text>
                <Text
                  className="mb-3 text-center text-lg text-light_blue-900"
                  size="txtPoppinsLight18Lightblue900"
                >
                  Venkatesh
                </Text>
              </div>
              <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start p-[23px] sm:px-5 rounded-[9px] w-1/2 md:w-full">
                <Img
                  className="h-[81px] md:h-auto object-cover w-[81px]"
                  src="images/img_rectangle6843.png"
                  alt="rectangle6843"
                />
                <Text
                  className="leading-[29.00px] mt-[21px] text-center text-gray-700 text-lg w-[92%] sm:w-full"
                  size="txtPoppinsLight18"
                >
                  <>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&#39;t look even slightly believable
                  </>
                </Text>
                <Text
                  className="mb-3 text-center text-lg text-light_blue-900"
                  size="txtPoppinsLight18Lightblue900"
                >
                  Venkatesh
                </Text>
              </div>
            </div>
            <Text
              className="mt-[307px] text-4xl sm:text-[32px] md:text-[34px] text-black-900"
              size="txtInterRegular36"
            >
              <span className="text-light_blue-900 font-inter text-left font-semibold">
                Explore
              </span>
              <span className="text-pink-300 font-inter text-left font-semibold">
                {" "}
              </span>
              <span className="text-black-900 font-inter text-left font-semibold">
                Popular Localities in Hyderabad
              </span>
            </Text>
            <List
              className="sm:flex-col flex-row font-inter gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center md:ml-[0] ml-[3px] mt-[103px] w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col relative w-full">
                <Img
                  className="h-[328px] mx-auto object-cover w-full"
                  src="images/img_rectangle6860.png"
                  alt="rectangle6860"
                />
                <div className="bg-white-A700 flex flex-col items-start justify-start mt-[-36px] mx-auto p-[7px] rounded-md w-[85%] z-[1]">
                  <div className="flex flex-col items-start justify-start mb-[3px] md:ml-[0] ml-[31px] w-[51%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInterRegular24"
                    >
                      Nalagantla
                    </Text>
                    <Text
                      className="mt-2 text-black-900 text-xl"
                      size="txtInterLight20"
                    >
                      $4,954-per sqft
                    </Text>
                    <div className="flex flex-row gap-4 items-center justify-start mt-[11px] w-[43%] md:w-full">
                      <Img
                        className="h-4 w-[17px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtInterMedium20"
                      >
                        4.6
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col relative w-full">
                <Img
                  className="h-[328px] mx-auto object-cover w-full"
                  src="images/img_rectangle6861.png"
                  alt="rectangle6861"
                />
                <div className="bg-white-A700 flex flex-col items-start justify-start mt-[-36px] mx-auto p-[7px] rounded-md w-[85%] z-[1]">
                  <div className="flex flex-col items-start justify-start mb-[3px] md:ml-[0] ml-[31px] w-[51%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInterRegular24"
                    >
                      Nalagantla
                    </Text>
                    <Text
                      className="mt-2 text-black-900 text-xl"
                      size="txtInterLight20"
                    >
                      $4,954-per sqft
                    </Text>
                    <div className="flex flex-row gap-4 items-center justify-start mt-[11px] w-[43%] md:w-full">
                      <Img
                        className="h-4 w-[17px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtInterMedium20"
                      >
                        4.6
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col relative w-full">
                <Img
                  className="h-[328px] mx-auto object-cover w-full"
                  src="images/img_rectangle6863.png"
                  alt="rectangle6863"
                />
                <div className="bg-white-A700 flex flex-col items-start justify-start mt-[-36px] mx-auto p-[7px] rounded-md w-[85%] z-[1]">
                  <div className="flex flex-col items-start justify-start mb-[3px] md:ml-[0] ml-[31px] w-[51%] md:w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                      size="txtInterRegular24"
                    >
                      Nalagantla
                    </Text>
                    <Text
                      className="mt-2 text-black-900 text-xl"
                      size="txtInterLight20"
                    >
                      $4,954-per sqft
                    </Text>
                    <div className="flex flex-row gap-4 items-center justify-start mt-[11px] w-[43%] md:w-full">
                      <Img
                        className="h-4 w-[17px]"
                        src="images/img_signal.svg"
                        alt="signal"
                      />
                      <Text
                        className="text-black-900 text-xl"
                        size="txtInterMedium20"
                      >
                        4.6
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <footer className="flex md:flex-col md:gap-5 items-center justify-center md:px-5 w-full">
            <Img
              className="flex-1 h-[589px] sm:h-auto object-cover w-full"
              src="images/img_image31.png"
              alt="imageThirtyOne"
            />
            <div className="bg-gray-400_a4 flex flex-1 flex-col items-start justify-start mb-[18px] p-[52px] md:px-10 sm:px-5 w-full">
              <div className="flex flex-col gap-[5px] items-center justify-start mb-[117px] md:ml-[0] ml-[76px] w-[81%] md:w-full">
                <div className="flex md:flex-col flex-row gap-2.5 items-center justify-between w-full">
                  <div className="h-[207px] relative w-[28%] md:w-full">
                    <div className="h-[207px] m-auto w-full">
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[85%]">
                        <div className="flex flex-col gap-6 justify-start w-full">
                          <div className="flex flex-row font-inter items-end justify-between w-[84%] md:w-full">
                            <Img
                              className="h-[38px] md:h-auto mt-[5px] object-cover"
                              src="images/img_imageremovebgpreview.png"
                              alt="imageremovebgpr"
                            />
                            <Text
                              className="sm:text-[33px] md:text-[35px] text-[37px] text-white-A700"
                              size="txtInterBold37"
                            >
                              in
                            </Text>
                          </div>
                          <Text
                            className="leading-[46.00px] md:ml-[0] ml-[23px] text-gray-900 text-xl w-[91%] sm:w-full"
                            size="txtPoppinsRegular20"
                          >
                            There are many variations of passages of Lorem Ipsum
                            .{" "}
                          </Text>
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto pb-[65px] md:px-10 sm:px-5 px-[65px] w-full">
                        <div className="flex flex-col items-center justify-start mb-[98px] w-[32%] md:w-full">
                          <Img
                            className="h-8 md:h-auto object-cover w-full"
                            src="images/img_imageremovebgpreview_32x52.png"
                            alt="imageremovebgpr_One"
                          />
                        </div>
                      </div>
                    </div>
                    <Img
                      className="absolute h-[37px] left-[37%] object-cover top-[2%] w-[21%]"
                      src="images/img_imageremovebgpreview_37x61.png"
                      alt="imageremovebgpr_Two"
                    />
                  </div>
                  <ul className="flex md:flex-1 flex-col items-start justify-start w-[72%] md:w-full common-column-list">
                    <li>
                      <a href="javascript:">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start">
                          <Text
                            className="mb-1 md:text-2xl sm:text-[22px] text-[26px] text-blue-700"
                            size="txtPoppinsBold26"
                          >
                            WHAT WE DO
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[131px] md:mt-0 mt-1 md:text-2xl sm:text-[22px] text-[26px] text-blue-700"
                            size="txtPoppinsBold26"
                          >
                            SITMAP
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[152px] md:mt-0 my-0.5 md:text-2xl sm:text-[22px] text-[26px] text-blue-700"
                            size="txtPoppinsBold26"
                          >
                            CONTACT
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-7">
                          <Text
                            className="text-black-900 text-xl"
                            size="txtPoppinsRegular20Black900"
                          >
                            Home LIGHTING
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[158px] text-black-900 text-xl"
                            size="txtPoppinsRegular20Black900"
                          >
                            Home
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[182px] text-black-900 text-xl"
                            size="txtPoppinsRegular20Black900"
                          >
                            Address
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-3">
                          <Text
                            className="md:mt-0 mt-[3px] text-black-900 text-xl"
                            size="txtPoppinsRegular20Black900"
                          >
                            Landscape Design
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[126px] text-black-900 text-xl"
                            size="txtPoppinsRegular20Black900"
                          >
                            About
                          </Text>
                          <Text
                            className="mb-[3px] md:ml-[0] ml-[182px] text-black-900 text-xl"
                            size="txtPoppinsRegular20Black900"
                          >
                            63 Nelson Base.Flordia
                          </Text>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:">
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-0.5 md:ml-[0] mt-[18px]">
                          <Text
                            className="md:mt-0 mt-0.5 text-black-900 text-xl"
                            size="txtPoppinsRegular20Black900"
                          >
                            Floor Planning
                          </Text>
                          <Text
                            className="mb-0.5 md:ml-[0] ml-[170px] text-black-900 text-xl"
                            size="txtPoppinsRegular20Black900"
                          >
                            Service
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[169px] md:mt-0 mt-0.5 text-black-900 text-xl"
                            size="txtPoppinsRegular20Black900"
                          >
                            Phone
                          </Text>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <ul className="flex flex-col items-start justify-start w-[94%] md:w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <ul className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full common-column-list">
                        <li>
                          <a
                            href="javascript:"
                            className="md:mt-0 mt-1.5 sm:text-[19px] md:text-[21px] text-[23px] text-gray-900"
                          >
                            <Text size="txtInterBold23">INTENAX-</Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[175px] md:mt-0 my-[5px] text-black-900 text-xl"
                          >
                            <Text size="txtPoppinsRegular20Black900">
                              Interior Design
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="md:ml-[0] ml-[166px] md:mt-0 mt-2.5 text-black-900 text-xl"
                          >
                            <Text size="txtPoppinsRegular20Black900">
                              Our Prajects
                            </Text>
                          </a>
                        </li>
                        <li>
                          <a
                            href="javascript:"
                            className="mb-2.5 md:ml-[0] ml-[120px] text-black-900 text-xl"
                          >
                            <Text size="txtPoppinsRegular20Black900">
                              +1(234) 501 8607
                            </Text>
                          </a>
                        </li>
                      </ul>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-[13px]">
                        <Text
                          className="text-gray-900 text-xl"
                          size="txtPoppinsRegular20"
                        >
                          All rights reserved
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[421px] md:mt-0 mt-0.5 text-black-900 text-xl"
                          size="txtPoppinsRegular20Black900"
                        >
                          Latest News
                        </Text>
                        <Text
                          className="mb-0.5 md:ml-[0] ml-[123px] text-black-900 text-xl"
                          size="txtPoppinsRegular20Black900"
                        >
                          Email;
                        </Text>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex flex-row items-start justify-between md:ml-[0] ml-[599px] mt-[7px]">
                        <a
                          href="javascript:"
                          className="mt-[11px] text-black-900 text-xl"
                        >
                          <Text size="txtPoppinsRegular20Black900">
                            Contact Us
                          </Text>
                        </a>
                        <Text
                          className="mb-[11px] text-black-900 text-xl"
                          size="txtPoppinsRegular20Black900"
                        >
                          Info@intenax.net
                        </Text>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
        <div className="absolute flex flex-col font-inter inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <header className="bg-blue-700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-between w-[42%] md:w-full">
              <Img
                className="h-[19px] ml-[-100px] md:ml-[0] mt-5 my-5"
                src="images/img_lock.svg"
                alt="lock"
              />
              <Text
                className="flex justify-end mb-5 md:ml-[0] ml-[105px] mt-[-42px] text-base text-white-A700"
                size="txtInterRegular16"
              >
                venkatesh@gmail.com
              </Text>
            </div>
            <Img
              className="h-[19px] md:ml-[0] ml-[23px] md:mt-0 my-5 w-[19px]"
              src="images/img_call.svg"
              alt="call"
            />
            <Text
              className="ml-2 md:ml-[0] md:mt-0 my-5 text-base text-white-A700"
              size="txtInterRegular16"
            >
              +91 73309 72400
            </Text>
            <Text
              className="md:ml-[0] ml-[513px] md:mt-0 my-5 text-base text-white-A700"
              size="txtInterRegular16"
            >
              Vendor
            </Text>
            <Img
              className="h-[7px] mb-[25px] md:ml-[0] ml-[7px] md:mt-0 mt-[29px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
            <div className="flex flex-1 flex-col items-center justify-between w-full">
              <a className="md:ml-[0] ml-[22px] my-5 text-base text-white-A700">
                <Text
                  className="common-pointer"
                  size="txtInterRegular16"
                  onClick={() => navigate("/realestateloginpage")}
                >
                  Login
                </Text>
              </a>
              <Img
                className="h-[7px] mb-[39px] ml-3 md:ml-[0] mr-44 mt-[19px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown_One"
              />
            </div>
          </header>
          <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1110px] mt-[26px] md:px-5 w-full">
            <Text
              className="sm:text-[41px] md:text-[47px] text-[55px] text-blue-700"
              size="txtInterMedium55"
            >
              LOGO
            </Text>
            <Text
              className="sm:ml-[0] ml-[78px] text-[19px] text-blue-700"
              size="txtInterMedium19"
            >
              BUY
            </Text>
            <Img
              className="h-[7px] ml-1.5 sm:ml-[0]"
              src="images/img_arrowdown_light_blue_900.svg"
              alt="arrowdown_Two"
            />
            <Text
              className="sm:ml-[0] ml-[60px] text-[17px] text-black-900"
              size="txtInterRegular17"
            >
              RENT
            </Text>
            <Img
              className="h-[7px] sm:ml-[0] ml-[9px]"
              src="images/img_arrowdown_black_900.svg"
              alt="arrowdown_Three"
            />
            <Text
              className="sm:ml-[0] ml-[60px] text-[17px] text-black-900"
              size="txtInterRegular17"
            >
              PROJECTS
            </Text>
            <Img
              className="h-[7px] sm:ml-[0] ml-[9px]"
              src="images/img_arrowdown_black_900.svg"
              alt="arrowdown_Four"
            />
            <Text
              className="sm:ml-[0] ml-[76px] text-[17px] text-black-900"
              size="txtInterRegular17"
            >
              AGENTS{" "}
            </Text>
            <Img
              className="h-[7px] sm:ml-[0] ml-[13px]"
              src="images/img_arrowdown_black_900.svg"
              alt="arrowdown_Five"
            />
            <Text
              className="sm:ml-[0] ml-[65px] text-[17px] text-black-900"
              size="txtInterRegular17"
            >
              SERVICES
            </Text>
            <Img
              className="h-[7px] ml-2 sm:ml-[0]"
              src="images/img_arrowdown_black_900.svg"
              alt="arrowdown_Six"
            />
            <a
              href="javascript:"
              className="sm:ml-[0] ml-[74px] text-[17px] text-black-900"
            >
              <Text size="txtInterRegular17">Contact Us</Text>
            </a>
            <Img
              className="h-[7px] ml-1.5 sm:ml-[0]"
              src="images/img_arrowdown_black_900.svg"
              alt="arrowdown_Seven"
            />
          </div>
          <div className="md:h-[1295px] h-[720px] sm:h-[743px] mt-6 md:px-5 relative w-full">
            <Img
              className="h-[719px] m-auto object-cover w-full"
              src="images/img_rectangle44.png"
              alt="rectangleFortyFour"
            />
            <div className="absolute bg-black-900_83 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[159px] md:px-10 sm:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[93px] items-start justify-start mb-[79px] md:ml-[0] ml-[7px] w-[92%] md:w-full">
                <div className="flex flex-col gap-[26px] items-center justify-start md:mt-0 mt-[104px] w-[1%] md:w-full">
                  <div className="border border-solid border-white-A700 h-2.5 rounded-[50%] w-2.5"></div>
                  <div className="bg-white-A700 h-2.5 rounded-[50%] w-2.5"></div>
                  <div className="border border-solid border-white-A700 h-2.5 rounded-[50%] w-2.5"></div>
                </div>
                <div className="flex flex-col md:gap-10 gap-[71px] items-center justify-start w-[91%] md:w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                    size="txtInterMedium48"
                  >
                    Explore Buy / sell /Rent Property in India{" "}
                  </Text>
                  <div className="bg-white-A700_a2 flex flex-col font-poppins items-center justify-start p-[29px] sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col gap-[34px] items-center justify-start mb-[31px] w-[93%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[91%] md:w-full">
                        <Text
                          className="text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          BUY
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[127px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          RENT/PG
                        </Text>
                        <Text
                          className="ml-24 md:ml-[0] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          PROJECTS{" "}
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[90px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          COMMERCIAL
                        </Text>
                        <Text
                          className="md:ml-[0] ml-[82px] text-base text-black-900"
                          size="txtPoppinsRegular16"
                        >
                          DEALERS
                        </Text>
                      </div>
                      <div className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-end pl-[13px] rounded-[21px] w-full">
                        <Text
                          className="text-[10px] text-black-900"
                          size="txtPoppinsLight10"
                        >
                          Flats/Apartments
                        </Text>
                        <Line className="bg-blue_gray-100 h-[42px] md:h-px md:ml-[0] ml-[7px] md:w-full w-px" />
                        <Img
                          className="h-[13px] md:ml-[0] ml-[15px]"
                          src="images/img_linkedin.svg"
                          alt="linkedin"
                        />
                        <Text
                          className="md:ml-[0] ml-[5px] text-[10px] text-black-900"
                          size="txtPoppinsLight10"
                        >
                          Search City
                        </Text>
                        <Line className="bg-blue_gray-100 h-[42px] md:h-px md:ml-[0] ml-[251px] md:w-full w-px" />
                        <Text
                          className="md:ml-[0] ml-[7px] text-[10px] text-black-900"
                          size="txtPoppinsLight10"
                        >
                          Budget
                        </Text>
                        <Img
                          className="h-1.5 ml-44 md:ml-[0]"
                          src="images/img_arrowdown_black_900.svg"
                          alt="arrowdown_Eight"
                        />
                        <Input
                          name="groupSeventeen"
                          placeholder="Search"
                          value={groupseventeenvalue}
                          onChange={(e) => setGroupseventeenvalue(e)}
                          className="font-medium p-0 placeholder:text-white-A700 sm:pr-5 text-center text-white-A700 text-xs w-full"
                          wrapClassName="bg-blue-700 flex md:flex-1 md:ml-[0] ml-[19px] pb-[13px] pl-[17px] pr-[31px] pt-2.5 rounded-br-[40px] rounded-tr-[40px] w-[15%] md:w-full"
                          prefix={
                            <div className="h-[13px] mt-[3px] mb-px mr-[11px] w-[13px] bg-white-A700">
                              <Img
                                className="cursor-pointer h-[13px] my-auto"
                                src="images/img_search.svg"
                                alt="search"
                              />
                            </div>
                          }
                          suffix={
                            <CloseSVG
                              fillColor="#ffffff"
                              className="cursor-pointer h-[13px] my-auto"
                              onClick={() => setGroupseventeenvalue("")}
                              style={{
                                visibility:
                                  groupseventeenvalue?.length <= 0
                                    ? "hidden"
                                    : "visible",
                              }}
                              height={13}
                              width={13}
                              viewBox="0 0 13 13"
                            />
                          }
                        ></Input>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row gap-[17px] items-center justify-start max-w-[1147px] mt-[83px] md:px-5 w-full">
            <div className="bg-light_green-200 border border-orange-100 border-solid flex md:flex-1 flex-col items-center justify-end pt-1.5 px-1.5 rounded-md w-[24%] md:w-full">
              <div className="flex flex-col gap-[26px] items-start justify-start mt-3 w-[96%] md:w-full">
                <Text
                  className="text-[19px] text-center text-white-A700"
                  size="txtInterMedium19WhiteA700"
                >
                  <>
                    Post your Property Ads
                    <br />
                    for Free
                  </>
                </Text>
                <div className="flex flex-row font-poppins gap-[35px] items-center justify-between w-full">
                  <Button
                    className="bg-white-A700 cursor-pointer flex items-center justify-center mb-[17px] min-w-[154px] mt-2.5 pl-[9px] pr-[15px] py-2"
                    rightIcon={
                      <div className="mt-0.5 mb-[3px] ml-[11px] outline-black-900 outline-[0.5px] outline">
                        <Img src="images/img_arrowleft.svg" alt="arrow_left" />
                      </div>
                    }
                  >
                    <div className="leading-[normal] text-black-900 text-left text-xs">
                      List Your Property
                    </div>
                  </Button>
                  <Img
                    className="h-[61px] md:h-auto object-cover w-[61px]"
                    src="images/img_maskgroup.png"
                    alt="maskgroup"
                  />
                </div>
              </div>
            </div>
            <List
              className="md:flex-1 sm:flex-col flex-row gap-[17px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-3/4 md:w-full"
              orientation="horizontal"
            >
              <div className="bg-pink-300 flex flex-col items-end justify-end p-1.5 w-full">
                <div className="flex flex-col gap-5 items-start justify-start mt-[13px] w-[95%] md:w-full">
                  <Text
                    className="text-[19px] text-white-A700"
                    size="txtInterMedium19WhiteA700"
                  >
                    <>
                      Top real estate agents &<br />
                      property dealers in india
                    </>
                  </Text>
                  <div className="flex flex-row font-poppins gap-8 items-center justify-between w-full">
                    <Button
                      className="bg-white-A700 cursor-pointer flex items-center justify-center mb-[11px] min-w-[154px] mt-4 pl-[9px] pr-[15px] py-2"
                      rightIcon={
                        <div className="mt-0.5 mb-[3px] ml-[11px] outline-black-900 outline-[0.5px] outline">
                          <Img
                            src="images/img_arrowleft.svg"
                            alt="arrow_left"
                          />
                        </div>
                      }
                    >
                      <div className="leading-[normal] text-black-900 text-left text-xs">
                        List Your Property
                      </div>
                    </Button>
                    <Img
                      className="h-[61px] md:h-auto object-cover w-[61px]"
                      src="images/img_maskgroup_61x61.png"
                      alt="maskgroup"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-pink-300_01 flex flex-col items-end justify-end pl-[7px] py-[7px] w-full">
                <div className="flex flex-col gap-[21px] items-start justify-start mt-3 w-[94%] md:w-full">
                  <Text
                    className="text-[19px] text-white-A700"
                    size="txtInterMedium19WhiteA700"
                  >
                    <>
                      Explore India’s Top
                      <br />
                      Residential Cities List
                    </>
                  </Text>
                  <div className="flex flex-row font-poppins gap-[35px] items-center justify-between w-full">
                    <Button
                      className="bg-white-A700 cursor-pointer flex items-center justify-center mb-[11px] min-w-[154px] mt-[15px] pl-[9px] pr-[15px] py-2"
                      rightIcon={
                        <div className="mt-0.5 mb-[3px] ml-[11px] outline-black-900 outline-[0.5px] outline">
                          <Img
                            src="images/img_arrowleft.svg"
                            alt="arrow_left"
                          />
                        </div>
                      }
                    >
                      <div className="leading-[normal] text-black-900 text-left text-xs">
                        List Your Property
                      </div>
                    </Button>
                    <Img
                      className="h-[60px] md:h-auto object-cover w-[60px]"
                      src="images/img_maskgroup_60x60.png"
                      alt="maskgroup"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-light_blue-900 flex flex-col items-end justify-end p-[7px] w-full">
                <div className="flex flex-col gap-5 items-start justify-start mt-3 w-[92%] md:w-full">
                  <Text
                    className="text-[19px] text-white-A700"
                    size="txtInterMedium19WhiteA700"
                  >
                    <>
                      Helping You to find your
                      <br />
                      dream Property
                    </>
                  </Text>
                  <div className="flex flex-row font-poppins gap-[23px] items-center justify-between w-full">
                    <Button
                      className="bg-white-A700 cursor-pointer flex items-center justify-center mb-[11px] min-w-[154px] mt-4 pl-[9px] pr-[15px] py-2"
                      rightIcon={
                        <div className="mt-0.5 mb-[3px] ml-[11px] outline-black-900 outline-[0.5px] outline">
                          <Img
                            src="images/img_arrowleft.svg"
                            alt="arrow_left"
                          />
                        </div>
                      }
                    >
                      <div className="leading-[normal] text-black-900 text-left text-xs">
                        List Your Property
                      </div>
                    </Button>
                    <Img
                      className="h-[61px] md:h-auto object-cover w-[61px]"
                      src="images/img_maskgroup_1.png"
                      alt="maskgroup"
                    />
                  </div>
                </div>
              </div>
            </List>
          </div>
          <div className="font-poppins md:h-[198px] h-[69px] mt-[130px] md:px-5 relative w-[23%]">
            <Text
              className="absolute h-max inset-[0] justify-center m-auto sm:text-[35px] md:text-[41px] text-[45px] text-orange-700 w-max"
              size="txtPoppinsMedium45"
            >
              <span className="text-light_blue-900 font-poppins text-left font-medium">
                Our{" "}
              </span>
              <span className="text-black-900 font-poppins text-left font-medium">
                Properties
              </span>
            </Text>
            <Img
              className="absolute bottom-[0] h-[9px] inset-x-[0] mx-auto"
              src="images/img_group1000004827.svg"
              alt="group1000004827"
            />
          </div>
          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[1142px] mt-[145px] md:px-5 w-full">
            <Img
              className="md:flex-1 h-[442px] sm:h-auto object-cover w-[33%] md:w-full"
              src="images/img_image17.png"
              alt="imageSeventeen"
            />
            <div className="h-[442px] md:ml-[0] ml-[18px] relative w-[33%] md:w-full">
              <Img
                className="h-[442px] m-auto object-cover w-full"
                src="images/img_image18.png"
                alt="imageEighteen"
              />
              <Img
                className="absolute h-[442px] inset-[0] justify-center m-auto object-cover w-full"
                src="images/img_image33.png"
                alt="imageThirtyThree"
              />
            </div>
            <Img
              className="md:flex-1 h-[442px] sm:h-auto md:ml-[0] ml-[17px] object-cover w-[33%] md:w-full"
              src="images/img_image19.png"
              alt="imageNineteen"
            />
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-10 items-start justify-between max-w-[1072px] mt-[33px] md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[62%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue-700"
                  size="txtPoppinsMedium30"
                >
                  Commited to Work
                </Text>
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-blue-700"
                  size="txtPoppinsMedium30"
                >
                  Live Detaild ideas
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[91%] md:w-full">
                <Text
                  className="text-[17px] text-blue_gray-900"
                  size="txtPoppinsRegular17"
                >
                  duo hinc ominc maluisst
                </Text>
                <Text
                  className="text-[17px] text-blue_gray-900"
                  size="txtPoppinsRegular17"
                >
                  duo hinc ominc maluisst
                </Text>
              </div>
            </div>
            <div className="flex flex-col justify-start md:mt-0 mt-[3px]">
              <Text
                className="text-3xl sm:text-[26px] md:text-[28px] text-blue-700"
                size="txtPoppinsMedium30"
              >
                With Signiture Style{" "}
              </Text>
              <Text
                className="md:ml-[0] ml-[21px] text-[17px] text-blue_gray-900"
                size="txtPoppinsRegular17"
              >
                duo hinc ominc maluisst
              </Text>
            </div>
          </div>
          <div className="font-inter md:gap-10 gap-[333px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-start justify-between mt-[13px] md:px-5 w-[59%] md:w-full">
            <Text
              className="mb-3.5 text-[17px] text-light_blue-900 w-full"
              size="txtInterBold17"
            >
              _______
            </Text>
            <Text
              className="mb-3.5 text-[17px] text-light_blue-900 w-full"
              size="txtInterBold17"
            >
              _______
            </Text>
            <Text
              className="mt-3.5 text-[17px] text-light_blue-900 w-full"
              size="txtInterBold17"
            >
              _______
            </Text>
          </div>
          <div className="font-poppins md:h-[137px] h-[71px] mt-[69px] md:px-5 relative w-[23%]">
            <Text
              className="absolute inset-x-[0] mx-auto sm:text-[35px] md:text-[41px] text-[45px] text-orange-700 top-[0] w-max"
              size="txtPoppinsMedium45"
            >
              <span className="text-light_blue-900 font-poppins text-left font-medium">
                Our{" "}
              </span>
              <span className="text-black-900 font-poppins text-left font-medium">
                Properties
              </span>
            </Text>
            <Img
              className="absolute bottom-[0] h-[9px] inset-x-[0] mx-auto"
              src="images/img_group1000004828.svg"
              alt="group1000004828"
            />
          </div>
        </div>
        <div className="absolute flex flex-col font-poppins items-start justify-start left-[10%] md:px-5 top-[28%] w-2/5">
          <Text className="text-gray-700_01 text-xl" size="txtPoppinsMedium20">
            BUY A HOME
          </Text>
          <Text
            className="mt-[5px] sm:text-4xl md:text-[38px] text-[40px] text-orange-700 w-[71%] sm:w-full"
            size="txtPoppinsSemiBold40"
          >
            <span className="text-blue-700 font-poppins text-left font-semibold">
              Find, Buy & Own Your
            </span>
            <span className="text-black-900 font-poppins text-left font-semibold">
              {" "}
              Dream Home
            </span>
          </Text>
          <Text
            className="leading-[34.00px] mt-[37px] text-blue_gray-900 text-lg w-[94%] sm:w-full"
            size="txtPoppinsLight18Bluegray900"
          >
            is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters,{" "}
          </Text>
          <Text
            className="leading-[34.00px] mt-[11px] text-blue_gray-900 text-lg w-[94%] sm:w-full"
            size="txtPoppinsLight18Bluegray900"
          >
            is a long established fact that a reader will be distracted by the
            readable content of a page{" "}
          </Text>
          <Button className="bg-blue-700 cursor-pointer font-medium min-w-[175px] mt-[41px] py-3 rounded-[3px] text-center text-lg text-white-A700">
            Explore Buying
          </Button>
          <Text
            className="mt-[273px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-900"
            size="txtPoppinsRegular23"
          >
            Storey of intenax
          </Text>
          <Text
            className="mt-[9px] sm:text-[32px] md:text-[38px] text-[42px] text-orange-700"
            size="txtPoppinsSemiBold42"
          >
            <span className="text-blue-700 font-poppins text-left font-semibold">
              POWER OF
            </span>
            <span className="text-orange-700 font-poppins text-left font-semibold">
              {" "}
            </span>
            <span className="text-black-900 font-poppins text-left font-semibold">
              Decysions.
            </span>
          </Text>
          <div className="bg-white-A700 flex flex-col gap-[9px] items-center justify-center md:ml-[0] ml-[5px] mt-6 p-6 sm:px-5">
            <Text
              className="leading-[34.00px] mt-3.5 text-gray-700_02 text-lg w-full"
              size="txtPoppinsRegular18"
            >
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters,{" "}
            </Text>
            <Text
              className="leading-[35.00px] mb-[15px] text-gray-700_02 text-lg w-full"
              size="txtPoppinsRegular18"
            >
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially un
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col font-poppins items-start justify-start md:px-5 right-[10%] top-[38%] w-2/5">
          <Img
            className="h-[498px] sm:h-auto object-cover w-full"
            src="images/img_rectangle52.png"
            alt="rectangleFiftyTwo"
          />
          <Text
            className="md:ml-[0] ml-[78px] mt-[204px] md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900"
            size="txtPoppinsRegular26"
          >
            Store of intenax
          </Text>
          <Text
            className="md:ml-[0] ml-[78px] mt-[7px] sm:text-[32px] md:text-[38px] text-[42px] text-orange-700"
            size="txtPoppinsSemiBold42"
          >
            <span className="text-blue-700 font-poppins text-left font-semibold">
              Stength of
            </span>
            <span className="text-orange-700 font-poppins text-left font-semibold">
              {" "}
            </span>
            <span className="text-black-900 font-poppins text-left font-semibold">
              plannig .
            </span>
          </Text>
          <div className="bg-white-A700 flex flex-col gap-[35px] items-center justify-start ml-0.5 md:ml-[0] mt-[42px] p-1">
            <Text
              className="leading-[31.00px] mt-[33px] text-gray-700_02 text-lg w-[97%] sm:w-full"
              size="txtPoppinsRegular18"
            >
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as
            </Text>
            <Text
              className="leading-[31.00px] mb-[34px] text-gray-700_02 text-lg w-[95%] sm:w-full"
              size="txtPoppinsRegular18"
            >
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially un
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col font-poppins md:gap-10 gap-[207px] h-max inset-y-[0] justify-start left-[10%] my-auto md:px-5 w-[41%]">
          <Img
            className="h-[498px] sm:h-auto mr-[11px] object-cover w-[99%] md:w-full"
            src="images/img_image25.png"
            alt="imageTwentyFive"
          />
          <Text
            className="md:ml-[0] ml-[365px] md:text-2xl sm:text-[22px] text-[26px] text-blue_gray-900"
            size="txtPoppinsRegular26"
          >
            Quality Of WORK
          </Text>
        </div>
        <div className="absolute flex flex-col gap-2 items-center justify-start md:px-5 right-[11%] top-[28%] w-2/5">
          <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between w-[99%] md:w-full">
            <Img
              className="h-[271px] md:h-auto mb-1 object-cover w-[271px]"
              src="images/img_rectangle6854.png"
              alt="rectangle6854"
            />
            <Img
              className="h-[271px] md:h-auto sm:mt-0 mt-1 object-cover w-[271px]"
              src="images/img_rectangle6856.png"
              alt="rectangle6856"
            />
          </div>
          <div className="flex sm:flex-col flex-row gap-[18px] items-center justify-between w-full">
            <Img
              className="h-[271px] md:h-auto object-cover"
              src="images/img_rectangle6857.png"
              alt="rectangle6857"
            />
            <Img
              className="h-[271px] md:h-auto object-cover"
              src="images/img_rectangle6855.png"
              alt="rectangle6855"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default RelestatewebsitehomepagePage;
