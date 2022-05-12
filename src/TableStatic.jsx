import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Header.css";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    axios
      .get(
        "https://gist.githubusercontent.com/mecmartini/fc7b0d380ab8e63504271f4951312401/raw/98e714e1daa61f03c67f061d5e5dee53b86a35ae/data_ex.json"
      )
      .then((res) => {
        console.log(res);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Code </th>
            <th> Providers </th>
            <th>Media</th>
            <th>Parameters</th>
            <th>Measure(sum)</th>
            <th>Law limit EC (average)</th>
            <th>Law limit WHO (average)</th>
            <th>EQS EC (average)</th>
            <th>EQS WHO (average)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((products, index) => (
            <tr key={index}>
              <td>{products.Code}</td>
              <td>{products.Provider}</td>
              <td>{products.Media}</td>
              <td>{products.Parameter}</td>
              <td>{products.Measure}</td>
              <td>{products["Law limit EC"]}</td>
              <td>{products["Law limit WHO"]}</td>
              <td>{products["EQS EC"]}</td>
              <td>{products["EQS WHO"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default FeaturedProducts;
