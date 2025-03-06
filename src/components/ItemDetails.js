import React from "react";
import { useParams } from "react-router-dom";

function ItemDetails({ items }) {
  const { id } = useParams(); 
  const item = items.find((el) => el.id === parseInt(id));

  if (!item) return <h2>Item Not Found</h2>;

  return (
    <div className="item-details">
      <h1>{item.tesak}</h1>
    </div>
  );
}

export default ItemDetails;
