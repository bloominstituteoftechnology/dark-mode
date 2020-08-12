import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Coins = (props) => {
  console.log("LT: Coins.js: props", props.products);
  return (
    <div>
      {props.products.map((product) => {
        return (
          <Link>
            <h2>{product.identifier}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;
