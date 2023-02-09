import React from "react";
import "../components/CardSkeleton.scss";
import Skeleton from "react-loading-skeleton";

function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((item, index) => (
      <div className="card-skeleton" key={index}>
        <Skeleton className="skeleton" />

        <div className="skeleton-content">
          <Skeleton width="90%" style={{ margin: "2rem 0 2.5rem 0" }} />
          <Skeleton width="90%" />
        </div>
      </div>
    ));
}

export default CardSkeleton;
