import { productsList } from "../componets/Products/productsList";
import ProductsShop from "../componets/Products/productsShop";
import React from 'react'
import "./shop.css"
export const Shop = () => {
  return (
    <div className="shop">
        <div className="container_shop">
            <h2 className="title">Welcome  to our Shop</h2>
            <ul className="products_list" style={{}}>
                {productsList.map((product) =>{
                    return <ProductsShop value={product.value} img ={product.img}/> 
                })}
            </ul>
        </div>
    </div>
  )
}
