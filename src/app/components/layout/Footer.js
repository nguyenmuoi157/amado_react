import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className="newsletter-area section-padding-100-0">
          <div className="container">
            <div className="row align-items-center">
              {/* <!-- Newsletter Text --> */}
              <div className="col-12 col-lg-6 col-xl-7">
                <div className="newsletter-text mb-100">
                  <h2>Subscribe for a <span>25% Discount</span></h2>
                  <p>Nulla ac convallis lorem, eget euismod nisl. Donec in libero sit amet mi vulputate consectetur. Donec auctor interdum purus, ac finibus massa bibendum nec.</p>
                </div>
              </div>
              {/* //<!-- Newsletter Form --> */}
              <div className="col-12 col-lg-6 col-xl-5">
                <div className="newsletter-form mb-100">
                  <form action="#" method="post">
                    <input type="email" name="email" className="nl-email" placeholder="Your E-mail" />
                    <input type="submit" value="Subscribe" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer_area clearfix">
          <div className="container">
            <div className="row align-items-center">
              {/* <!-- Single Widget Area --> */}
              <div className="col-12 col-lg-4">
                <div className="single_widget_area">
                  {/* <!-- Logo --> */}
                  <div className="footer-logo mr-50">
                    <Link to="index.html"><img src="img/core-img/logo2.png" alt="" /></Link>
                  </div>
                  {/* <!-- Copywrite Text --> */}
                  <p className="copywrite">
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  </p>
                </div>
              </div>
              {/* <!-- Single Widget Area --> */}
              <div className="col-12 col-lg-8">
                <div className="single_widget_area">
                  {/* <!-- Footer Menu --> */}
                  <div className="footer_menu">
                    <nav className="navbar navbar-expand-lg justify-content-end">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#footerNavContent" aria-controls="footerNavContent" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
                      <div className="collapse navbar-collapse" id="footerNavContent">
                        <ul className="navbar-nav ml-auto">
                          <li className="nav-item active">
                            <a className="nav-link" href="index.html">Home</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="shop.html">Shop</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="product-details.html">Product</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="cart.html">Cart</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="checkout.html">Checkout</a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </div>
    )
  }
}
