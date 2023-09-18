import React, { useState } from "react";
import { useSelector } from "react-redux";
import Products from "./Product";

const SpecialProductTab = () => {
  const [activeTab, setActiveTab] = useState("storyTab");
  const specialBooks = useSelector((state) => state.specialBooks);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container">
      <div className="d-flex align-items-center flex-column">
        <h2 className="text-center">SPECIAL PRODUCT</h2>
        <div className="custom-border"></div>
        <ul className="nav nav-pills text-center">
          <li className="nav-item">
            <button
              className={`btn btn-outline-danger ${
                activeTab === "storyTab" ? "active" : ""
              } ms-2`}
              onClick={() => handleTabClick("storyTab")}
            >
              Story
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`btn btn-outline-danger ${
                activeTab === "academyTab" ? "active" : ""
              } ms-2`}
              onClick={() => handleTabClick("academyTab")}
            >
              Academic
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div
          className={`tab-pane ${activeTab === "storyTab" ? "active" : ""}`}
          id="storyTab"
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
        <div
          className={`tab-pane ${activeTab === "academyTab" ? "active" : ""}`}
          id="academyTab"
        >
          <div className="d-flex flex-wrap justify-content-center">
            {specialBooks?.academy?.map((item) => (
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
      </div>
    </div>
  );
};

export default SpecialProductTab;
