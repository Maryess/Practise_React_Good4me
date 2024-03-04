import logo from "../../img/footer/Logo_-_Good4Me_140x 1.jpg"

const FooterContent = () => {
    return (        <div className="footer__content">
    <div className="content_right">
        <div className="right_title"><img src={logo} alt=""/></div>
        <div className="right_text">Good health is important, so all of our products have been carefully designed to bring out the best in you.</div>
    </div>
    <div className="content__center">
        <div className="center_title">Keep In Touch</div>
        <div className="center_text"><p>Subscribe to receive new product updates, be the first to know about sales, and more.</p></div>
         <div className="center_form">
            <input type="email" id="email" placeholder="Enter your email address"/>
            <button>SUBSCRIBE</button>
        </div>
    </div>
    <div className="center__left">
        <div className="left_title">MORE INFO</div>
        <div className="left_value">
            <p>Shipping & Delivery</p>
            <p>Refund Policy</p> 
            <p>Partner Program</p>
            <p>Wholesale Portal</p>
            <p> You Buy, We Donate</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
        </div>
    </div>
   
</div>);
}
 
export default FooterContent;