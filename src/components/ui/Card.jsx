import React from 'react';
import '../css/Card.css';


const Card = ({ img, title = "", children }) => {
  return (
    
      <div className="card" >
        <img src={img} className='image' alt="" />
        {title && <h2 className="cardTitle">{title}</h2>}
        <div>{children}</div>
      </div>
    
  )
}

export default Card
