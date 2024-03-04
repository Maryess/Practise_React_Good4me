
import latest_im19 from "../../img/latest-news/image 19.png"
import latest_im191 from "../../img/latest-news/image 19 (1).png"
import latest_vit from "../../img/latest-news/vitC.png"

const LatestNews = () => {
    return (    <div className="latest-news">
    <div className="news_top">LATEST NEWS</div>
    <div className="news_main">
        <div className="main_slide">

            <div className="slide_img"><img src={latest_vit} alt=""/></div>
            <div className="slide_bottom">
                <div className="slide_data"><p>August 26, 2020</p></div>
                <div className="slide_title"><p>WE DONATE ONE WEEKS SUPPLY</p></div>
                <div className="slide_value"><p>We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p></div>
                <div className="slide_button"><button><a href="">READ MORE</a></button></div>
            </div>
        </div>
        <div className="main_slide">
            <div className="slide_img"><img src={latest_im19} alt=""/></div>
            <div className="slide_bottom">
                <div className="slide_data"><p>August 26, 2020</p></div>
                <div className="slide_title"><p>WE DONATE ONE WEEKS SUPPLY</p></div>
                <div className="slide_value"><p>We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p></div>
                <div className="slide_button"><button><a href="">READ MORE</a></button></div>
            </div>
        </div>
        <div className="main_slide">
            <div className="slide_img"><img src={latest_im191}alt=""/></div>
            <div className="slide_bottom">
                <div className="slide_data"><p>August 26, 2020</p></div>
                <div className="slide_title"><p>WE DONATE ONE WEEKS SUPPLY</p></div>
                <div className="slide_value"><p>We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p></div>
                <div className="slide_button"><button><a href="">READ MORE</a></button></div>
            </div>
        </div>
        
    </div>
</div>);
}
 
export default LatestNews;