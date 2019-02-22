import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      // <!-- Product Catagories Area Start -->
      <div className="products-catagories-area clearfix">
        <div className="amado-pro-catagory clearfix">

          {/* <!-- Single Catagory --> */}
          <div className="single-products-catagory clearfix">
            <Link to="shop.html">
              <img src="img/bg-img/1.jpg" alt="" />
              {/* <!-- Hover Content --> */}
              <div className="hover-content">
                <div className="line"></div>
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
            </Link>
          </div>

          {/* <!-- Single Catagory --> */}
          <div className="single-products-catagory clearfix">
            <Link to="shop.html">
              <img src="img/bg-img/2.jpg" alt="" />
              {/* <!-- Hover Content --> */}
              <div className="hover-content">
                <div className="line"></div>
                <p>From $180</p>
                <h4>Minimalistic Plant Pot</h4>
              </div>
            </Link>
          </div>

          {/* <!-- Single Catagory --> */}
          <div className="single-products-catagory clearfix">
            <Link to="shop.html">
              <img src="img/bg-img/3.jpg" alt="" />
              {/* <!-- Hover Content --> */}
              <div className="hover-content">
                <div className="line"></div>
                <p>From $180</p>
                <h4>Modern Chair</h4>
              </div>
            </Link>
          </div>

          {/* <!-- Single Catagory --> */}
          <div className="single-products-catagory clearfix">
            <Link to="shop.html">
              <img src="img/bg-img/4.jpg" alt="" />
              {/* <!-- Hover Content --> */}
              <div className="hover-content">
                <div className="line"></div>
                <p>From $180</p>
                <h4>Night Stand</h4>
              </div>
            </Link>
          </div>

          {/* <!-- Single Catagory --> */}
          <div className="single-products-catagory clearfix">
            <Link to="shop.html">
              <img src="img/bg-img/5.jpg" alt="" />
              {/* <!-- Hover Content --> */}
              <div className="hover-content">
                <div className="line"></div>
                <p>From $18</p>
                <h4>Plant Pot</h4>
              </div>
            </Link>
          </div>

          {/* <!-- Single Catagory --> */}
          <div className="single-products-catagory clearfix">
            <Link to="shop.html">
              <img src="img/bg-img/6.jpg" alt="" />
              {/* <!-- Hover Content --> */}
              <div className="hover-content">
                <div className="line"></div>
                <p>From $320</p>
                <h4>Small Table</h4>
              </div>
            </Link>
          </div>

          {/* <!-- Single Catagory --> */}
          <div className="single-products-catagory clearfix">
            <Link to="shop.html">
              <img src="img/bg-img/7.jpg" alt="" />
              {/* <!-- Hover Content --> */}
              <div className="hover-content">
                <div className="line"></div>
                <p>From $318</p>
                <h4>Metallic Chair</h4>
              </div>
            </Link>
          </div>

          {/* <!-- Single Catagory --> */}
          <div className="single-products-catagory clearfix">
            <Link to="shop.html">
              <img src="img/bg-img/8.jpg" alt="" />
              {/* <!-- Hover Content --> */}
              <div className="hover-content">
                <div className="line"></div>
                <p>From $318</p>
                <h4>Modern Rocking Chair</h4>
              </div>
            </Link>
          </div>

          {/* <!-- Single Catagory --> */}
          <div className="single-products-catagory clearfix">
            <Link to="shop.html">
              <img src="img/bg-img/9.jpg" alt="" />
              {/* <!-- Hover Content --> */}
              <div className="hover-content">
                <div className="line"></div>
                <p>From $318</p>
                <h4>Home Deco</h4>
              </div>
            </Link>
          </div>
        </div>
      </div> 
    )
  }
}
