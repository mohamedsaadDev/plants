import React from 'react'
import "./pagination.css"
const Pagination = ({pages,currentPage,setcurrentPage}) => {
    const genratedPages = []
    for(let i = 1; i <= pages; i++) {
        genratedPages.push(i)
    }
    return (
        <div className='Wrapper-Container-Pagination'>
            <div>
                ( {genratedPages.length} Pages)
            </div>
            <div className='Container-Pagination'>
            {currentPage > 1 ? <i onClick={()=>setcurrentPage(currentPage - 1)} className="fa-solid fa-arrow-left Arrow-pagination"></i> :""}
                {genratedPages.map(page => 
                    <div onClick={()=>setcurrentPage(page)} key={page} className={currentPage === page ? 'page active':'page'} >
                        {page}
                    </div>)}
                    {currentPage <= 1 ? <i onClick={()=>setcurrentPage(currentPage + 1)} className="fa-solid fa-arrow-right Arrow-pagination"></i>:""}
            </div>
        </div>
    )
}

export default Pagination