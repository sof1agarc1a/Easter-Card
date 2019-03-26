import React from 'react';
import './CardImage.css';


const CardImage = (props) => (
  <div className="card-align">
    <img className="card-image" src={props.src.post_url} alt={props.src.filename} />

  </div>
)

export default CardImage;
