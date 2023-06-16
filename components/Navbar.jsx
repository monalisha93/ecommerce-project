import React from 'react';
import Link from 'next/link';
import { AiOutlineLogout, AiOutlineShopping } from 'react-icons/ai'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router=useRouter()
  const { showCart, setShowCart, totalQuantities,loggedIn,setLoggedIn } = useStateContext();
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setLoggedIn(false); 
    router.push('/login'); 
  };
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">Boat Headphones</Link>
      </p>
<div >{loggedIn ? (
  <>
    <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
      <AiOutlineShopping />
      <span className="cart-item-qty">{totalQuantities}</span>
    </button>
    <button type="button" className="cart-icon" onClick={handleLogout}>
      <AiOutlineLogout />
    </button>
  </>
) : (
  <Link href="/login">Login</Link>
)}</div>
     
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar