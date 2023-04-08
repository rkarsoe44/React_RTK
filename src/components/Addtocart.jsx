import React from "react";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Addtocart = () => {
  const { cartItems, totalAmount, quantity } = useSelector(
    (state) => state.cart,
  );
console.log(cartItems);
  if (cartItems.length === 0) {
    return (
      <div className=" flex flex-col gap-5 justify-center h-screen items-center">
        <h2 className=" text-3xl text-gray-600 tracking-wide ">
          Your Cart is empty
        </h2>
        <Link to={'/'}>
          <button className=" px-4 py-1 bg-purple-700 text-white">
            Fill it
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className=" flex flex-wrap items-center mt-20 gap-7 justify-center">
        {cartItems.map((item) => {
          return <Cart key={item.id} {...item} />;
        })}
      </div>
      <hr className=" w-[70%] mx-auto my-5" />
      <div className=" flex w-[70%] mx-auto justify-between">
        <h2 className="text-3xl font-bold">Total</h2>
        <p className=" text-2xl ">${totalAmount.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Addtocart;
