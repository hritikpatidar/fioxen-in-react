import React from 'react'
import Master from '../Layout/Master'

export default function Contact() {
  return (
    <Master>
        <section className="hero-area">
            <div className="breadcrumbs-wrapper">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="page-title">
                    <h1 className="title">Contact us</h1>
                    <ul className="breadcrumbs-link">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Contact us</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="contact-section pt-115 pb-100">
            <div className="container">
            <div className="row">
                <div className="col-lg-10">
                <div className="section-title section-title-left mb-50">
                    <span className="sub-title">Contact With Us</span>
                    <h2>How Can We Help You</h2>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                <div className="contact-information-list">
                    <div className="information-item mb-30">
                    <div className="icon">
                        <i className="ti-location-pin" />
                    </div>
                    <div className="info">
                        <h5>Address</h5>
                        <p>46 suvastu arcade 3rd Floor
                        palace road, London.</p>
                    </div>
                    </div>
                    <div className="information-item mb-30">
                    <div className="icon">
                        <i className="ti-mobile" />
                    </div>
                    <div className="info">
                        <h5>Phone</h5>
                        <p><a href="tel:445555552580">44 (555) 555 2580</a></p>
                        <p><a href="tel:445555552580">31 (555) 222 2560</a></p>
                    </div>
                    </div>
                    <div className="information-item mb-30">
                    <div className="icon">
                        <i className="ti-email" />
                    </div>
                    <div className="info">
                        <h5>Email</h5>
                        <p><a href="mailto:info@fioxen20.com">info@fioxen20.com</a></p>
                        <p><a href="mailto:info@fioxen20.com">info@fioxen22.com</a></p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-8">
                <div className="contact-wrapper-one mb-30">
                    <div className="contact-form">
                    <form>
                        <div className="row">
                        <div className="col-lg-6">
                            <div className="form_group">
                            <input type="text" className="form_control" placeholder="First Name" name="name" required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form_group">
                            <input type="text" className="form_control" placeholder="Last Name" name="name" required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form_group">
                            <input type="text" className="form_control" placeholder="Phone" name="phone" required />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form_group">
                            <input type="email" className="form_control" placeholder="Email" name="email" required />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form_group">
                            <input type="text" className="form_control" placeholder="Subject" name="subject" required />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form_group">
                            <textarea className="form_control" placeholder="Your Message" name="message" defaultValue={""} />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="form_group">
                            <button className="main-btn">Send Message</button>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="contact-page-map">
            <div className="map-box">
            <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" />
            </div>
        </section>
    </Master>
  )
}
