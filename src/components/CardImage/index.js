import React from 'react';
import './CardImage.css';


const CardImage = (props) => {
    return (
  <div className="card-align">
    <img className="card-image" src={props.url} alt={props.description.alt_description} />
  </div>

  )
}

export default CardImage;
