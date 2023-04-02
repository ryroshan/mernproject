import React from 'react'
import { IProduct } from '../../redux/types/types';
import './style.css'

interface Idata {
    item: IProduct
}

const Product = ({item}:Idata) => {
    console.log(item);
    
  return (
    <div className='product__contain'>
        <img className='img' src={item.images[0].url} alt='product__image'/>
        <img className='img' src={item.images[0].url} alt='product__image'/>
        <img className='img' src={item.images[0].url} alt='product__image'/>
    </div>
  )
}

export default Product