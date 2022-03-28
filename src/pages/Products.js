import React from 'react'
import Master from '../Layout/Master'

export default function Products() {
  return (
    <Master>
        <section className="hero-area">
            <div className="breadcrumbs-wrapper">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="page-title">
                    <h1 className="title">Our Store</h1>
                    <ul className="breadcrumbs-link">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Our Store</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="products-area pt-120 pb-120">
            <div className="container">
            <div className="products-filter mb-30">
                <div className="row justify-content-between align-items-center">
                <div className="col-lg-5">
                    <div className="sort-dropdown d-flex align-items-center">
                    <div className="show-text">
                        <p>Showing Result 1-09</p>
                    </div>
                    <div className="products-dropdown">
                        <select className="wide">
                        <option value="default" selected>Default Sorting</option>
                        <option value="new">Newest Product</option>
                        <option value="old">Oldest Product</option>
                        <option value="hight-to-low">High To Low</option>
                        <option value="low-to-high">Low To High</option>
                        </select>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <ul className="list d-flex">
                    <li><a href="products.html"><i className="ti-view-grid" /></a></li>
                    <li><a href="products.html" className="active"><i className="ti-view-list-alt" /></a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="products-item-wrapper">
                <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="products-item products-item-one mb-25">
                    <div className="product-img">
                        <img src="assets/images/products/products-1.jpg" alt="products Image" />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                        <div className="product-meta">
                            <a href="assets/images/products/products-1.jpg" className="icon img-popup"><i className="ti-zoom-in" /></a>
                            <a href="#" className="icon cart-btn"><i className="ti-shopping-cart" /></a>
                            <a href="#" className="icon wishlist-btn"><i className="ti-heart" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="product-info text-center">
                        <h3 className="title"><a href="products-details.html">Hand Dumbell</a></h3>
                        <span className="price">$250 <span className="pre-price">$270</span></span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="products-item products-item-one mb-25">
                    <div className="product-img">
                        <img src="assets/images/products/products-2.jpg" alt="products Image" />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                        <div className="product-meta">
                            <a href="assets/images/products/products-2.jpg" className="icon img-popup"><i className="ti-zoom-in" /></a>
                            <a href="#" className="icon cart-btn"><i className="ti-shopping-cart" /></a>
                            <a href="#" className="icon wishlist-btn"><i className="ti-heart" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="product-info text-center">
                        <h3 className="title"><a href="products-details.html">Green Plastic Light</a></h3>
                        <span className="price">$120.00</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="products-item products-item-one mb-25">
                    <div className="product-img">
                        <img src="assets/images/products/products-3.jpg" alt="products Image" />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                        <div className="product-meta">
                            <a href="assets/images/products/products-3.jpg" className="icon img-popup"><i className="ti-zoom-in" /></a>
                            <a href="#" className="icon cart-btn"><i className="ti-shopping-cart" /></a>
                            <a href="#" className="icon wishlist-btn"><i className="ti-heart" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="product-info text-center">
                        <h3 className="title"><a href="products-details.html">Leaser Photography</a></h3>
                        <span className="price">$320.00</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="products-item products-item-one mb-25">
                    <div className="product-img">
                        <img src="assets/images/products/products-4.jpg" alt="products Image" />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                        <div className="product-meta">
                            <a href="assets/images/products/products-4.jpg" className="icon img-popup"><i className="ti-zoom-in" /></a>
                            <a href="#" className="icon cart-btn"><i className="ti-shopping-cart" /></a>
                            <a href="#" className="icon wishlist-btn"><i className="ti-heart" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="product-info text-center">
                        <h3 className="title"><a href="products-details.html">Nike Sports Shoe</a></h3>
                        <span className="price">$232.00</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="products-item products-item-one mb-25">
                    <div className="product-img">
                        <img src="assets/images/products/products-5.jpg" alt="products Image" />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                        <div className="product-meta">
                            <a href="assets/images/products/products-5.jpg" className="icon img-popup"><i className="ti-zoom-in" /></a>
                            <a href="#" className="icon cart-btn"><i className="ti-shopping-cart" /></a>
                            <a href="#" className="icon wishlist-btn"><i className="ti-heart" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="product-info text-center">
                        <h3 className="title"><a href="products-details.html">Room Decorator</a></h3>
                        <span className="price">$320.00</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="products-item products-item-one mb-25">
                    <div className="product-img">
                        <img src="assets/images/products/products-6.jpg" alt="products Image" />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                        <div className="product-meta">
                            <a href="assets/images/products/products-6.jpg" className="icon img-popup"><i className="ti-zoom-in" /></a>
                            <a href="#" className="icon cart-btn"><i className="ti-shopping-cart" /></a>
                            <a href="#" className="icon wishlist-btn"><i className="ti-heart" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="product-info text-center">
                        <h3 className="title"><a href="products-details.html">Card Showcase</a></h3>
                        <span className="price">$852.00</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="products-item products-item-one mb-25">
                    <div className="product-img">
                        <img src="assets/images/products/products-7.jpg" alt="products Image" />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                        <div className="product-meta">
                            <a href="assets/images/products/products-7.jpg" className="icon img-popup"><i className="ti-zoom-in" /></a>
                            <a href="#" className="icon cart-btn"><i className="ti-shopping-cart" /></a>
                            <a href="#" className="icon wishlist-btn"><i className="ti-heart" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="product-info text-center">
                        <h3 className="title"><a href="products-details.html">Hand Watch</a></h3>
                        <span className="price">$25.00</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="products-item products-item-one mb-25">
                    <div className="product-img">
                        <img src="assets/images/products/products-8.jpg" alt="products Image" />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                        <div className="product-meta">
                            <a href="assets/images/products/products-8.jpg" className="icon img-popup"><i className="ti-zoom-in" /></a>
                            <a href="#" className="icon cart-btn"><i className="ti-shopping-cart" /></a>
                            <a href="#" className="icon wishlist-btn"><i className="ti-heart" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="product-info text-center">
                        <h3 className="title"><a href="products-details.html">Realstic Dumbell</a></h3>
                        <span className="price">$50.00</span>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="products-item products-item-one mb-25">
                    <div className="product-img">
                        <img src="assets/images/products/products-9.jpg" alt="products Image" />
                        <div className="product-overlay d-flex align-items-end justify-content-center">
                        <div className="product-meta">
                            <a href="assets/images/products/products-9.jpg" className="icon img-popup"><i className="ti-zoom-in" /></a>
                            <a href="#" className="icon cart-btn"><i className="ti-shopping-cart" /></a>
                            <a href="#" className="icon wishlist-btn"><i className="ti-heart" /></a>
                        </div>
                        </div>
                    </div>
                    <div className="product-info text-center">
                        <h3 className="title"><a href="products-details.html">Hand Speaker</a></h3>
                        <span className="price">$250.00</span>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                    <div className="button text-center mt-50">
                    <a href="#" className="main-btn icon-btn">Load More</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </Master>
  )
}
