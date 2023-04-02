import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import NavBar from './components/navbar/NavBar';
import Contact from './pages/Contact';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Loader from './components/loader/Loader';

function App() {
  //  const btn = ()=> navigator.geolocation.getCurrentPosition(po=>{
  //   const {latitude, longitude} = po.coords;
  //   const url =`https://nominatim.openstreetmap.org/reverse?format=json&lat${latitude}&lon=${longitude}`;
  //   fetch(url).then(res=> res.json()).then(data=> {
  //     console.log('rossa');
      
  //     console.table(data.address)
  //   }).catch(()=>{
  //     console.log(`got error`);
      
    // })

    // })


  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/loader' element={<Loader />} />
        </Routes>
        <Footer />
     </Router>
    </div>
  );
}

export default App;
