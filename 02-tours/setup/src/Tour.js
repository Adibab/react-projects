import React, { useState } from "react";

const Tour = ({ id, image, name, info, price, deleteTour }) => {
   const [ readmore, setReadmore ] = useState(false)
   const readmoreInfo =()=> {
    setReadmore (!readmore)
   }
  return (
    <article className="single-tour" key={id}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p> {readmore ? info : `${info.substring(0, 150)}`}.... <button onClick={readmoreInfo} > {readmore ? "Show Less" : "Read More" } </button></p>
        <button className="delete-btn" onClick={(() => deleteTour(id))}> Not Interested </button>
      </footer>
    </article>
  );
};

export default Tour;
