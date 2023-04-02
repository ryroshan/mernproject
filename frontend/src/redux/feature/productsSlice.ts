import { fetchProductAsync } from '../actions/getproducts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { IProductResponse } from '../types/types';

interface IProductState  {
    productsData : IProductResponse | null,
    status: 'idle' | 'loading' | 'succeeded' | 'failed',
    error: string | null
 }

const initialState: IProductState = {
    productsData: null,
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
        .addCase(fetchProductAsync.fulfilled, (state, action:PayloadAction<IProductResponse>)=>{
            state.status = 'succeeded'
            state.productsData = action.payload
        })
        .addCase(fetchProductAsync.rejected, (state,action)=>{
            state.status = 'failed'
            state.error = action.error?.message || ''
        })
    }
});


export default productsSlice.reducer;