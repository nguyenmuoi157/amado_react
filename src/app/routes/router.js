import { Route } from 'react-router-dom'

import React, { Component } from 'react'
import Home from '../components/Home/Home';
import Shop from '../components/Shop/Shop';
import Cart from '../components/Cart/Cart';
import CheckOut from '../components/CheckOut/CheckOut';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import Search from '../components/Search/Search';
import LeftMenu from '../components/layout/LeftMenu'

export default class AppRouter extends Component {
    render() {
        return (
            <div className="main-content-wrapper d-flex clearfix">
                <LeftMenu />
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route exact path="/shop" component={Shop} />
                <Route exact path="/cart" component={Cart} />
                <Route exact path="/checkout" component={CheckOut} />
                <Route exact path="/productdetail" component={ProductDetail} />
                <Route exact path="/search" component={Search} />
            </div>
        )
    }
}
