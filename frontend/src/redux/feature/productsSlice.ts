import { fetchProductAsync } from '../actions/getproducts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';



interface IProducts {
    stock: string,
    category: string,
    description: string,
    name: string,
    numOfReviews: string,
    price: number,
    rating: number
};


interface IProductState  {
   product : IProducts[],
   status: 'idle' | 'loading' | 'succeeded' | 'failed',
   error: string | null
}

const initialState: IProductState = {
    product: [],
    status: 'idle',
    error: null
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{},
    extraReducers :(builder)=> {
        builder
        .addCase(fetchProductAsync.pending, (state, action)=>{
            state.status = 'loading'
        })
        .addCase(fetchProductAsync.fulfilled, (state, action:PayloadAction<IProducts[]>)=>{
            state.status = 'succeeded'
            state.product = action.payload
        })
        .addCase(fetchProductAsync.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = action.error?.message || ''
        })
    }
});


export default productsSlice.reducer;