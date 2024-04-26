import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  // const getProducts = async () => {
  //   try {
  //     const { data } = await axios.get("https://fakestoreapi.com/products");
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <ProductCard />
      ))}
    </div>
  );
};

export default Products;
