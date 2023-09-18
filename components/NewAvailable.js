import React, { useState } from "react";
import { useSelector } from "react-redux";
import ProductHorizontal from "./ProductHorizontal";

const NewAvailable = () => {
  const specialBooks = useSelector((state) => state.specialBooks);

  return (
    <div className="ps-3 pe-3">
      <div className="d-flex justify-content-between border-bottom mb-3">
        <h3>New Available</h3>
      </div>
      {specialBooks?.story?.slice(0, 4).map((item) => (
        <ProductHorizontal
          key={item.id}
          price={item?.price?.base_sale}
          productName={item?.name}
          src={item?.thumbnail?.src || "/default_cover.png"}
          alt={"Horror Story Book"}
          url={`/details/${item?.slug}`}
        />
      ))}
    </div>
  );
};

export default NewAvailable;
