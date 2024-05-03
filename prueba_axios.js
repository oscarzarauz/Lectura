import axios from "axios"

const getProducts = async ()=>{
    const response= await axios.get('https://fakestoreapi.com/products')
    console.log(response)
}

getProducts()