import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Category from "./Category";

const Header = () => {
  const [logo, setLogo] = useState();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setLogo(JSON.parse(localStorage.getItem("logo")));
    setMenu(JSON.parse(localStorage.getItem("primaryMenu")));
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ml-3 mr-3">
      <Link className="navbar-brand" href="/">
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={60}
          objectFit="cover"
        />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Category />
          </li>
          {menu?.map((menu) => (
            <li className="nav-item active" key={menu.id}>
              <Link className="nav-link" href={menu.path}>
                {menu.text}
              </Link>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
