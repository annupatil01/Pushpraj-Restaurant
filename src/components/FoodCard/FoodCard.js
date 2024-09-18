import React from 'react'
import "./FoodCard.css"
import VegIcon from "./VegIcon.png"
import NonVegIcon from "./NonVegIcon.png"
import {THEME,CARD_BUTTON_TEXT} from '../../config/data'

function FoodCard({imgUrl, title,description,isVeg ,price}) {

  return (
    <div className='foodcard'>
      <img 
        src={imgUrl}
        className="food-card-img"
        alt='food'/>

        <h1 className='food-card-title' style={{color:THEME.dark}}>{title}</h1>
        <p>{description}</p>

        <img src={isVeg ? VegIcon : NonVegIcon} className="food-card-icon" alt="Veg Icon"/>

        {
          price ?
          <p className="Food-card-price">₹ {price}</p>
          : "Not Available"
        }

      <button className='food-card-button'>
        {CARD_BUTTON_TEXT}
      </button>
        
    </div>
  )
}

export default FoodCard