import { useState } from 'react';

const CreateProduct = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');


    const saveProduct = (e)=>{
        e.preventDefault();
        const product = {id,name,quantity}
        console.log(product);
        fetch("http://localhost:9090/add",{
            method:'POST',
            headers : {"Content-type":"application/json"},
            body : JSON.stringify(product)
        })
        .then(()=>{
            console.log(JSON.stringify(product))
            console.log("Record added")
        })
    }
    return ( 

        <div className="create">

            <h2> Add a New Product</h2>
            <form onSubmit={saveProduct}>
                <label> Product ID</label>
                <input type="text" 
                        required
                        value = {id}
                        onChange ={(e)=>setId(e.target.value)}
                /><br/>
                <label> Product Name</label>
                <input type="text" 
                        required
                        value ={name}
                        onChange = {(e)=>setName(e.target.value)}
                />
                    <br/>           
                 <label> Quantity</label>
                 <input type="text" 
                        required
                        value ={quantity}
                        onChange = {(e)=>setQuantity(e.target.value)}
                />
                <button> Add Product</button>
            </form>
        </div>

    );
}
 
export default CreateProduct;