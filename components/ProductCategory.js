import React, { useState } from "react";

function ProductCategory() {
  const [showSubMenu, setShowSubMenu] = useState(true);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="container mt-5">
      <div className="btn-group">
        {/* Primary Dropdown Button */}
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Select an Option
        </button>
        {/* Primary Dropdown Menu */}
        <div className="dropdown-menu">
          {/* Option 1 */}
          <a className="dropdown-item" href="#">
            Option 1
          </a>
          {/* Option 2 with Submenu */}
          <a
            className="dropdown-item dropdown-toggle"
            href="#"
            onClick={toggleSubMenu}
          >
            Option 2
          </a>
          {/* Secondary Submenu */}
          {showSubMenu && (
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Suboption 1
              </a>
              <a className="dropdown-item" href="#">
                Suboption 2
              </a>
            </div>
          )}
          {/* Option 3 */}
          <a className="dropdown-item" href="#">
            Option 3
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
