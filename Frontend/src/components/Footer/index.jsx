import React from "react";
import { Heading, Img, Text } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 r w-full mt-[5px] gap-px mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center justify-start  gap-[43px]">
          <div className="flex flex-row justify-start items-start w-full gap-[11px]">
            <Img
              src="images/Logo.png"
              alt="realestateone"
              className="h-10 w-50"
            />
             <Text
            size="md"
            as="p"
            className="mt-[2px] !font-markoone"
            style={{color:"#ff8a00"}}
          >
           Commerce Elite
          </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-7">
            <Heading as="h6" className="!leading-[160%]">
              59 Delhi, India,
              <br />
            </Heading>
            <div className="flex flex-col items-start justify-center gap-2">
              <Heading as="h6" className="mt-px">
                +(123) 456-7890
              </Heading>
              <Heading as="h6">info@mail.com</Heading>
            </div>
            <div className="flex flex-row justify-start w-full gap-3">
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <Img
                  src="images/img_icon_facebook.svg"
                  alt="iconfacebook"
                  className="h-[30px] w-[30px]"
                />
              </div>
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <Img
                  src="images/img_icon_twitter.svg"
                  alt="icontwitter_one"
                  className="h-[30px] w-[30px]"
                />
              </div>
              <Img
                src="images/img_icon_instragram.svg"
                alt="iconinstragram"
                className="h-[30px] w-[30px]"
              />
              <Img
                src="images/img_icon_linked_in.svg"
                alt="iconlinkedin"
                className="h-[30px] w-[30px]"
              />
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <Img
                  src="images/img_icon_youtube.svg"
                  alt="iconyoutube_one"
                  className="h-[30px] w-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-14 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 gap-[200px] ">
          <div className="flex flex-col items-start justify-start  gap-[15px]">
            <Heading size="md" as="h6">
              Features
            </Heading>
            <div className="flex flex-col items-start justify-start w-full gap-[15px]">
              <Heading as="h6">About</Heading>
              <Heading as="h6">Contact</Heading>
              <Heading as="h6">Search</Heading>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start  gap-[15px]">
            <Heading size="md" as="h6">
              Information
            </Heading>
            <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
              <Heading as="h6">Listing</Heading>
              <Heading as="h6">ProductDetails</Heading>
             
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] gap-[15px]">
            <Heading size="md" as="h6">
              Documentation{" "}
            </Heading>
            <div className="flex flex-col items-start justify-center w-full gap-[15px]">
              <Heading as="h6" className="mt-0.5">
                Blog
              </Heading>
              <Heading as="h6">FAQ</Heading>
              <Heading as="h6">
                Privacy Policy
                <br />
              </Heading>
              <Heading as="h6">License</Heading>
            </div>
          </div>
         
          
        </div>
      </div>
    </footer>
  );
}
