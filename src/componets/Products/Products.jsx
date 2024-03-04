import products_vit from "../../img/products/good4me-vitamin-c-immunity-18598880149671_700x 1.png"
import products_rec8 from "../../img/products/Rectangle 8.png"
import service_4 from "../../img/bluevitamin.png"
import products_im17 from "../../img/products/image 17.png"
import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Shop} from '../../pages/Shop'
function Products(props){
    const handleClick = ()=>{
        return(
            <Router>
                <Link to="/shop">VIEW ALL PRODUCT</Link>
            <Routes>
            <Route path ="/shop" element ={<Shop/>}>
                

            </Route>
        </Routes>
        </Router>
        )
    }
    return (
    <div   className="products">
    <div className="products__top">
        <h1 className="top_title">OUR PRODUCTS ARE</h1>
    </div>
    <div className="center__items">
                <div className="img1">
                    <div className="image1 "><img src={products_im17} alt=""/></div>
                    <div className="img1_text">
                        <p>MULTI-VITAMIN (3 MONTH SUPPLY)</p>
                        <div>$39.95 NZD <p>$199.75 NZD</p> </div>
                    </div>      
                </div>
                <div className="img1 fr">
                    <div className="image1" ><img src={products_vit} alt=""/></div>
                    <div className="img1_text">
                        <p>VITAMIN C: IMMUNITY SUPPORT</p>
                        <div>$39.95 NZD <p>$199.75 NZD</p> </div>
                    </div>
                </div>   
                <div className="img1 fg">        
                    <div className="image1"><img src={service_4} alt=""/></div>
                    <div className="img1_text">
                        <p>MULTI-VITAMIN (3 MONTH SUPPLY)</p>
                        <div>$39.95 NZD <p>$199.75 NZD</p> </div>
                    </div>
                </div>
                <div className="img1">        
                    <div className="image1"><img src={products_rec8} alt=""/></div>
                    <div className="img1_text">
                        <p>APPLE CIDER VINEGAR (3 MONTH SUPPLY)</p>
                        <div>$39.95 NZD <p>$199.75 NZD</p> </div>
                    </div>
                </div>
    </div>
    <div className="products__bottom">
        <button onClick = {handleClick}className="control__button">VIEW ALL PRODUCT</button>
    </div>
</div>);
}


export default Products