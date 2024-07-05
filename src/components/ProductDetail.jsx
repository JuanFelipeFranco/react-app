import {PropTypes} from 'prop-types'

export const ProductDetail = ({handlerRemove, product={}})=>{
    return(
        <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
                <button onClick={()=>handlerRemove(product.name)}>
                    Remove
                </button>
            </td>
        </tr>
    )   
}

//agregamos proptypes.
ProductDetail.propTypes = {
    product: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired
}