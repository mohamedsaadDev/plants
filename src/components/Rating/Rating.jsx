import "./rating.css"
const Rating = ({rating}) => {
    return (
        <div className='container-rating'>
            {rating >=1? <i className="fa-solid fa-star"></i>
            : rating >= 0.5? <i className="fa-solid fa-star-half-stroke"></i>
            :<i className="fa-regular fa-star"></i>}
            {rating >=2? <i className="fa-solid fa-star"></i>
            : rating >= 1.5? <i className="fa-solid fa-star-half-stroke"></i>
            :<i className="fa-regular fa-star"></i>}
            {rating >=3? <i className="fa-solid fa-star"></i>
            : rating >= 2.5? <i className="fa-solid fa-star-half-stroke"></i>
            :<i className="fa-regular fa-star"></i>}
            {rating >=4? <i className="fa-solid fa-star"></i>
            : rating >= 3.5? <i className="fa-solid fa-star-half-stroke"></i>
            :<i className="fa-regular fa-star"></i>}
            {rating >=5? <i className="fa-solid fa-star"></i>
            : rating >= 4.5? <i className="fa-solid fa-star-half-stroke"></i>
            :<i className="fa-regular fa-star"></i>}
        </div>
    )
}
export default Rating