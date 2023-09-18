import React, { useState } from "react";
import { useSelector } from "react-redux";
import Products from "./Product";

const Tag = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const specialBooks = useSelector((state) => state.specialBooks);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <button
              className={`btn btn-outline-danger ${
                activeTab === "featured" ? "active" : ""
              } ms-2`}
              onClick={() => handleTabClick("featured")}
            >
              Featured
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn btn-outline-danger ${
                activeTab === "popular" ? "active" : ""
              } ms-2`}
              onClick={() => handleTabClick("popular")}
            >
              Most Popular
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn btn-outline-danger ${
                activeTab === "best_seller" ? "active" : ""
              } ms-2`}
              onClick={() => handleTabClick("best_seller")}
            >
              Best Seller
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div
          className={`tab-pane ${activeTab === "featured" ? "active" : ""}`}
          id="featured"
        >
          <div className="d-flex flex-wrap justify-content-center">
            {specialBooks?.thriller?.map((item) => (
              <Products
                key={item.id}
                price={item?.price?.base_sale}
                productName={item.name}
                src={item?.thumbnail?.src || "/default_cover.png"}
                alt={item?.thumbnail?.alt}
                url={`/details/${item?.slug}`}
              />
            ))}
          </div>
        </div>
        <div
          className={`tab-pane ${activeTab === "popular" ? "active" : ""}`}
          id="popular"
        >
          <div className="d-flex flex-wrap justify-content-center">
            {specialBooks?.academy?.map((item) => (
              <Products
                key={item.id}
                price={item?.price?.base_sale || "/default_cover.png"}
                productName={item.name}
                src={item?.thumbnail?.src}
                alt={item?.thumbnail?.alt}
                url={`/details/${item?.slug}`}
              />
            ))}
          </div>
        </div>
        <div
          className={`tab-pane ${activeTab === "best_seller" ? "active" : ""}`}
          id="best_seller"
        >
          <div className="d-flex flex-wrap justify-content-center">
            {specialBooks?.story?.map((item) => (
              <Products
                key={item.id}
                price={item?.price?.base_sale}
                productName={item?.name}
                src={item?.thumbnail?.src || "/default_cover.png"}
                alt={"/default_cover.png"}
                url={`/details/${item?.slug}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tag;
