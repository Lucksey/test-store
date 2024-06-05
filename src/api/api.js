import React from "react";
import axios from "axios";

/*const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://fakestoreapi.com/'
})*/
export const productsAPI = {

    getAllProducts() {
        return fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
    },

    getLimitCountProducts(countProducts) {
        return fetch('https://fakestoreapi.com/products?limit=${countProducts}')
            .then(res=>res.json())
            .then(json=>console.log(json))

    }

}


