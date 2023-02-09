import React, { useState } from "react";
import "./Categories.scss";

export default function Categories({ categories, filterItems }) {
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="categories" data-aos="fade-left">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
