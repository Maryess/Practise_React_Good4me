import footeer_inst from "../../img/footer/insta.jpg"
import footeer_face from "../../img/footer/facebook.jpg"
import footeer_pint from "../../img/footer/pinterest.jpg"
import footeer_twit from "../../img/footer/twitter.jpg"
import footeer_yout from "../../img/footer/youtube.jpg"
import footer_screen from "../../img/Screenshot-2021-01-26-at-2.46 1.png"


const FooterNetwork = () => {
    return (<div className="footer__bottom">
    <div className="footer_content">
    <div className="bottom_social">
        <button><img src={footeer_face} alt=""/></button>
        <button><img src={footeer_inst}  alt=""/></button>
        <button><img src={footeer_twit}  alt=""/></button>
        <button><img src={footeer_pint} alt=""/></button>
        <button><img src={footeer_yout} alt=""/></button>
    </div>
    <div className="bottom__firma">
        <p>© 2021, <span>GOOD4ME.</span> Powered by Shopify</p>
    </div>
    <div className="bottom__card">
        <img src={footer_screen} alt=""/>
    </div>
</div>
</div>);
}
 
export default FooterNetwork;