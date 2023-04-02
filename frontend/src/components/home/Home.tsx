import React, {useEffect} from 'react'
import { fetchProductAsync } from '../../redux/actions/getproducts';
import { useAppDispatch, useAppSelector } from '../../redux/hook/hookType';
import Product from '../product/Product';
import './style.css'


const Home = () => {
  const {productsData,error,status} = useAppSelector(state=>state.products);
  const dispatch = useAppDispatch();
  

  useEffect(()=>{
    dispatch(fetchProductAsync())
  },[dispatch])

  return (
    <div className='banner'>
        <p>Welcome to Ecommerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <div className='home_container'>
        {productsData?.products.map(item=>(
          <Product item={item}/>
        ))}
        </div>
    </div>
  )
}

export default Home