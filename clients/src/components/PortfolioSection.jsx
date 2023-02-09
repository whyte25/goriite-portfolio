import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import items from "./dat";
import Categories from "./Categories";
import LoadMore from "./LoadMore";
import "./PortfolioSection.scss";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// styles

export default function PortfolioSection() {
  const [isActive, setIsActive] = useState(true);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [noOfElement, setnoOfElement] = useState(8);

  const slice = menuItems.slice(0, noOfElement);
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      setIsActive(!isActive);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <>
      <div className="portfolio-Section">
        <div data-aos="fade-up-right" className="heading-container">
          <h2 className="heading">Premium Services you Will get from me!</h2>
          <Categories categories={categories} filterItems={filterItems} />
        </div>

        <div className="items-container">
          {slice.map((item) => {
            const { id, img, desc, title, url } = item;
            console.log(item);
            return (
              <div
                className="item-wrapper"
                key={id}
                data-aos="slide-up"
                data-aos-duration="2000"
              >
                <a target="blank" href={url}>
                  <img src={img} alt="" />
                  <div className="item-content">
                    <p className="item-title">{title}</p>
                    <p className="item-desc">{desc}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        <LoadMore>
          <Link to="/portfolio" className="btn-load">
            View More
          </Link>
        </LoadMore>
      </div>
    </>
  );
}
