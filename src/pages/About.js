import React from 'react'
import Master from '../Layout/Master'

export default function About() {
  return (
    <Master>
        <section className="hero-area">
            <div className="breadcrumbs-wrapper">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="page-title">
                    <h1 className="title">About us</h1>
                    <ul className="breadcrumbs-link">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">About us</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*====== End Hero Section ======*/}
        {/*====== Start Features Section ======*/}
        <section className="features-area">
            <div className="features-wrapper-three pt-110">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-title text-center mb-60">
                    <span className="sub-title">Some Feature.</span>
                    <h2>Caring Your Hobbies</h2>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="features-item features-item-two text-center mb-40">
                    <div className="icon">
                        <i className="flaticon-add-user" />
                    </div>
                    <div className="content">
                        <h3 className="title">User Friendly</h3>
                        <p>Congue men porttitor blandit erat to loborti lacinia sapien pretium disenty</p>
                        <a href="how-work.html" className="btn-link icon-btn">More Details</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="features-item features-item-two text-center mb-40">
                    <div className="icon">
                        <i className="flaticon-gift-box" />
                    </div>
                    <div className="content">
                        <h3 className="title">Daily Offers</h3>
                        <p>Congue men porttitor blandit erat to loborti lacinia sapien pretium disenty</p>
                        <a href="how-work.html" className="btn-link icon-btn">More Details</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="features-item features-item-two text-center mb-40">
                    <div className="icon">
                        <i className="flaticon-laptop" />
                    </div>
                    <div className="content">
                        <h3 className="title">Quick Search</h3>
                        <p>Congue men porttitor blandit erat to loborti lacinia sapien pretium disenty</p>
                        <a href="how-work.html" className="btn-link icon-btn">More Details</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="features-item features-item-two text-center mb-40">
                    <div className="icon">
                        <i className="flaticon-headphone" />
                    </div>
                    <div className="content">
                        <h3 className="title">Live Support</h3>
                        <p>Congue men porttitor blandit erat to loborti lacinia sapien pretium disenty</p>
                        <a href="how-work.html" className="btn-link icon-btn">More Details</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*====== End Features Section ======*/}
        {/*====== Start Features Section ======*/}
        <section className="features-area">
            <div className="features-wrapper-four pt-80 pb-115">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="features-img">
                    <img src="assets/images/features/features-1.jpg" alt="Features Image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="features-content-box features-content-box-one">
                    <div className="section-title section-title-left mb-30">
                        <span className="sub-title">Our Speciality</span>
                        <h2>Comprehnsive All Great
                        Destination Here</h2>
                    </div>
                    <h5>Risus urnas Iaculis per amet vestibulum luctus.tincidunt ultricies aenean
                        quam eros eleifend sodales cubilia mattis quam.</h5>
                    <ul className="features-list-one">
                        <li className="list-item">
                        <div className="icon">
                            <i className="flaticon-find" />
                        </div>
                        <div className="content">
                            <h5>Find What You Want</h5>
                            <p>Rhoncus dolor quam etiam mattis, tincidunt nec lobortis sociis
                            facilisi aenean netus tempor duis.</p>
                        </div>
                        </li>
                        <li className="list-item">
                        <div className="icon">
                            <i className="flaticon-place" />
                        </div>
                        <div className="content">
                            <h5>Easy Choose Your Place</h5>
                            <p>Rhoncus dolor quam etiam mattis, tincidunt nec lobortis sociis
                            facilisi aenean netus tempor duis.</p>
                        </div>
                        </li>
                        <li className="list-item">
                        <div className="icon">
                            <i className="flaticon-social-care" />
                        </div>
                        <div className="content">
                            <h5>Live Online Assistance</h5>
                            <p>Rhoncus dolor quam etiam mattis, tincidunt nec lobortis sociis
                            facilisi aenean netus tempor duis.</p>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*====== End Features Section ======*/}
        {/*====== Start CTA Section ======*/}
        <section className="cta-area">
            <div className="cta-wrapper-two bg_cover b" style={{backgroundImage: 'url(assets/images/bg/cta-bg-2.jpg)'}}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="company-name">Fioxen</div>
                </div>
                <div className="col-lg-5">
                    <div className="cta-content-box">
                    <h2>Visit the Best Places</h2>
                    <p>Pharetra venenatis ante pulvinar fermentum dignissim one malesuada laoreet ridiculus fringilla quam</p>
                    <a href="listing-grid.html" className="main-btn icon-btn">Explore Now</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*====== End CTA Section ======*/}
        {/*====== Start Testimonial Section ======*/}
        <section className="testimonial-area bg_cover pt-110 pb-265" style={{backgroundImage: 'url(assets/images/bg/testimonial-bg-2.jpg)'}}>
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                <div className="section-title text-center mb-60">
                    <span className="sub-title">Our Testimoinals</span>
                    <h2>Happy User Feedback</h2>
                </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <div className="testimonial-wrapper-one text-center">
                    <div className="testimonial-review-area">
                    <div className="testimonial-thumb-slider-one">
                        <div className="single-thumb">
                        <img src="assets/images/testimonial/tm-thumb-1.jpg" alt="testimonial thumb" />
                        </div>
                        <div className="single-thumb">
                        <img src="assets/images/testimonial/tm-thumb-2.jpg" alt="testimonial thumb" />
                        </div>
                        <div className="single-thumb">
                        <img src="assets/images/testimonial/tm-thumb-3.jpg" alt="testimonial thumb" />
                        </div>
                        <div className="single-thumb">
                        <img src="assets/images/testimonial/tm-thumb-2.jpg" alt="testimonial thumb" />
                        </div>
                    </div>
                    <div className="testimonial-content-slider-one">
                        <div className="testimonial-item">
                        <div className="testimonial-content">
                            <p>multiply given all hath given may meat god abundant appear lioud
                            fourth madman mane said god dominion great gathering called very shall after cre ated from fruitful place over the mitual </p>
                            <div className="author-info">
                            <h4>Melisa Powels</h4>
                            <span className="position">Sr. Designer</span>
                            </div>
                        </div>
                        </div>
                        <div className="testimonial-item">
                        <div className="testimonial-content">
                            <p>multiply given all hath given may meat god abundant appear lioud
                            fourth madman mane said god dominion great gathering called very shall after cre ated from fruitful place over the mitual </p>
                            <div className="author-info">
                            <h4>Martyn Decode</h4>
                            <span className="position">Sr. Designer</span>
                            </div>
                        </div>
                        </div>
                        <div className="testimonial-item">
                        <div className="testimonial-content">
                            <p>multiply given all hath given may meat god abundant appear lioud
                            fourth madman mane said god dominion great gathering called very shall after cre ated from fruitful place over the mitual </p>
                            <div className="author-info">
                            <h4>Alesha Mature</h4>
                            <span className="position">Sr. Designer</span>
                            </div>
                        </div>
                        </div>
                        <div className="testimonial-item">
                        <div className="testimonial-content">
                            <p>multiply given all hath given may meat god abundant appear lioud
                            fourth madman mane said god dominion great gathering called very shall after cre ated from fruitful place over the mitual </p>
                            <div className="author-info">
                            <h4>Martyn Decode</h4>
                            <span className="position">Sr. Designer</span>
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
        {/*====== End Testimonial Section ======*/}
        {/*====== Start Newsletter Section ======*/}
        <section className="newsletter-area">
            <div className="container">
            <div className="newsletter-wrapper newsletter-wrapper-one bg_cover" style={{backgroundImage: 'url(assets/images/bg/newsletter-bg-1.jpg)'}}>
                <div className="row">
                <div className="col-lg-5">
                    <div className="newsletter-content-box-one">
                    <div className="icon">
                        <i className="flaticon-email" />
                    </div>
                    <div className="content">
                        <h2>Get Special
                        Rewards</h2>
                    </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter-form">
                    <div className="form_group">
                        <input type="email" className="form_control" placeholder="Enter Address" name="email" required />
                        <i className="ti-location-pin" />
                        <button className="main-btn icon-btn">Subscribe</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        {/*====== End Newsletter Section ======*/}
        {/*====== Start Team Section ======*/}
        <section className="team-area pt-115 pb-85">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                <div className="section-title text-center mb-50">
                    <span className="sub-title">Team Member</span>
                    <h2>Meet Our Executive</h2>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-item team-item-one mb-30">
                    <div className="team-img">
                    <img src="assets/images/team/team-1.jpg" alt="Team Image" />
                    <div className="team-social">
                        <ul className="social-link">
                        <li><a href="#"><i className="ti-facebook" /></a></li>
                        <li><a href="#"><i className="ti-twitter-alt" /></a></li>
                        <li><a href="#"><i className="ti-linkedin" /></a></li>
                        <li><a href="#"><i className="ti-pinterest" /></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="team-info text-center">
                    <h3 className="title">Alesha Mature</h3>
                    <span className="position">Sr. Executive</span>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-item team-item-one mb-30">
                    <div className="team-img">
                    <img src="assets/images/team/team-2.jpg" alt="Team Image" /><div className="team-social">
                        <ul className="social-link">
                        <li><a href="#"><i className="ti-facebook" /></a></li>
                        <li><a href="#"><i className="ti-twitter-alt" /></a></li>
                        <li><a href="#"><i className="ti-linkedin" /></a></li>
                        <li><a href="#"><i className="ti-pinterest" /></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="team-info text-center">
                    <h3 className="title">Martyn Decode</h3>
                    <span className="position">Sr. Executive</span>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-item team-item-one mb-30">
                    <div className="team-img">
                    <img src="assets/images/team/team-3.jpg" alt="Team Image" />
                    <div className="team-social">
                        <ul className="social-link">
                        <li><a href="#"><i className="ti-facebook" /></a></li>
                        <li><a href="#"><i className="ti-twitter-alt" /></a></li>
                        <li><a href="#"><i className="ti-linkedin" /></a></li>
                        <li><a href="#"><i className="ti-pinterest" /></a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="team-info text-center">
                    <h3 className="title">Alesha Mature</h3>
                    <span className="position">Sr. Executive</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    </Master>
  )
}
