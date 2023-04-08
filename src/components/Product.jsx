import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../feature/services/cartSlice";

const Product = (props) => {
  const { id, title, image, price, description } = props;
  const {cartItems,} = useSelector(state => state.cart)
  // console.log(cartItems);
  const dispatch = useDispatch()
  return (
    <div>
      <div className=" flex flex-col p-7 w-72 shadow-lg rounded">
        <img src={image} className=" max-w-[120px] h-[200px]" alt="" />
        <div className=" flex flex-col gap-4 mt-3">
          <h2 className="">{title.substring(0, 25)}...</h2>
          <p>${price}</p>
          <button onClick={() => dispatch(addToCart(props))} className=" bg-purple-800 text-white px-6 py-1 ">
            Add to cart
          </button>
        </div>
      </div>
    
    </div>
  );
};

export default Product;
