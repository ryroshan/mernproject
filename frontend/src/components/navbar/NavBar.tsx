import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import PermContactCalendarSharpIcon from '@mui/icons-material/PermContactCalendarSharp';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import './style.css'

const NavBar = () => {
  return (
    <div className='navBar__container'>
        <div className='navLinks__container'>
          <MenuSharpIcon style={{color:'white', fontSize:'35px', cursor:'pointer'}}/>
          <Link style={{textDecoration:'none',color:'yellow'}} to='/'>Home</Link>
          <Link style={{textDecoration:'none', color:'yellow'}} to='/products'>Products</Link>
          <Link style={{textDecoration:'none',color:'yellow'}} to='/contact'>Contact</Link>
          <Link style={{textDecoration:'none',color:'yellow'}} to='/about'>About</Link>
        </div>
       <div className='search__contact_container'>
        <div></div>
         <SearchIcon style={{ fontSize: '35px', color:'white'}}/>
         <LocalMallSharpIcon style={{ fontSize: '35px', color:'white' }} />
         <PermContactCalendarSharpIcon style={{ fontSize: '35px', color:'white' }}/>
       </div>
    </div>
  )
}

export default NavBar