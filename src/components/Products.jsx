import React, { useEffect, useState } from "react";
import Product from "./Product";
import Loading from "./Loading";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(true)


  useEffect(() => {
    fetchProduct();
  }, []);
  const fetchProduct = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();
    console.log(data);
    setProducts(data);
    setIsLoading(false)
  };

  if(isLoading) {
    return <Loading/>
  }
  return (
    <div>
      <div className=" flex flex-wrap gap-10 justify-center mt-20">
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
