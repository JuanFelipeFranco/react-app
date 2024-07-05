import { useEffect, useState } from "react"
import { listProduct } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import {PropTypes} from 'prop-types'
import { ProductForm } from "./ProductForm";


export const ProductApp = ({title}) =>{

    const[products, setProducts]=useState([]);

    useEffect(()=>{
        const result = listProduct();
        setProducts(result);
    }, []);
    
    const handlerAddProduct = (product)=>{
        console.log(product)
        setProducts([...products, {...product}]);
    }

    return(
        <> 
         <h1>{ title }</h1>
         <div>
            <ProductForm handlerAdd={handlerAddProduct}/>
         </div>
         <div>
            <ProductGrid products={products}/>
         </div>
        </>
    )
}

ProductApp.propTypes = {
    title:PropTypes.string.isRequired
}