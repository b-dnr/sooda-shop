import React from 'react'

function Pagination({ productsPerPage, totalProducts, paginate}) {

    const pageNumbers = [];
    
    for(let i=1; i <= Math.ceil(totalProducts / productsPerPage); i++){
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination mt-3 d-flex justify-content-center ">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a href="#" onClick={()=> paginate(number)} className="page-link">
                            {number}
                        </a>

                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
