import React from 'react'
import Master from '../Layout/Master'

export default function ListingGrid() {
  return (
    <Master>
        <section className="hero-area">
            <div className="breadcrumbs-wrapper">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="page-title">
                    <h1 className="title">Listing Grid</h1>
                    <ul className="breadcrumbs-link">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Listing</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        <section className="listing-grid-area pt-120 pb-90">
            <div className="container">
            <div className="row">
                <div className="col-lg-4">
                <div className="sidebar-widget-area">
                    <div className="widget search-listing-widget mb-30">
                    <h4 className="widget-title">Filter Search</h4>
                    <form>
                        <div className="search-form">
                        <div className="form_group">
                            <input type="search" className="form_control" placeholder="Search keyword" name="search" required />
                            <i className="ti-search" />
                        </div>
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
                        <div className="form_group">
                            <select className="wide">
                            <option data-dsplay="By place">By place</option>
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
                        <div className="price-range-widget">
                        <h4 className="widget-title">Around Distance: 50 km</h4>
                        <div id="slider-range" className="mb-20" />
                        <div className="price-number">
                            <span className="amount"><input type="text" id="amount" /></span>
                        </div>
                        <select className="wide">
                            <option data-dsplay="Default price">Default price</option>
                            <option value="">$10-$30</option>
                            <option value="">$30-$70</option>
                            <option value="">$70-$100</option>
                            <option value="">$100-$130</option>
                            <option value="">$130-$150</option>
                        </select>
                        </div>
                        <div className="form_group">
                        <button className="main-btn icon-btn">Search Now</button>
                        </div>
                    </form>
                    </div>
                    <div className="widget newsletter-widget mb-30">
                    <div className="newsletter-widget-wrap bg_cover" style={{backgroundImage: 'url(assets/images/newsletter-widget-1.jpg)'}}>
                        <i className="flaticon-email-1" />
                        <h3>Subscribe Our
                        Newsletter</h3>
                        <button className="main-btn icon-btn">Subscribe</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-8">
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
                <div className="listing-grid-wrapper">
                    <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <div className="listing-item listing-grid-item-two mb-30">
                        <div className="listing-thumbnail">
                            <img src="assets/images/listing/listing-grid-16.jpg" alt="Listing Image" />
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
                    <div className="col-md-6 col-sm-12">
                        <div className="listing-item listing-grid-item-two mb-30">
                        <div className="listing-thumbnail">
                            <img src="assets/images/listing/listing-grid-17.jpg" alt="Listing Image" />
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
                    <div className="col-md-6 col-sm-12">
                        <div className="listing-item listing-grid-item-two mb-30">
                        <div className="listing-thumbnail">
                            <img src="assets/images/listing/listing-grid-18.jpg" alt="Listing Image" />
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
                    <div className="col-md-6 col-sm-12">
                        <div className="listing-item listing-grid-item-two mb-30">
                        <div className="listing-thumbnail">
                            <img src="assets/images/listing/listing-grid-19.jpg" alt="Listing Image" />
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
                    <div className="col-md-6 col-sm-12">
                        <div className="listing-item listing-grid-item-two mb-30">
                        <div className="listing-thumbnail">
                            <img src="assets/images/listing/listing-grid-20.jpg" alt="Listing Image" />
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
                    <div className="col-md-6 col-sm-12">
                        <div className="listing-item listing-grid-item-two mb-30">
                        <div className="listing-thumbnail">
                            <img src="assets/images/listing/listing-grid-21.jpg" alt="Listing Image" />
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
                    <div className="col-md-6 col-sm-12">
                        <div className="listing-item listing-grid-item-two mb-30">
                        <div className="listing-thumbnail">
                            <img src="assets/images/listing/listing-grid-22.jpg" alt="Listing Image" />
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
                    <div className="col-md-6 col-sm-12">
                        <div className="listing-item listing-grid-item-two mb-30">
                        <div className="listing-thumbnail">
                            <img src="assets/images/listing/listing-grid-23.jpg" alt="Listing Image" />
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
                </div>
            </div>
            </div>
        </section>
    </Master>
  )
}
