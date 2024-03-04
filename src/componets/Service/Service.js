import service_1 from "../../img/servis/good4me-full-range-value-pack-save-33-22236720529575_800x (1) 1.png"
import service_2 from "../../img/servis/good4me-iron-energy-support-3-month-supply-22236761260199_800x 1.png"
import service_3 from "../../img/orangevitamin.png"
import service_4 from "../../img/bluevitamin.png"
const Service = () => {
    return ( <service className="service">
    <div className="service__top">
        <div className="top__deal">
            GOOD4ME DEAL
        </div>
        <div className="top__border">

        </div>
        <div className="top__value">
            Pick your beauty products today. 50% OFF on the most popular GOOD4ME. Order all classy products today!
        </div>
    </div>
    <div className="service__center">
        <div className="special__collection">
            <div className="special__first">
                <div><img src={service_4} alt=""/></div>
                <div className="special__text sp1">MULTI-VITAMIN: EVERYDAY WELLNESS</div>
            </div>
            <div className="special__second">
                <div><img src={service_1} alt=""/></div>
                <div className="special__text ">FULL RANGE VALUE PACK (SAVE 33%)</div>
            </div>
            <div className="special__third">
                <div><img src={service_3}alt=""/></div>
                <div className="special__text sp1">VITAMIN C: IMMUNITY SUPPORT </div>
            </div>
            <div className="special__four">
                <div><img src={service_2} alt=""/></div>
                <div className="special__text">IRON: ENERGY SUPPORT</div>
            </div>
           
        </div>
    </div>
    <div className="service__bottom">
        <div className="service__osnova">
            <div className="bottom__travel">

            </div>
        </div>
    </div>
</service> );
}
 
export default Service;