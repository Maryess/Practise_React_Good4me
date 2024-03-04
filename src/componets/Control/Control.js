import control_r16 from "../../img/control/Rectangle 16.svg"
import control_r17 from "../../img/control/Rectangle 17.svg"
import control_r18 from "../../img/control/Rectangle 18.svg"

const Control = () => {
    return ( 
    <div className="control">
    <div className="control__left">
        <div className="control__title">TAKE CONTROL OF YOUR HEALTH</div>
        <div className="control__value">
            <p>The Good4Me range has been formulated based on scientific & traditional evidence.</p>
            <p>Our vitamins are here and ready to boost your mood, immunity and overall well-being!</p>
            <p>Made in New Zealand from local and imported ingredients.</p>
        </div>
        <button className="control__button">BROWSE OUR RANGE</button>
    </div>


    <div className="control__right">
            <div className="right_second">
                <img className="flex_img" src={control_r16} alt=""/>
            </div>
            <div className="right_first">
                <img className="flex_img "src={control_r17} alt=""/>
            
            
                <img className="flex_img " src={control_r18}alt=""/>
            </div>
        
        
    </div>
</div>);
}
 
export default Control;