import React, {useEffect, useState} from "react";
import s from './Products.module.css';
import {productsAPI} from "../../api/api";
import Pagination from "../Pagination/Pagination";


const Products = (props) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1) // первая страница
    const [productsPerPage] = useState(count =>count||8) // количество элементов на странице
    const lastProductsIndex = currentPage * productsPerPage
    const firstProductsIndex = lastProductsIndex - productsPerPage
    const totalProducts = 20 // как поссчитать общее количество в массиве, если нет в JSON?
    const currentProduct = products.slice(firstProductsIndex, lastProductsIndex)


    const paginate = pageNumber => setCurrentPage(pageNumber)
    const nextPage = () => setCurrentPage(prev => prev + 1)
    const prevPage = () => setCurrentPage(prev => prev - 1)


    const fetchProducts = async () => {
        const response = await productsAPI.getAllProducts()
        setProducts(response)
        setLoading(false)
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    console.log(loading)
    return (
        <div className={s.wrapper}>
            <div className={s.products}>
                {currentProduct.map(p => <div key={p.id} className={s.product}>
                    <div>
                        <img src={p.image} alt="productImage" className={s.productImage}/></div>
                    <div className={s.title}>{p.title}</div>
                    <div className={s.price}>{p.price}</div>
                </div>)
                }
            </div>
            <Pagination
                productsPerPage={productsPerPage}
                totalProducts={totalProducts}
                paginate={paginate}
                />
            <button className="btn-primary" onClick={prevPage}>Prev Page</button>
            <button className="btn-primary" onClick={nextPage}> Next Page</button>

            <div>
                <button>8 продуктов</button>
                <button>16 продуктов</button>
                <button>все продукты</button>
            < /div>

        < /div>
    )
}
export default Products;