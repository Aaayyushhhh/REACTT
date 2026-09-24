import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="justify-center flex gap-10 py-4">
        <Link className="text-xl font-semibold " to="/Product/Men">
          Men
        </Link>
        <Link className="text-xl font-semibold " to="/Product/Women">
          Women
        </Link>
      </div>
      {/* <h1>Product Page</h1> */}
      <Outlet />
    </div>
  );
};

export default Product;
