import React from 'react'
import "../../css/style.css"
function productsShop({value, img}){
  return (
    <div className="center__items">
    <div className="img1">
        <div className="image1 "><img src={img} alt=""/></div>
            <div className="img1_text">
                <p>{value}</p>
            <div>$39.95 NZD <p>$199.75 NZD</p> </div>
        </div>      
    </div>
    </div>
  )
}

export default productsShop