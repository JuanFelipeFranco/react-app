import { useEffect, useState } from "react"
import { listProduct } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import {PropTypes} from 'prop-types'
import { ProductForm } from "./ProductForm";


export const ProductApp = ({title}) =>{

    const[products, setProducts]=useState([]);

    const[productSelected, setProductSelected] = useState({
        id:0,
        name:'',
        description:'',
        price:''
    })

    useEffect(()=>{
        const result = listProduct();
        setProducts(result);
    }, []);
    
    const handlerAddProduct = (product)=>{
        console.log(product)
        
        if(product.id > 0){
            //si esta incluido es que lo vamos a actualizar
            setProducts(products.map(prod => {
                if(prod.id == product.id){
                 return {...product}
                }
                return prod; //prod es producto nuevo; product un producto que ya existe.
             }))
        }else{
            //si no esta incluido lo vamos a agregar
            setProducts([...products, {...product, id:new Date().getTime()}]);
        }
        
    }

    const handlerRemoveProduct = (id)=>{
        console.log(id)
        setProducts(products.filter(product => product.id != id));
    }

    const handlerProductSelected = (product)=>{
        setProductSelected({...product});
    }

    return(
        <> 
         <h1>{ title }</h1>
         <div>
            <ProductForm handlerAdd={handlerAddProduct} productSelected={productSelected}/>
         </div>
         <div>
            <ProductGrid products={products} handlerRemove={handlerRemoveProduct} handlerProductSelected={handlerProductSelected}/>
         </div>
        </>
    )
}

ProductApp.propTypes = {
    title:PropTypes.string.isRequired
}