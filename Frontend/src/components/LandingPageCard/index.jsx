import React from "react";
import { Heading, Button, Img } from "./..";
import { Link } from "react-router-dom";


export default function LandingPageCard({
  imageOne = "https://img.freepik.com/free-photo/new-smartwatch-balancing-with-hand_23-2150296477.jpg?w=740&t=st=1709358465~exp=1709359065~hmac=53318f1ca6e97164b854e5b99ff5fa565c87816be3ca0ceca607b9ab2e9f133d",
  p286162ndave = "Apple Smartwatch",
  sqftcounter = "Blutooth",
  p1bath = "Family",
  viewDetails = "View Details",
  price = "$649",
  ...props
}) {
  return (
    <div {...props}>
      <Img
        src={imageOne}
        style={{ height: "300px" }}
        alt="image_one"
        className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover"
      />
      <div className="flex flex-row justify-center w-full p-[19px] rounded-bl-[10px] rounded-br-[10px] border-red-100_01 border border-solid bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[25px] my-2.5 max-w-[344px]">
          <div className="flex flex-row justify-start items-center w-full gap-3">
            <Heading as="h1">{p286162ndave}</Heading>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[19px]">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row justify-start items-center gap-3">
                <Img
                  src="images/img_icon_20x20.svg"
                  alt="1032_sqft_one"
                  className="h-5 w-5"
                />
                <Heading as="h4" className="!text-gray-700">
                  {sqftcounter}
                </Heading>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <Img
                  src="images/img_iocn_menu.svg"
                  alt="family_one"
                  className="h-5 w-5"
                />
                <Heading as="h5" className="!text-gray-700">
                  {p1bath}
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center w-full pr-[47px]">
            <Link to='/listingmapview'>
            <Button className="h-12 px-[31px] text-white-A700 text-base font-semibold bg-gray-900 min-w-[156px] rounded-[10px]">
              {viewDetails}
            </Button>
            </Link>
            <Heading size="2xl" as="h6" className="tracking-[-0.48px]">
              {price}
            </Heading>
          </div>
        </div>
      </div>
    </div>
  );
}
