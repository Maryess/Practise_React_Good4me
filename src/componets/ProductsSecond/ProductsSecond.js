import products_one from "../../img/products/one.png"
import products_two from "../../img/products/two.png"
import products_three from "../../img/products/three.png"
import products_four from "../../img/products/four.png"

const ProductsSecond = () => {
    return ( <div className="products">
    <div className="products__top">
        <h1 className="top_title">SHOP ALL</h1>
    </div>
    <div className="products__center">
        <div className="center__items">
            <div className="img1 fr">
                <div className="image1 "><img src={products_one} alt=""/></div>
                <div className="img1_text">
                    <p>**PRE-ORDER** HAIR, SKIN & NAILS (5 MONTH SUPPLY)</p>
                    <div>$39.95 NZD <p>$199.75 NZD</p> </div>
                </div>      
            </div>
            <div className="img1 fg">
                <div className="image1" ><img src={products_two} alt=""/></div>
                <div className="img1_text">
                    <p>DETOX + BLOAT SUPPORT VALUE PACK</p>
                    <div>$39.95 NZD <p>$199.75 NZD</p> </div>
                </div>
            </div>   
            <div className="img1 ">        
                <div className="image1"><img src={products_three} alt=""/></div>
                <div className="img1_text">
                    <p>PROBIOTICS: GUT HEALTH + BLOAT SUPPORT</p>
                    <div>$39.95 NZD <p>$199.75 NZD</p> </div>
                </div>
            </div>
            <div className="img1">        
                <div className="image1"><img src={products_four} alt=""/></div>
                <div className="img1_text">
                    <p>APPLE CIDER VINEGAR</p>
                    <div>$39.95 NZD <p>$199.75 NZD</p> </div>
                </div>
            </div>
        </div>
    </div>
    <div className="products__bottom">
        <button className="control__button">VIEW ALL PRODUCT</button>
    </div>
</div>);
}
 
export default ProductsSecond;