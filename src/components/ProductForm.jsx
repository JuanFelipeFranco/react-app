import { useState } from "react"

const initialDataForm={
    name:'',
    description:'',
    price:''
}

export const ProductForm = () => {

    const [form, setForm] = useState(initialDataForm);

    const{name, description, price} = form; //desestructuramos
    return (
        <form>
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
                Create
            </button>
            </div>
        </form>
    )
}