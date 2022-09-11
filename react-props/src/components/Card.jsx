import React from "react";

function Card(prop) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{prop.name}</h2>
          <img className="circle-img" src={prop.img} alt="avatar_img" />
        </div>
        <div className="bottom">
          <p>{prop.tel}</p>
          <p>{prop.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
