import React from 'react'
import {Link} from 'react-router-dom';
import logo from './Logo.png'
import { useSelector } from 'react-redux';

export default function Header() {
    const items = useSelector((state) => state.cart.items)
  return (
    <div className='header'>   
    <img className='logo' src={logo} alt=" logo" /> <div style={{display:'flex',alignItems:'center',gap:'50px'}}>
        <Link to="/" className='none'><li>HOME</li></Link>
        <Link to="/cart">
            <div className='iconkart'>
            <i className="bi-cart-fill kk me-1"></i>
            <span className='pst'>
            {items.length}
            </span>
               
                </div>
            </Link>
            </div>
    </div>
  )
}
