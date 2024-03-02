

import axios from "axios";
import { Button, Heading, Img } from "components";
import { useEffect, useState } from "react";
import "./cartpage.css";
export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const fetchCartItems = () => {
    axios
      .get("http://localhost:3001/api/cart/items")
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error("Error Fetching Cart Items: ", error);
      });
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/api/cart/remove/${productId}`);
      // Fetch cart items after successful removal
      fetchCartItems();
    } catch (error) {
      console.error("Error removing item from cart: ", error);
    }
  };
  const handleCheckout = () => {
    setCheckoutVisible(true);
    // Simulating a delay to mimic a real-world checkout process
    setTimeout(() => {
      setOrderPlaced(true);
    }, 2000); // Adjust the delay based on your animation duration
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-start gap-14 overflow-auto">
        <div className="grid grid-cols-3 sm:grid-cols-1 lg:grid-cols-3 gap-6">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.cartItem._id}
                  className="bg-white p-4 rounded-md shadow-md mb-4"
                >
                  <Img
                    src={item.productDetails.image}
                    alt={item.productDetails.name}
                    className="w-full h-32 object-cover mb-4 rounded-lg"
                  />
                  <strong className="text-lg font-semibold">
                    {item.productDetails.name}
                  </strong>
                  <p className="text-gray-700">
                    Price: ${item.productDetails.price}
                  </p>
                  <p className="text-gray-700">
                    Quantity: {item.cartItem.quantity}
                  </p>
                  {/* Add other product details as needed */}
                  <Button
                    className="mt-3"
                    style={{ width: "100%" }}
                    onClick={() =>
                      handleRemoveFromCart(item.cartItem.productId)
                    }
                  >
                    Remove from Cart
                  </Button>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="mt-8">
          <Button onClick={handleCheckout}>Checkout</Button>
        </div>
        {checkoutVisible && (
          <div className="checkout-message px-10">
            <Heading size="lg"  className="text-green-500 mb-2" style={{fontSize:"40px"}}>
              Order Placed Successfully!
            </Heading>
            <p style={{fontSize:"30px"}}>Thank you for shopping with us. Your order is on the way!</p>
          </div> 
        )}
      </div> 
    </div>
  );
}
