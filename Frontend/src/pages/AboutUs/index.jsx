import React from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Text, Heading, Img } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useMediaQuery } from "react-responsive";

export default function AboutUsPage() {
  const isLargeScreen = useMediaQuery({ minWidth: 800 });
  return (
    <>
      <Helmet>
        <title>E-Commerce</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[100px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[38px] max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <Heading
                  size="6xl"
                  as="h1"
                  className="tracking-[-1.08px] text-center"
                >
                  Reimagining real World Product to <br />
                  make it easier to unlock.
                </Heading>
                <Text as="p" className="text-center">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who <br />
                  are so beguiled and demoralized by the charms of pleasure of
                  the moment, <br />
                  so blinded by desire, that they cannot foresee the pain and
                  trouble.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-6 p-8">
                <div className="flex flex-row justify-start w-full gap-6">
                  <Img
                    src="https://img.freepik.com/free-psd/minimal-technology-horizontal-banner-template_23-2149351224.jpg?w=996&t=st=1709361816~exp=1709362416~hmac=3f2a15c274ba1893ceaa25d86dab333405565c62d5a1eb99520195869411a81b"
                    alt="image"
                    className="w-[66%] object-cover rounded-[10px]"
                  />
                  <Img
                    src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309643.jpg?w=826&t=st=1709361748~exp=1709362348~hmac=c1828e66ec8406ddbcbea89928131f4310607445d3d25ed100191a31892d3087"
                    alt="image_one"
                    className="w-[32%] object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-row justify-start w-full gap-6">
                  <Img
                    src="images/img_rectangle_5595.png"
                    alt="image_two"
                    className="w-[32%] object-cover rounded-[10px]"
                  />
                  <Img
                    src="https://img.freepik.com/free-psd/flat-design-black-friday-template_23-2149690283.jpg?w=996&t=st=1709361771~exp=1709362371~hmac=52a6ce41236437217a36051bd78aa1e684774b1b0661a0d5474e46ded7cd787c"
                    alt="image_three"
                    className="w-[66%] object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>
         
          
          
          <div className="flex flex-row justify-end w-full pl-14 pr-[120px]">
            <div className="flex flex-row justify-between items-center w-full gap-10 mx-auto max-w-[1150px]">
          <div className={isLargeScreen ? "flex flex-col" : "hidden lg:flex flex-col"}>
              <Img
                src="images/img_rectangle_20_589x496.png"
                alt="image_five"
                className=" object-cover rounded-[10px]"
                />
                </div>
              <div className="flex flex-col items-center justify-start  gap-14">
                <div className="flex flex-col items-start justify-start w-full pt-[5px] gap-3.5">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    Our vision is simple.
                  </Heading>
                  <Text as="p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, On the other hand, we
                    denounce with righteous indignation and dislike men who are
                    so beguiled and demoralized by the charms of pleasure of the
                    moment.
                    <br />
                    In a free hour, On the other hand, we denounce with
                    righteous indignation and dislike men .
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-[9px]">
                  <Heading size="lg" as="h3" className="tracking-[-0.40px]">
                    Kausar Pial
                  </Heading>
                  <Heading
                    size="md"
                    as="h4"
                    className="mb-0.5 !text-gray-700 !font-semibold"
                  >
                    CEO at Static Mania
                  </Heading>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[58px] max-w-[1200px]">
              <Heading
                size="4xl"
                as="h2"
                className="tracking-[-0.72px] text-center"
              >
                Team members
              </Heading>
              <div className="justify-center w-full gap-6 grid-cols-4 grid min-h-[auto]">
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5596.png"
                    alt="kausar_pial_one"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading size="lg" as="h3" className="tracking-[-0.40px]">
                      Kausar Pial
                    </Heading>
                    <Text as="p" className="mb-0.5">
                      CEO
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5597.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-px py-0.5">
                    <Heading size="lg" as="h4" className="tracking-[-0.40px]">
                      Floyd Miles
                    </Heading>
                    <Text as="p">President of Sales</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5598.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Darlene Robertson
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5599.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading
                      size="lg"
                      as="h6"
                      className="mt-0.5 tracking-[-0.40px]"
                    >
                      Guy Hawkins
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5600.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Jerome Bell
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5601.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading
                      size="lg"
                      as="h5"
                      className="mt-0.5 tracking-[-0.40px]"
                    >
                      Ralph Edwards
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5602.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading
                      size="lg"
                      as="h5"
                      className="mt-0.5 tracking-[-0.40px]"
                    >
                      Arlene McCoy
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5603.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                    <Heading size="lg" as="h5" className="tracking-[-0.40px]">
                      Devon Lane
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5604.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading
                      size="lg"
                      as="h5"
                      className="mt-0.5 tracking-[-0.40px]"
                    >
                      Courtney Henry
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5605.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading
                      size="lg"
                      as="h5"
                      className="mt-0.5 tracking-[-0.40px]"
                    >
                      Bessie Cooper
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5606.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading
                      size="lg"
                      as="h5"
                      className="mt-0.5 tracking-[-0.40px]"
                    >
                      Cody Fisher
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img
                    src="images/img_rectangle_5607.png"
                    alt="image"
                    className="w-[282px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-col items-start justify-center w-full gap-[3px]">
                    <Heading
                      size="lg"
                      as="h5"
                      className="mt-0.5 tracking-[-0.40px]"
                    >
                      Cody Fisher
                    </Heading>
                    <Text as="p">Marketing Coordinator</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full px-14 py-[120px] bg-gray-900">
            <div className="flex flex-col items-center justify-start w-full gap-[118px] max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full gap-[30px] p-10 bg-gray-400_01 rounded-[10px]">
                <div className="flex flex-col items-center justify-start  pt-[3px] gap-[5px]">
                  <Heading size="3xl" as="h3" className="tracking-[-0.56px]">
                    For Recent Update, News.
                  </Heading>
                  <Text as="p" className="!text-gray-900 text-center">
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
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
