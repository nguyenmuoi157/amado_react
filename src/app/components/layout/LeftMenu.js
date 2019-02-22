import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class LeftMenu extends Component {
  render() {
    return (
      <>
        <div className="mobile-nav">
          {/* <!-- Navbar Brand --> */}
          <div className="amado-navbar-brand">
            <Link to="index.html"><img src="img/core-img/logo.png" alt="" /></Link>
          </div>
          {/* <!-- Navbar Toggler --> */}
          <div className="amado-navbar-toggler">
            <span></span><span></span><span></span>
          </div>
        </div>
        <header className="header-area clearfix">
          {/* <!-- Close Icon --> */}
          <div className="nav-close">
            <i className="fa fa-close" aria-hidden="true"></i>
          </div>
          {/* <!-- Logo --> */}
          <div className="logo">
            <Link to="index.html"><img src="img/core-img/logo.png" alt="" /></Link>
          </div>
          {/* <!-- Amado Nav --> */}
          <nav className="amado-nav">
            <ul>
              <li className="active"><Link to="/home">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/productdetail">Product</Link></li>
              <li><Link to="/cart">Cart</Link></li>
              <li><Link to="/checkout">Checkout</Link></li>
            </ul>
          </nav>
          {/* <!-- Button Group --> */}
          <div className="amado-btn-group mt-30 mb-100">
            <Link to="#" className="btn amado-btn mb-15">%Discount%</Link>
            <Link to="#" className="btn amado-btn active">New this week</Link>
          </div>
          {/* <!-- Cart Menu --> */}
          <div className="cart-fav-search mb-100">
            <Link to="/cart" className="cart-nav"><img src="img/core-img/cart.png" alt="" /> Cart <span>(0)</span></Link>
            <Link to="#" className="fav-nav"><img src="img/core-img/favorites.png" alt="" /> Favourite</Link>
            <Link to="/search" className="search-nav"><img src="img/core-img/search.png" alt="" /> Search</Link>
          </div>
          {/* <!-- Social Button --> */}
          <div className="social-info d-flex justify-content-between">
            <Link to="#"><i className="fa fa-pinterest" aria-hidden="true"></i></Link>
            <Link to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
            <Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link>
            <Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
          </div>
        </header>
      </>
    )
  }
}
