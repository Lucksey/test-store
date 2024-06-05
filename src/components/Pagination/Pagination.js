import React from "react";

const Pagination = (props) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(props.totalProducts / props.productsPerPage); i++) {
        pageNumbers.push(i)
    }
  return(
      <div>
          <ul className="pagination">
              {
                  pageNumbers.map(number =>(
                      <li className="page-item" key={number}>
                          <button className="page-link" onClick={() => {props.paginate(number)}}>{number}</button>
                      </li>
                  ))
              }
          </ul>
      </div>
  )
}

export default Pagination