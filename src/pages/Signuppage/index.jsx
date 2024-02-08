import React from "react";

import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { registerDeviceAuth } from "service/api";

import { Button, Img, Line, Text } from "components";

import "react-toastify/dist/ReactToastify.css";

const SignuppagePage = () => {
  const [register, setRegister] = React.useState();
  const navigate = useNavigate();

  function signup() {
    const req = {};

    registerDeviceAuth(req)
      .then((res) => {
        setRegister(res?.data);

        navigate("/realestateloginpage");
      })
      .catch((err) => {
        console.error(err);
        toast.error("please enter valid details");
      });
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex md:flex-col flex-row gap-[46px] items-center justify-start p-[109px] md:px-10 sm:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[41px] p-[42px] md:px-5 rounded-lg w-[44%] md:w-full">
            <div className="flex flex-col md:gap-10 gap-[60px] justify-start mb-[60px] w-[96%] md:w-full">
              <Text
                className="md:ml-[0] ml-[159px] sm:text-[31px] md:text-[33px] text-[35px] text-blue-700"
                size="txtInterMedium35"
              >
                Sign Up
              </Text>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="ml-1.5 md:ml-[0] text-black-900 text-lg"
                  size="txtInterLight18"
                >
                  I am
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[5px] mt-[15px] w-[99%] md:w-full">
                  <div className="border border-black-900 border-solid h-[18px] rounded-[50%] w-[18px]"></div>
                  <Text
                    className="ml-2.5 sm:ml-[0] text-black-900 text-lg"
                    size="txtInterLight18"
                  >
                    Buyer/Owner/Tenat
                  </Text>
                  <div className="border border-black-900 border-solid h-[18px] ml-5 sm:ml-[0] rounded-[50%] w-[18px]"></div>
                  <Text
                    className="ml-2 sm:ml-[0] text-black-900 text-lg"
                    size="txtInterLight18"
                  >
                    Agent
                  </Text>
                  <div className="border border-black-900 border-solid h-[18px] sm:ml-[0] ml-[51px] rounded-[50%] w-[18px]"></div>
                  <Text
                    className="ml-2 sm:ml-[0] text-black-900 text-lg"
                    size="txtInterLight18"
                  >
                    Builder
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-start justify-start md:ml-[0] ml-[3px] mt-[45px] w-[18%] md:w-full">
                  <Img
                    className="h-[18px] w-[19px]"
                    src="images/img_lock_gray_900_02.svg"
                    alt="lock"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtInterRegular16Black900"
                  >
                    Name
                  </Text>
                </div>
                <Line className="bg-gray-500 h-px mt-9 rounded-[1px] w-[84%]" />
                <div className="flex flex-row gap-[13px] items-center justify-start md:ml-[0] ml-[3px] mt-[21px] w-[17%] md:w-full">
                  <Img
                    className="h-[15px]"
                    src="images/img_vector.svg"
                    alt="vector"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtInterRegular16Black900"
                  >
                    Email
                  </Text>
                </div>
                <Line className="bg-gray-500 h-px mt-9 rounded-[1px] w-[84%]" />
                <div className="flex flex-row gap-[13px] items-center justify-start ml-0.5 md:ml-[0] mt-[21px] w-1/4 md:w-full">
                  <Img
                    className="h-5 w-5"
                    src="images/img_location.svg"
                    alt="location"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtInterRegular16Black900"
                  >
                    Password
                  </Text>
                </div>
                <Line className="bg-gray-500 h-px mt-9 rounded-[1px] w-[84%]" />
                <div className="flex flex-row gap-4 items-center justify-start md:ml-[0] ml-[5px] mt-5 w-[35%] md:w-full">
                  <Img
                    className="h-[22px]"
                    src="images/img_minimize.svg"
                    alt="minimize"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtInterRegular16Black900"
                  >
                    Mobile Number
                  </Text>
                </div>
                <Line className="bg-gray-500 h-px mt-9 rounded-[1px] w-[84%]" />
                <Button
                  className="common-pointer bg-blue-700 cursor-pointer font-medium leading-[normal] min-w-[124px] md:ml-[0] ml-[126px] mt-[71px] py-[7px] rounded-sm text-center text-white-A700 text-xl"
                  onClick={() => {
                    signup();
                  }}
                >
                  Sign Up
                </Button>
                <div className="flex flex-row items-center justify-start md:ml-[0] ml-[101px] mt-[25px] w-[48%] md:w-full">
                  <Text
                    className="text-black-900 text-sm"
                    size="txtInterRegular14"
                  >
                    Already registered?{" "}
                  </Text>
                  <a className="ml-[5px] text-blue-700 text-sm">
                    <Text
                      className="common-pointer"
                      size="txtInterRegular14Blue700"
                      onClick={() => navigate("/realestateloginpage")}
                    >
                      Login Now
                    </Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="md:flex-1 h-[805px] sm:h-auto object-cover w-[47%] md:w-full"
            alt="rectangle6846"
            src={register?.message}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignuppagePage;
