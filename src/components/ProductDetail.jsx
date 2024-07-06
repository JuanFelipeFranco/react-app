import {PropTypes} from 'prop-types'

export const ProductDetail = ({handlerProductSelected, handlerRemove, product={}})=>{
    return(
        <tr>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td>
                <button onClick={()=>handlerProductSelected(product)}>
                    Update
                </button>
            </td>
            <td>
                <button onClick={()=>handlerRemove(product.id)}>
                    Remove
                </button>
            </td>
        </tr>
    )   
}

//agregamos proptypes.
ProductDetail.propTypes = {
    product: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}