import React from 'react'
import Master from '../Layout/Master'

export default function ListingMap() {
  return (
    <Master>
        <section className="hero-area">
            <div className="breadcrumbs-wrapper">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="page-title">
                    <h1 className="title">Listing Map</h1>
                    <ul className="breadcrumbs-link">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Listing Map</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="map-area">
            <div className="map-box">
            <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" /> 
            </div>
        </section>

        <section className="listing-grid-area pb-120">
            <form>
            <div className="container">
                <div className="row">
                <div className="listing-search-form mb-120">
                    <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form_group">
                        <input type="text" className="form_control" placeholder="Search By Keyword" name="search" required />
                        <i className="ti-ink-pen" />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form_group">
                        <select className="wide">
                            <option data-dsplay="Category">Category</option>
                            <option value="">Museums</option>
                            <option value="">Restaurant</option>
                            <option value="">Party Center</option>
                            <option value="">Fitness Zone</option>
                            <option value="">Game Field</option>
                            <option value="">Job &amp; Feeds</option>
                            <option value="">Shooping</option>
                            <option value="">Art Gallery</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form_group">
                        <input type="text" className="form_control" placeholder="Location" name="location" required />
                        <i className="ti-location-pin" />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="form_group">
                        <select className="wide">
                            <option data-dsplay="Location">Location</option>
                            <option value="">Dhaka</option>
                            <option value="">Delhi</option>
                            <option value="">lahore</option>
                            <option value="">Rome</option>
                            <option value="">New york</option>
                            <option value="">Pris</option>
                            <option value="">Bern</option>
                            <option value="">Bangkok</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="form_group">
                        <select className="wide">
                            <option data-dsplay="By Country">By Country</option>
                            <option value="">Bangladesh</option>
                            <option value="">India</option>
                            <option value="">Pakistan</option>
                            <option value="">Italy</option>
                            <option value="">America</option>
                            <option value="">London</option>
                            <option value="">Swizerland</option>
                            <option value="">Thailand</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="form_group">
                        <select className="wide">
                            <option data-dsplay="Default price">Default price</option>
                            <option value="">$10-$30</option>
                            <option value="">$30-$70</option>
                            <option value="">$70-$100</option>
                            <option value="">$100-$130</option>
                            <option value="">$130-$150</option>
                        </select>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="form_group">
                        <button className="main-btn icon-btn">Search Now</button>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                    <div className="listing-tab-filter mb-50">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#all">All</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#cat1">Food</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#cat2">Career</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#cat3">Shopping</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#cat4">Parking</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#cat5">Business</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#cat6">Museums</a>
                        </li>
                    </ul>
                    </div>
                    <div className="listing-search-filter mb-40">
                    <div className="row">
                        <div className="col-md-8">
                        <div className="filter-left d-flex align-items-center">
                            <div className="show-text">
                            <span>Showing Result 1-09</span>
                            </div>
                            <div className="sorting-dropdown">
                            <select>
                                <option data-dsplay="Default Sorting">Default Sorting</option>
                                <option value="">Museums</option>
                                <option value="">Restaurant</option>
                                <option value="">Party Center</option>
                                <option value="">Fitness Zone</option>
                                <option value="">Game Field</option>
                            </select>
                            </div>
                        </div>
                        </div>
                        <div className="col-md-4">
                        <div className="filter-right">
                            <ul className="filter-nav">
                            <li><a href="listing-grid.html" className="active"><i className="ti-view-grid" /></a></li>
                            <li><a href="listing-list.html"><i className="ti-view-list-alt" /></a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="tab-content">
                    <div className="tab-pane fade show active" id="all">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-24.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-25.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Party Corner</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-26.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <span className="featured-btn">Featured</span>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">City Palace</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-27.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <span className="featured-btn">Featured</span>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Easter Plaza</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-28.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Gym Ground</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-29.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <span className="featured-btn">Featured</span>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Miyami Sea</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-30.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Sky Center</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-31.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Gym Ground</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-32.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <span className="featured-btn">Featured</span>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Coffee Time</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="cat1">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-24.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-25.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <span className="featured-btn">Featured</span>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-26.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="cat2">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-27.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <span className="featured-btn">Featured</span>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-28.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-29.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="cat3">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-24.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-25.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-26.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <span className="featured-btn">Featured</span>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="cat4">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-27.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <span className="featured-btn">Featured</span>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-28.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-29.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="cat5">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-24.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-25.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <span className="featured-btn">Featured</span>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-26.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="cat6">
                        <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-27.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <span className="featured-btn">Featured</span>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-28.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <div className="listing-item listing-grid-item-two mb-30">
                            <div className="listing-thumbnail">
                                <img src="assets/images/listing/listing-grid-29.jpg" alt="Listing Image" />
                                <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                                <span className="featured-btn">Featured</span>
                                <ul className="ratings ratings-four">
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li className="star"><i className="flaticon-star-1" /></li>
                                <li><span><a href="#">(02 Reviews)</a></span></li>
                                </ul>
                            </div>
                            <div className="listing-content">
                                <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                                <p>Popular restaurant in california</p>
                                <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">Close</span></span>
                                <div className="listing-meta">
                                <ul>
                                    <li><span><i className="ti-location-pin" />California, USA</span></li>
                                    <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                                </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="button text-center mt-30">
                    <a href="listing-map.html" className="main-btn icon-btn">Load More</a>
                    </div>
                </div>
                </div>
            </div>
            </form>
        </section>
    </Master>
  )
}
