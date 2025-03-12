import React from "react";
import { useParams } from "react-router-dom";

function ItemDetails({ items }) {
  const { id } = useParams(); 
  const item = items.find((el) => el.id === parseInt(id));

  if (!item) return <h2>Item Not Found</h2>;

  return (
    <div className="item-details">
      <h1>{item.masnaget}</h1>
      <img src={`/img/${item.nkar}`} alt={item.tesak} width="300" /> 
       <h2>{item.anun}</h2>
       <h2>{item.volortum}</h2>
       <h1>Հեռ: <a href={`tel:${item.heraxos}`}>{item.heraxos}</a></h1>

    </div>
  );
}

export default ItemDetails;
