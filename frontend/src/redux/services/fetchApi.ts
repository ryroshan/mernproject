import axios from 'axios';

export const fetchAllProduct= async()=>{
    const response = await axios.get('http://localhost:4000/api/v1/products');
    return response.data;
}