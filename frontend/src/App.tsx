import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './redux/hook/hookType';
import { fetchProductAsync } from './redux/feature/productsSlice';

function App() {
  const selector = useAppSelector(state=>state.products);
  const dispatch = useAppDispatch()

  console.log(selector);

  
  useEffect(()=>{
    dispatch(fetchProductAsync())
  },[dispatch])


  return (
    <div className="App">
   
    </div>
  );
}

export default App;
