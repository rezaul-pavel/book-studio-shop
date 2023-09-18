import React, { useEffect, useState } from "react";
import Link from "next/link";

function MultiLabelDropdown() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory(JSON.parse(localStorage.getItem("category")));
  }, []);

  return (
    <div className="dropdown">
      <button
        className="btn btn-danger dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Category
      </button>
      <ul className="dropdown-menu">
        {category.map((cat) => (
          <li key={cat.id}>
            <Link className="dropdown-item" href={`/category/${cat.id}`}>
              {cat.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MultiLabelDropdown;
