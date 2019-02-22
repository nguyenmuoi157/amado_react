import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class LeftMenuMobile extends Component {
    render() {
        return (
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
        )
    }
}
