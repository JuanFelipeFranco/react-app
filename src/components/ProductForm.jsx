import { useEffect, useState } from "react"

const initialDataForm={
    id:0,
    name:'',
    description:'',
    price:''
}

// eslint-disable-next-line react/prop-types
export const ProductForm = ({productSelected, handlerAdd}) => {

    const [form, setForm] = useState(initialDataForm);

    const{name, description, price} = form; //desestructuramos

    useEffect(()=>{
        setForm(productSelected);
    },[productSelected])

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            if(!name || !description || !price){
                alert("Debe completar los datos del formulario")
            }
            
            //enviamos la funcion handlerAdd
            handlerAdd(form);

            //LIMPIAMOS LOS DATOS DEL FORMULARIO
            setForm(initialDataForm)
        }}>
            <div>
            <input placeholder="Name"
            style={{marginBottom:'6px'}}
            name="Name"
            value={name}
                onChange={(event) => setForm({
                ...form, name:event.target.value
            })}
            />
            </div>
            <div>
            <input placeholder="Description"
            style={{marginBottom:'6px'}}
            name="description"
            value={description}
            onChange={(event) => setForm({
                ...form, description:event.target.value
            })}
            />
            </div>
            <div>
            <input placeholder="Price"
            style={{marginBottom:'6px'}}
            name="price"
            value={price}
            onChange={(event) => setForm({
                ...form, price:event.target.value
            })}
            />
            </div>
            <div>
            <button type="submit">
                Save
            </button>
            </div>
        </form>
    )
}

