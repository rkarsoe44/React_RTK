import React from "react";
import { Input } from "@mantine/core";
import { BsFillHandbagFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Badge } from "@mantine/core";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className=" flex justify-around p-7 shadow-lg items-center">
      <Link to={"/"}>
        <h2 className=" text-gray-500 text-2xl">Comfity</h2>
      </Link>
      <div className=" flex items-center gap-5">
        <Input variant="filled" placeholder="Search" />
        <Link to={"/addtocart"}>
          <div className=" relative">
            <BsFillHandbagFill
              className=" text-purple-900 text-4xl relative"
              style={{ zIndex: 10 }}
            />
            <Badge className=" bottom-6 left-5 absolute" color="violet">
              {cartItems.length}
            </Badge>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
