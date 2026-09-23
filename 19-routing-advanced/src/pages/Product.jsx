import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="justify-center flex gap-10 py-4">
        <Link to="/Product/Men">Men</Link>
        <Link to="/Product/Women">Women</Link>
      </div>
    </div>
  );
};

export default Product;
