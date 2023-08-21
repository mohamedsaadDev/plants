import React,{useRef} from 'react'
import "./ScrolleTop.css"
const ScrolleTop = () => {
    const ref = useRef()
        window.onscroll = function(){
            if (window.scrollY >= 400 ){
                ref.current.style.display = 'block'
            }else{
                ref.current.style.display = 'none'
            }
        }
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior:`smooth`});
    }
    return (
        <div>
            <i ref={ref} onClick={scrollToTop} className="fa-solid fa-arrow-up Arrow-ScrolleTop"></i>
        </div>
    )
}
export default ScrolleTop