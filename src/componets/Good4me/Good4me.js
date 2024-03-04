import good_im24 from "../../img/good4me/image 24.png"
import good_im32 from "../../img/good4me/image 32.png"
import good_im36 from "../../img/good4me/image 36.png"
import good_im38 from "../../img/good4me/image 38.png"
import good_im35 from "../../img/good4me/image 35.png"

const Good4me = () => {
    return (     <div className="Good4me">
    <div className="Good4me_title">#GOOD4ME</div>
    <div className="Good4me_main">
        <img className="m1"src={good_im35} alt=""/>
        <div><img src={good_im36} alt=""/>
            <img src={good_im24}alt=""/>
            <img src={good_im36} alt=""/>
            <img src={good_im38} alt=""/>
        </div> 
        <img className="m6"src={good_im32} alt=""/>
    </div>
</div>);
}
 
export default Good4me;