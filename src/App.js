import "./css/style.css"

import Header from "./componets/Header/Header"
import HeaderCenter from "./componets/Header/HeaderCenter"
import Service from "./componets/Service/Service"
import Control from "./componets/Control/Control"
import Products from "./componets/Products/Products"
import Reviews from "./componets/Reviews/Reviews"
import ProductsSecond from "./componets/ProductsSecond/ProductsSecond"
import LatestNews from "./componets/LatestNews/LatestNews"
import Good4me from "./componets/Good4me/Good4me"
import FooterContent from "./componets/Footer/FooterContent"
import FooterNetwork from "./componets/Footer/FooterNetwork"





function App() {
  return (
    <div className="App">
      <header className="header">
       <Header/>
       <HeaderCenter/>
      </header>
        <Service/>
        <Control/>
        <Products/>
        <Reviews/>
        <ProductsSecond/>
        <LatestNews/>
        <Good4me/>

      <div className="footer">
        <FooterContent/>
        <FooterNetwork/>
      </div>
     
    </div>
   
  );
}

export default App;
