import React from "react";
import { useNavigate } from "react-router-dom";

function Item({ item }) {
  const navigate = useNavigate();

  return (
    <div className="item" onClick={() => navigate(`/item/${item.id}`)}>
      <img src={`/img/${item.img}`} alt={item.tesak} width="200" />
      <h2>{item.tesak}</h2>
    </div>
  );
}

export default Item;



