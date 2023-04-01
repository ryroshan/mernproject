import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const FETCH_API = 'http://localhost:4000/api/v1/products'

export const fetchProductAsync = createAsyncThunk(
    'products/fetchProducts',
    async ()=>{
        try{
            const result = await axios.get(FETCH_API);
            return result.data;
        }catch(err){
            console.log(err);
            
        }
         
    }
)