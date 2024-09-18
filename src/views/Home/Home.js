import React from 'react'
import "./Home.css"

import FoodCard from "../../components/FoodCard/FoodCard"
import { PRODUCTS,MAIN_TITLE ,TAGLINE,THEME,} from './../../config/data'

function Home() {
  return (
    <div style={{backgroundColor:THEME.main}}>
        <h1 className="main-title" style={{color:THEME.highlight,margin:0}}>
          {MAIN_TITLE}
        </h1>

        <p className="tagline">
          {TAGLINE}
        </p>

         <div className="food-cards-container">
         {PRODUCTS.map((fooditem)=>{
                return(
                <FoodCard
                imgUrl={fooditem.imgUrl}
                title={fooditem.title}
                description={fooditem.description}
                isVeg={fooditem.isVeg}
                price={fooditem.price}/>)
         })}
        
        </div>
    </div>
  )
}

export default Home