import React, { useEffect, useState } from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Heading, Text } from "./..";
import { Link } from "react-router-dom";
import { DialogTitle, Drawer, Input, ModalClose } from "@mui/joy";
import { useMediaQuery } from "react-responsive";

export default function Header({ ...props }) {
  const [searchBarValue1, setSearchBarValue1] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 992); // Adjust the breakpoint as needed
  const isLargeScreen = useMediaQuery({ minWidth: 800 });
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <header {...props}>
      <div className="flex flex-row justify-between items-center w-full mx-auto max-w-[1200px]">
        <div className="flex flex-row justify-start items-start gap-[11px]">
          <Img
            src="images/Logo.png"
            alt="realestateone"
            className="h-10 w-50"
          />
          <Text
            size="md"
            as="p"
            className="mt-[2px] !font-markoone"
            style={{ color: "#ff8a00" }}
          >
            Commerce Elite
          </Text>
        </div>
        {isSmallScreen && (
          <div
            variant="soft"
            color="none"
            className=" lg:hidden" // Hide on large screens
            lg={{ className: "hidden" }}
            type="button"
            onClick={() => setOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
        )}
        <Drawer
          style={{ width: "100%", backgroundColor: "black" }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <ModalClose />
          <DialogTitle>
            <div className="text-center m-auto py-5">
              <div className="mb-4" onClick={() => setOpen(false)}>
                <Link to="/" className="">
                  <Heading as="h6">Home</Heading>
                </Link>
              </div>
              <div onClick={() => setOpen(false)}>
                <Link to="/listingmapview" className=" ">
                  <Heading as="h6">Listed Product </Heading>
                </Link>
              </div>
              <div className="mt-4" onClick={() => setOpen(false)}>
                <Link to="/aboutus">
                  <Heading as="h6">About</Heading>
                </Link>
              </div>
              <div className="mt-4" onClick={() => setOpen(false)}>
                <Link to="/cart">
                  <Heading as="h6">Cart</Heading>
                </Link>
              </div>
            </div>
          </DialogTitle>
        </Drawer>
        <div className={isLargeScreen ? "flex flex-col" : "hidden lg:flex flex-col"}>
          <div className="flex items-center justify-center  w-[100%] gap-14">
            <Link to="/" className="">
              <Heading as="h6">Home</Heading>
            </Link>
            <Link to="/listingmapview" className=" ">
              <Heading as="h6">ListedProduct </Heading>
            </Link>
            <Link to="/aboutus">
              <Heading as="h6">About</Heading>
            </Link>
            <Link to="/cart">
              <Heading as="h6">Cart</Heading>
            </Link>
          </div>
        </div>
        <div className={isLargeScreen ? "flex flex-col" : "hidden lg:flex flex-col"}>
          <div className="flex-row justify-start items-center  gap-2.5 flex">
            <Input
              name="search"
              placeholder="Search"
              value={searchBarValue1}
              onChange={(e) => setSearchBarValue1(e)}
              startDecorator={
                <Img
                  src="images/img_icon_24px_search.svg"
                  alt="icon / 24px / search"
                  className="cursor-pointer"
                />
              }
              className="gap-2 text-gray-900 font-bold"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
