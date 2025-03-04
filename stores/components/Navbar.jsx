import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

const Navbar = () => {

  const {cartItems }= useCart()

  return (
    <div className="navbar-section">

      <div className="navSection">
      <Link to='/' className="custom-link">
  <div className="title">
    <h2>
     Welcome To MyShop
    </h2>
  </div>
</Link>

        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user">
          <div className="user-detail">SignIN/SignUp</div>
        </div>
          <Link to= '/cart'>
          <div className="cart">Cart
          <span>
            {cartItems.length}
          </span>
          </div>
          </Link>

          <div className="buy-now">
        <Link to="/cart">
          <button className="buy-now-button">
            Buy Now
            <span>{cartItems.length}</span> 
          </button>
        </Link>
      </div>



      </div>
      <div className="subMenu">
        <ul>
          <Link to="/mobiles" className="custom-link"><li>Mobiles</li> </Link>
          <Link to="/laptops" className="custom-link"><li>Computers</li></Link>
          <Link to="/watches" className="custom-link"> <li>Watches</li></Link>
          <Link to="/mensdress" className="custom-link"> <li>Mens Wear</li></Link>
          <Link to="/womansdress" className="custom-link"><li>Woman Wear</li></Link>
          <Link to="/furniture" className="custom-link"><li>Furniture</li></Link>
          <Link to="/kitchen" className="custom-link">  <li>Kitchen</li></Link>
          <Link to="/ac" className="custom-link"><li>AC</li></Link>
          <Link to="/fridge" className="custom-link">  <li>Fridge</li></Link>
          <Link to="/books" className="custom-link"><li>Books</li></Link>
          <Link to="/" className="custom-link"><li>Speakers</li></Link>
          <Link to="/tv" className="custom-link"><li>TV's</li></Link>
           
        </ul>
      </div>
    </div >
  );
};

export default Navbar;