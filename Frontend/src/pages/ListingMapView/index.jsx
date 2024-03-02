import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Button, Heading, Text, Img } from "../../components";
import axios from "axios";
import { Input } from "@mui/joy";
import { useNavigate } from "react-router-dom";

// export const Img = ({ src, alt, className, ...props }) => {
//   return (
//     <img src={src} alt={alt} className={className} loading="lazy" {...props} />
//   );
// };
export default function ListingMapViewPage() {
  const [searchBarValue, setSearchBarValue] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => {
        console.error("Error Fetching Product: ", error);
      });
  }, []);

  const addToCart = async (productId) => {
    try {
      console.log("Adding to cart. ProductId:", productId);
      const response = await axios.post("http://localhost:3001/api/cart/add", {
        productId,
        quantity: 1,
      });
      console.log("Response from server:", response.data);
      const { cartItem } = response.data;
      setCart([...cart, cartItem]);
      alert("Product Added in Cart Successfully")
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchBarValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleInputChange = (event) => {
    setSearchBarValue(event.target.value);
  };
  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <Helmet>
        <title>E-Commerce</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-10 overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-start justify-start w-full gap-5 max-w-[1200px] mx-auto px-4">
          <Heading size="4xl" as="h1" className=" ">
            Find Property
          </Heading>
          <div className="flex flex-col items-center justify-start w-full gap-3">
            <div className="flex flex-row justify-between w-full gap-5">
              <Input
                type="text"
                placeholder="Search Products"
                value={searchBarValue}
                onChange={handleInputChange}
                endDecorator={
                  searchBarValue.length > 0 ? (
                    <CloseSVG
                      onClick={() => setSearchBarValue("")}
                      height={24}
                      width={24}
                      fillColor="#626262ff"
                    />
                  ) : (
                    <Img
                      src="images/img_icon_24px_search_gray_700.svg"
                      alt="icon / 24px / search"
                      className="cursor-pointer"
                    />
                  )
                }
                className="w-full md:w-[50%] !text-gray-700 font-semibold border-blue_gray-100_01 border border-solid"
                style={{ borderRadius: "15px" }}
              />

              <Button
                size="4xl"
                onClick={handleSearch}
                rightIcon={
                  <Img
                    src="images/img_icon_20px_search.svg"
                    alt="icon / 20px / search"
                  />
                }
                className="gap-2.5 font-bold min-w-[124px]"
              >
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-full gap-10 max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 gap-10">
              {filteredProducts.map((product) => (
                <div
                  key={product._id}
                  // onClick={() => setSelectedProduct(product)}
                  className="flex flex-col items-center justify-start gap-5 my-2.5 w-full max-w-[544px] mx-auto p-[19px] rounded-[10px] border-red-100_01 border border-solid bg-gray-50_01"
                >
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-row justify-start items-center ">
                        <Img
                          src={product.Image}
                          style={{ height: "300px" }}
                          alt="image_one"
                          className="w-full rounded-[5px]  object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full gap-3">
                    <Heading as="h1">{product.name}</Heading>
                    <Heading size="2xl" as="h6" className="tracking-[-0.48px]">
                      $ {product.Price}
                    </Heading>
                  </div>
                  <Heading as="h4" className="!text-gray-700">
                    {product.Features}
                  </Heading>
                  <div className="flex flex-row justify-between items-center w-full ">
                    <Button
                      onClick={() => openModal(product)}
                      className="h-12 px-4 text-white-A700 text-base font-semibold bg-gray-900 min-w-[156px] rounded-[10px]"
                    >
                      View Details
                    </Button>
                    <Button
                      onClick={() => addToCart(product._id)}
                      className="h-12 px-4 text-white-A700 text-base font-semibold bg-gray-900 min-w-[156px] rounded-[10px]"
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {selectedProduct && (
            <div className="fixed inset-0 flex items-center justify-center w-full   overflow-y-auto">
              <div
                className="absolute bg-gray-900 bg-opacity-50 inset-0"
                onClick={closeModal}
              ></div>
              <div className="z-10  w-[70%]  " style={{ borderRadius: "20px" }}>
                <div
                  className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01 mb-5"
                  style={{ borderRadius: "20px" }}
                >
                  <div className="flex flex-col items-center justify-start w-full gap-[60px]">
                    <div className="flex  items-center justify-between w-full mt-14 gap-10">
                      <div className="flex  justify-center pl-12  ">
                        <Img
                          src={selectedProduct.Image}
                          alt="image"
                          className="w-[500px] h-[300px] object-cover  rounded-[10px]"
                        />
                      </div>
                      <div className=" p-6 flex flex-col items-center justify-start  gap-11 mb-10 mr-10  border border-solid bg-white-A700 rounded-[10px]">
                        <div className="flex flex-col items-start justify-start gap-[22px]">
                          <div className="flex flex-col items-start justify-start w-full gap-[17px]">
                            <Heading
                              size="3xl"
                              as="h1"
                              className="tracking-[-0.56px] mt-2"
                            >
                              <Heading as="h1">{selectedProduct.name}</Heading>
                              <p>Features: {selectedProduct.Features}</p>
                            </Heading>
                          </div>
                          <div className="flex flex-row w-3/4 gap-4">
                            <div className="flex flex-col items-start justify-start gap-[5px] p-[5px] border-gray-600_02 border border-solid bg-white-A700 rounded-[10px]">
                              <Heading
                                size="2xl"
                                as="h3"
                                className="ml-[17px] tracking-[-0.48px]"
                              >
                                $ {selectedProduct.Price}
                              </Heading>
                              <Heading
                                size="xs"
                                as="h4"
                                className="ml-[17px] !text-gray-600_02"
                              >
                                Online / Cash Payment
                              </Heading>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full p-5 gap-3">
                          <Text as="p" className="!text-gray-600_02">
                            A slider is great way to display a slideshow
                            featuring images or videos, usually on your
                            homepage.
                          </Text>
                        </div>
                        <div className="flex flex-col items-center  w-full mb-3 ">
                          <div className="flex flex-row justify-center ">
                            <Button
                              size="lg"
                              className="font-semibold w-full min-w-[119px]"
                            >
                              Buy
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button
                  onClick={closeModal}
                  className="h-12 w-full text-white-A700 text-base font-semibold  rounded-[10px]"
                  style={{ background: "#ff8a00" }}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row justify-start gap-[5px]">
              <Button
                color="gray_700"
                variant="outline"
                className="font-semibold min-w-[48px]"
              >
                1
              </Button>
              <Button
                color="blue_gray_100_02"
                variant="outline"
                className="font-semibold min-w-[48px]"
              >
                2
              </Button>
              <Button
                color="blue_gray_100_02"
                variant="outline"
                className="font-semibold min-w-[48px]"
              >
                3
              </Button>
              <Button
                color="blue_gray_100_02"
                variant="outline"
                className="font-semibold min-w-[48px]"
              >
                4
              </Button>
              <Button
                color="blue_gray_100_02"
                variant="outline"
                className="font-semibold min-w-[48px]"
              >
                5
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
