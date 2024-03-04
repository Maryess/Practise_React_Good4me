import React from 'react'
import left from "../../img/reviews/влево.svg"
import right from "../../img/reviews/впрво.svg"
import vector from "../../img/reviews/Vector.svg"
import vector1 from "../../img/reviews/Vector (1).svg"
import fullRange from "../../img/reviews/good4me-full-range-value-pack-save-33-22069447786663_800x 1.png"
function Reviews (){
    // let settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    // }
    
    return(
    <div className="reviews">
       


            <div className="reviews__left">
            
                {/* <div className="reviews_top">REAL REVIEWS</div> */} 
            
                {/* {review.map((d)=>( */}
                   
                  <div  key={review.name}className="review_center">
                    <div className="reviews_title">{review.title}</div>
                    <div className="reviews_stars">
                       <img src ={review.stars} alt="" />
                       <img src ={review.stars}alt="" />
                       <img src ={review.stars} alt=""/>
                       <img src ={review.stars} alt=""/>
                       <img src ={review.notStars} alt=""/>
                    </div>
                    <div className="reviews_value"><p>{review.value}</p>
                    <p>{review.name}</p></div>
                    </div>
                    
                {/* ))} */}
            
                <div className="reviews_bottom">
                    <button className="b1"><img src={left} alt=""/></button>
                    <button className="b2"><img src={right} alt=""/></button>
                </div>
            </div>
            <div className="reviews-right">
                <img src={fullRange} alt=""/>
            </div>
    </div>
)

    
}

const review = 
    {
        title:"REAL REZULTS",
        stars:{vector},
        notStars:{vector1},
        value:"“We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website.We can't wait until you are a part of our Good4Me Family.”",
        name:"_Chloe H.",
     }
//     {
//         title:"REAL REZULTS",
//         stars:{vector},
//         notStars:{vector1},
//         value:"“We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website.We can't wait until you are a part of our Good4Me Family.”",
//         name:"_Chloe H.",
//     },
//     {
//         title:"REAL REZULTS",
//         stars:{vector},
//         notStars:{vector1},
//         value:"“We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website.We can't wait until you are a part of our Good4Me Family.”",
//         name:"_Chloe H.",
//     },
//     {
//         title:"REAL REZULTS",
//         stars:{vector},
//         notStars:{vector1},
//         value:"“We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website.We can't wait until you are a part of our Good4Me Family.”",
//         name:"_Chloe H.",
//     },
//     {
//         title:"REAL REZULTS",
//         stars:{vector},
//         notStars:{vector1},
//         value:"“We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website.We can't wait until you are a part of our Good4Me Family.”",
//         name:"_Chloe H."
//     }
// ]

export default Reviews