import React from "react";
import { Badge } from "@mantine/core";
import { useDispatch } from "react-redux";
import { addItemsQuantity, removeFromCart } from "../feature/services/cartSlice";

const Cart = (props) => {
  const { id, title, price, description, image,quantity } = props;
  
  const dispatch = useDispatch()
  const oneItemPrice = quantity * price
  return (
    <div>
      <div className=" flex flex-col relative ">
      <div onClick={() => dispatch(removeFromCart(props))}>
        <Badge className=" cursor-pointer top-[-15px] right-[-10px] absolute" color="violet">
          x
        </Badge>
      </div>
        <div className=" flex justify-between w-96 items-center bg-gray-50 p-5">
          <div className=" flex items-center gap-5">
            <img className=" max-w-[100px] h-[100px]" src={image} alt="" />
            <div>
              <h2 className="">{title.substring(0, 25)}</h2>
              <p>${oneItemPrice.toFixed(2)}</p>
            </div>
          </div>
          <div className=" flex gap-5 border p-1">
            <p className=" cursor-pointer select-none text-base font-medium ">
              -
            </p>
            <p className=" cursor-pointer select-none text-base font-medium ">
              {quantity}
            </p>
            <p onClick={() => dispatch(addItemsQuantity(props))} className=" cursor-pointer select-none text-base font-medium ">
              +
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
