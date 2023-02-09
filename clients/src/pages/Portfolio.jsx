import React, { useState } from "react";
import "./Portfolio.scss";
import items from "../components/dat.js";
import Categories from "../components/Categories";
import LoadMore from "../components/LoadMore";
import PagesHeading from "../components/PagesHeading";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import CardSkeleton from "../components/CardSkeleton";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

export default function Portfolio() {
  const [isActive, setIsActive] = useState(true);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);
  const [show, setShow] = useState(true);
  const [noOfElement, setnoOfElement] = useState(8);
  const [isLoading, setIsLoading] = useState(false);

  const slice = menuItems.slice(0, noOfElement);

  const loadMore = () => {
    setIsLoading(true);
    setnoOfElement(noOfElement + 4);

    if (menuItems.length === setnoOfElement) {
      setShow(false);
    }
  };
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
      <PagesHeading>
        <p>home / portfolio</p>
        <h1>my portfolio</h1>
      </PagesHeading>
      <div className="portfolio-Section">
        <div className="heading-container">
          <h2 data-aos="fade-right" className="heading">
            Premium Services you Will get from me!
          </h2>
          <Categories categories={categories} filterItems={filterItems} />
        </div>

        <div className="items-container">
          {/* {isLoading && <CardSkeleton cards={menuItems.length} />} */}
          {slice.map((item) => {
            const { id, img, desc, title, url } = item;

            return (
              <div
                className="item-wrapper"
                key={id}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <a target="blank" href={url}>
                  <img src={img || <Skeleton />} alt="" />
                  <div className="item-content">
                    <p className="item-title">{title}</p>
                    <p className="item-desc">{desc}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
        {noOfElement < menuItems.length && (
          <LoadMore>
            <a className="btn-load" onClick={() => loadMore()}>
              Load More
            </a>
          </LoadMore>
        )}
      </div>
    </>
  );
}
