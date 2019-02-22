import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Sidebar extends Component {
    render() {
        return (
            <div className="shop_sidebar_area">

                {/* <!-- ##### Single Widget ##### --> */}
                <div className="widget catagory mb-50">
                    {/* <!-- Widget Title --> */}
                    <h6 className="widget-title mb-30">Catagories</h6>

                    {/* <!--  Catagories  --> */}
                    <div className="catagories-menu">
                        <ul>
                            <li className="active"><Link to="#">Chairs</Link></li>
                            <li><Link to="#">Beds</Link></li>
                            <li><Link to="#">Accesories</Link></li>
                            <li><Link to="#">Furniture</Link></li>
                            <li><Link to="#">Home Deco</Link></li>
                            <li><Link to="#">Dressings</Link></li>
                            <li><Link to="#">Tables</Link></li>
                        </ul>
                    </div>
                </div>

                {/* <!-- ##### Single Widget ##### --> */}
                <div className="widget brands mb-50">
                    {/* <!-- Widget Title --> */}
                    <h6 className="widget-title mb-30">Brands</h6>

                    <div className="widget-desc">
                        {/* <!-- Single Form Check --> */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="amado" />
                            <label className="form-check-label" for="amado">Amado</label>
                        </div>
                        {/* <!-- Single Form Check --> */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="ikea" />
                            <label className="form-check-label" for="ikea">Ikea</label>
                        </div>
                        {/* <!-- Single Form Check --> */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="furniture" />
                            <label className="form-check-label" for="furniture">Furniture Inc</label>
                        </div>
                        {/* <!-- Single Form Check --> */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="factory" />
                            <label className="form-check-label" for="factory">The factory</label>
                        </div>
                        {/* <!-- Single Form Check --> */}
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="artdeco" />
                            <label className="form-check-label" for="artdeco">Artdeco</label>
                        </div>
                    </div>
                </div>

                {/* <!-- ##### Single Widget ##### --> */}
                <div className="widget color mb-50">
                    {/* <!-- Widget Title --> */}
                    <h6 className="widget-title mb-30">Color</h6>

                    <div className="widget-desc">
                        <ul className="d-flex">
                            <li><Link to="#" className="color1"></Link></li>
                            <li><Link to="#" className="color2"></Link></li>
                            <li><Link to="#" className="color3"></Link></li>
                            <li><Link to="#" className="color4"></Link></li>
                            <li><Link to="#" className="color5"></Link></li>
                            <li><Link to="#" className="color6"></Link></li>
                            <li><Link to="#" className="color7"></Link></li>
                            <li><Link to="#" className="color8"></Link></li>
                        </ul>
                    </div>
                </div>

                {/* <!-- ##### Single Widget ##### --> */}
                <div className="widget price mb-50">
                    {/* <!-- Widget Title --> */}
                    <h6 className="widget-title mb-30">Price</h6>

                    <div className="widget-desc">
                        <div className="slider-range">
                            <div data-min="10" data-max="1000" data-unit="$" className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" data-value-min="10" data-value-max="1000" data-label-result="">
                                <div className="ui-slider-range ui-widget-header ui-corner-all"></div>
                                <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                                <span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0"></span>
                            </div>
                            <div className="range-price">$10 - $1000</div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
