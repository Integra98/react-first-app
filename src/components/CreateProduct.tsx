import { ChangeEvent, useState } from "react"
import { IProduct } from "../models"
import {Error} from "./Error"
import axios from "axios"

interface createProductProps{
    onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: createProductProps){

    const productData: IProduct = {
        title: '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
    }

    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        setError('')
        event.preventDefault()

        if(value.trim().length === 0){
            setError('Validation Error!')
            return
        }

        productData.title = value
        const res = await axios.post<IProduct>('https://fakestoreapi.com/products', productData)
        onCreate(res.data)
    }
    
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    

    return (
        <>
        <form onSubmit={submitHandler}>
            <input type="text" 
            className="border py-2 px-4 mb-2 w-full outline-0 my-4"
            placeholder="Product Title"
            value = {value}
            onChange = {handleChange} />
            {error && <Error errorMessage={error}/>}
            <button type="submit" className="border py-2 px-4 bg-yellow-400 hover:text-white">Create</button>
        </form>
        </>
    )
}