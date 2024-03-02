import React from "react";
import { Helmet } from "react-helmet";
import { Heading, Img, Text, Button, Input } from "../../components";
import Header from "../../components/Header";
import LandingPageCard from "../../components/LandingPageCard";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function LandingPagePage() {
  const isLargeScreen = useMediaQuery({ minWidth: 800 });
  return (
    <>
      <Helmet>
        <title>E-Commerce </title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[99px] overflow-auto bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-end w-full py-[50px] bg-blue-100">
            <div className="flex flex-row justify-between items-center w-full mx-auto gap-10 max-w-[1396px]">
              <div className="flex flex-col items-center justify-start p-3  gap-10">
                <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                  <Heading size="5xl" as="h1" className="tracking-[-0.92px]">
                    Find a perfect E-Commerce
                    <br />
                    {`Where you'll love to Shopping`}
                  </Heading>
                  <Text size="md" as="p">
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="flex flex-row justify-center w-full p-6 bg-white-A700 rounded-[16px]">
                  <Tabs
                    className="flex flex-col items-center justify-start w-full gap-[38px]"
                    selectedTabClassName="!text-white-A700 bg-gray-900 rounded-[10px]"
                    selectedTabPanelClassName="relative tab-panel--selected"
                  >
                    <TabList className="flex flex-row justify-center w-full  p-[9px]">
                      <Tab className="text-gray-900 text-lg font-bold px-10 py-1  ">
                        Buy
                      </Tab>
                    </TabList>
                    {[...Array(3)].map((_, index) => (
                      <TabPanel
                        key={`tab-panel${index}`}
                        className="items-center w-full absolute"
                      >
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full gap-6">
                            <div className="flex flex-col items-center justify-start w-full gap-5">
                              <Input
                                name="Product"
                                placeholder="Product"
                                className="w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                              />
                              <Input
                                name="icon20pxupdowna"
                                placeholder="Product Type"
                                suffix={
                                  <Img
                                    src="images/img_icon_20px_updown_arrow.svg"
                                    alt="icon / 20px / up-down arrow"
                                  />
                                }
                                className="w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                              />
                              <Input
                                name="price"
                                placeholder="Price Range"
                                suffix={
                                  <Img
                                    src="images/img_icon_20px_updown_arrow.svg"
                                    alt="icon / 20px / up-down arrow"
                                  />
                                }
                                className="w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                              />
                            </div>
                            <Link to="/listingmapview" className="w-full">
                              <div className="w-full">
                                <Button size="4xl" className="w-full font-bold">
                                  Search
                                </Button>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </TabPanel>
                    ))}
                  </Tabs>
                </div>
              </div>
              <div className={isLargeScreen ? "flex flex-col" : "hidden lg:flex flex-col"}>
                <Img
                  src="https://img.freepik.com/free-vector/online-shopping-banner-mobile-app-templates-concept-flat-design_1150-34862.jpg?w=740&t=st=1709354333~exp=1709354933~hmac=85702edb07f5b454d96f5baa6ae3394dd91465329137981116df8710f856bfba"
                  alt="image_one"
                  className="w-[100%] object-cover"
                  style={{ borderRadius: "25px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-start w-full gap-6 p-4 max-w-[1200px]">
            <div className="flex flex-col items-start justify-center   gap-[49px] p-[50px] bg-red-100 rounded-[20px]">
              <div className="flex flex-col items-center justify-start mt-[23px] gap-[15px]">
                <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                  Simple & easy way to find your dream Product
                </Heading>
                <Text as="p" className="!text-gray-900">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.{" "}
                </Text>
              </div>
              <Button className="mb-[23px] font-semibold min-w-[138px]">
                Get Started
              </Button>
            </div>
            <div className={isLargeScreen ? "flex flex-col" : "hidden lg:flex flex-col"}>
            <div className=" gap-6 grid-cols-2 grid min-h-[auto]">
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Img
                  src="images/img_search_status.svg"
                  alt="image"
                  className="h-[30px] w-[30px] mt-[7px]"
                />
                <Heading
                  size="3xl"
                  as="h3"
                  className="mb-[7px] tracking-[-0.56px]"
                >
                  Search <br />
                  your Product
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Img
                  src="images/img_eye.svg"
                  alt="eye_one"
                  className="h-[30px] w-[30px] mt-[7px]"
                />
                <Heading
                  size="3xl"
                  as="h4"
                  className="mb-[7px] tracking-[-0.56px]"
                >
                  Visit <br />
                  Store
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Img
                  src="images/img_wallet.svg"
                  alt="wallet_one"
                  className="h-[30px] w-[30px] mt-[7px]"
                />
                <Heading
                  size="3xl"
                  as="h5"
                  className="mb-[7px] tracking-[-0.56px]"
                >
                  Get your <br />
                  dream Product
                </Heading>
              </div>
              <div className="flex flex-col items-start justify-center w-full gap-5 p-[30px] bg-deep_orange-50 rounded-[20px]">
                <Img
                  src="images/img_emoji_happy.svg"
                  alt="emojihappy_one"
                  className="h-[30px] w-[30px] mt-[7px]"
                />
                <Heading
                  size="3xl"
                  as="h6"
                  className="mb-[7px] tracking-[-0.56px]"
                >
                  Enjoy your <br />
                  Product
                </Heading>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className={isLargeScreen ? "flex flex-col" : "hidden lg:flex flex-col"}>
        <div className="flex flex-row justify-center w-full p-[50px] bg-blue-100">
          <div className="flex flex-row justify-center w-full mx-[70px] max-w-[1200px]">
            <div className="flex flex-row w-full gap-[100px]">
              <div className="flex flex-col items-start justify-start w-[19%] gap-[18px]">
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="circle"
                  className="w-[60px]"
                >
                  <Img src="images/img_frame.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="5xl" as="h2" className="tracking-[-0.92px]">
                    $15.4M
                  </Heading>
                  <Heading
                    size="lg"
                    as="h3"
                    className="!text-blue_gray-600 tracking-[-0.40px]"
                  >
                    Owned from
                    <br />
                    Product transactions
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] gap-[18px]">
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="circle"
                  className="w-[60px]"
                >
                  <Img src="images/img_frame_orange_a700.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="5xl" as="h4" className="tracking-[-0.92px]">
                    25K+
                  </Heading>
                  <Heading
                    size="lg"
                    as="h5"
                    className="!text-blue_gray-600 tracking-[-0.40px]"
                  >
                    Product for Buy & sell Successfully
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] gap-[18px]">
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="circle"
                  className="w-[60px]"
                >
                  <Img src="images/img_icon.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="5xl" as="h6" className="tracking-[-0.92px]">
                    500
                  </Heading>
                  <Heading
                    size="lg"
                    as="h5"
                    className="!text-blue_gray-600 tracking-[-0.40px]"
                  >
                    Daily completed <br />
                    transactions
                  </Heading>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[19%] mb-[26px] gap-[18px]">
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="circle"
                  className="w-[60px]"
                >
                  <Img src="images/img_icon_orange_a700.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-4">
                  <Heading size="5xl" as="h1" className="tracking-[-0.92px]">
                    600+
                  </Heading>
                  <Heading
                    size="lg"
                    as="h5"
                    className="!text-blue_gray-600 tracking-[-0.40px]"
                  >
                    Reagular Clients
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full p-5">
          <div className="flex flex-col items-center justify-start  w-full gap-[53px] max-w-[1200px]">
            <div className="flex flex-row justify-center w-full  pt-[5px]">
              <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                <div className="flex flex-row justify-between items-start w-full">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    Featured Product
                  </Heading>
                  <Link
                    to="/listingmapview"
                    className="flex flex-row justify-start items-center mt-[7px] gap-2"
                  >
                    <Heading
                      size="md"
                      as="h3"
                      className="mt-0.5 !text-orange-A700"
                    >
                      Explore All
                    </Heading>
                    <Img
                      src="images/img_icon_24px_v.svg"
                      alt="icon24pxv_one"
                      className="h-6 w-6"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 gap-10">
              <LandingPageCard className="flex flex-col items-center justify-start w-full" />
              <LandingPageCard
                imageOne="https://img.freepik.com/free-photo/top-view-virtual-reality-headset-white-headphones_23-2148912739.jpg?w=996&t=st=1709358470~exp=1709359070~hmac=7702c17e6b8a0fc838e66b0baae8f7a3d0ce152183211d9d20282482a00a3828"
                className="flex flex-col items-center justify-start w-full"
                p286162ndave="AR VR"
              />
              <LandingPageCard
                imageOne="https://img.freepik.com/free-photo/levitating-product-display-with-headphones_23-2149670637.jpg?w=826&t=st=1709358461~exp=1709359061~hmac=073584b19f1220d4e41b18d59dacaac5b3756800f2893d49c8ff39666dfbcd79"
                className="flex flex-col items-center justify-start w-full"
                p286162ndave="Headphone"
              />
            </div>
          </div>
        </div>
        <div className={isLargeScreen ? "flex flex-col" : "hidden lg:flex flex-col"}>
        <div className="flex flex-col items-center justify-start w-full gap-6">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row justify-center w-full max-w-[1010px]">
              <div className="flex flex-row justify-between w-full">
                <Img
                  src="images/img_rectangle_5591.png"
                  alt="image_seven"
                  className="w-[46%] object-cover rounded-lg"
                />
                <div className="flex flex-row justify-center w-[46%]">
                  <div className="flex flex-col items-center justify-start w-full gap-[30px]">
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="flex flex-col items-start justify-center gap-[5px]">
                        <Heading
                          size="3xl"
                          as="h2"
                          className="mt-0.5 tracking-[-0.56px]"
                        >
                          Taylor Wilson
                        </Heading>
                        <Heading size="md" as="h3" className="!font-semibold">
                          Product Manager - Static Mania
                        </Heading>
                      </div>
                      <Img
                        src="images/img_shape.svg"
                        alt="shape_one"
                        className="h-[51px]"
                      />
                    </div>
                    <Heading
                      size="2xl"
                      as="h4"
                      className="!text-gray-700 !font-semibold !leading-[165%]"
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis deleniti ad nobis maiores commodi dolor, quidem
                      soluta itaque magnam eius.
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-end w-full pl-14 pr-[215px] gap-[270px]">
            <div className="flex flex-row justify-start items-center w-[10%] gap-2">
              <Img
                src="images/img_icon_24px_v_gray_600.svg"
                alt="icon24pxv_three"
                className="h-6 w-6"
              />
              <Heading size="md" as="h2" className="!text-gray-600">
                Previews
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-center w-[7%] gap-2">
              <Heading size="md" as="h3" className="mt-px !text-orange-A700">
                Next
              </Heading>
              <Img
                src="images/img_icon_24px_v.svg"
                alt="icon24pxv_five"
                className="h-6 w-6"
              />
            </div>
          </div>
        </div>
        </div>
        <div className="flex flex-row justify-center w-full px-14 py-[120px] bg-gray-900">
          <div className="flex flex-col items-center justify-start w-full gap-[118px] max-w-[1200px]">
            <div className="flex flex-col items-center justify-start w-full gap-[60px]"></div>
            <div className="flex flex-col items-center justify-start w-full gap-[30px] p-10 bg-gray-400_01 rounded-[10px]">
              <div className="flex flex-col items-center justify-start  pt-[3px] gap-[5px]">
                <Heading
                  size="3xl"
                  as="h3"
                  className="tracking-[-0.56px] text-center"
                >
                  For Recent Update, News.
                </Heading>
                <Text as="p" className="!text-gray-900 text-center">
                  We helps businesses customize, automate and scale up their ad
                  production and delivery.
                </Text>
              </div>
              <div className="flex flex-col justify-start  gap-2">
                <Input
                  color="gray_50_02"
                  size="sm"
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className=" font-semibold"
                />
                <Button className="font-semibold min-w-[126px]">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
