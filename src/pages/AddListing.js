import React from 'react'
import Master from '../Layout/Master'

export default function AddListing() {
  return (
    <Master>
        <section className="hero-area">
            <div className="breadcrumbs-wrapper">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="page-title">
                    <h1 className="title">Add Listing</h1>
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
        <section className="fioxen-add-listing pt-120">
            <div className="container">
            <form>
                <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="add-listing-form general-listing-form mb-60">
                    <h4 className="title">General Information</h4>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="form_group">
                            <input type="text" className="form_control" placeholder="Place Name" name="name" required />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form_group">
                            <select className="wide">
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
                        <div className="col-lg-6">
                        <div className="form_group">
                            <input type="text" className="form_control" placeholder="Keywords" name="keywords" required />
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <div className="form_group">
                            <textarea className="form_control" placeholder="Description" name="discription" defaultValue="" />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="add-listing-form details-listing-form mb-60">
                    <h4 className="title">Details Information</h4>
                    <div className="row">
                        <div className="col-lg-6">
                        <div className="form_group">
                            <input type="text" className="form_control" placeholder="Name" name="name" required />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form_group">
                            <input type="email" className="form_control" placeholder="Email" name="email" required />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form_group">
                            <input type="text" className="form_control" placeholder="Phone" name="phone" required />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form_group">
                            <input type="url" className="form_control" placeholder="Website" name="website" required />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form_group">
                            <input type="text" className="form_control" placeholder="Designation" name="name" required />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form_group">
                            <input type="text" className="form_control" placeholder="Company" name="name" required />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form_group">
                            <input type="url" className="form_control" placeholder="Facebook (Optional)" name="website" required />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form_group">
                            <input type="url" className="form_control" placeholder="Twitter (Optional)" name="website" required />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form_group">
                            <input type="url" className="form_control" placeholder="Linked (Optional)" name="website" required />
                        </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="form_group">
                            <input type="url" className="form_control" placeholder="Skype (Optional)" name="website" required />
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="add-listing-form upload-listing-form mb-60">
                    <h4 className="title">Gallery Images</h4>
                    <p>Click here or drope files to upload</p>
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="form_group file-input-one">
                            <input type="file" name="Image" />
                            <div className="upload-content">
                            <div className="upload-title-icon d-flex align-items-center justify-content-center">
                                <img src="assets/images/elements/input-1.png" alt="Image" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="form_group file-input-one">
                            <input type="file" name="Image" />
                            <div className="upload-content">
                            <div className="upload-title-icon d-flex align-items-center justify-content-center">
                                <img src="assets/images/elements/input-1.png" alt="Image" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="form_group file-input-one">
                            <input type="file" name="Image" />
                            <div className="upload-content">
                            <div className="upload-title-icon d-flex align-items-center justify-content-center">
                                <img src="assets/images/elements/input-1.png" alt="Image" />
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-12">
                        <div className="form_group file-input-two">
                            <input type="file" name="Video" />
                            <div className="upload-content">
                            <div className="upload-title-icon d-flex align-items-center justify-content-center">
                                <img src="assets/images/elements/input-2.png" alt="Image" />
                                <span>Add Video +</span>
                            </div>
                            </div>
                        </div>
                        <div className="form_group file-input-two">
                            <input type="file" name="Image" />
                            <div className="upload-content">
                            <div className="upload-title-icon d-flex align-items-center justify-content-center">
                                <img src="assets/images/elements/input-3.png" alt="Image" />
                                <span>Add Video +</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="add-listing-form amenities-listing-form mb-60">
                    <h4 className="title">Amenities</h4>
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="form_group">
                            <div className="single-checkbox d-flex">
                            <input type="checkbox" id="check1" name="checkbox" defaultChecked />
                            <label htmlFor="check1"><span>Alarm system</span></label>
                            </div>
                            <div className="single-checkbox d-flex">
                            <input type="checkbox" id="check2" name="checkbox" />
                            <label htmlFor="check2"><span>Alarm system</span></label>
                            </div>
                            <div className="single-checkbox d-flex">
                            <input type="checkbox" id="check3" name="checkbox" />
                            <label htmlFor="check3"><span>Alarm system</span></label>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="form_group">
                            <div className="single-checkbox d-flex">
                            <input type="checkbox" id="check4" name="checkbox" />
                            <label htmlFor="check4"><span>Janitor</span></label>
                            </div>
                            <div className="single-checkbox d-flex">
                            <input type="checkbox" id="check5" name="checkbox" />
                            <label htmlFor="check5"><span>Onsite management</span></label>
                            </div>
                            <div className="single-checkbox d-flex">
                            <input type="checkbox" id="check6" name="checkbox" />
                            <label htmlFor="check6"><span>Janitor</span></label>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="form_group">
                            <div className="single-checkbox d-flex">
                            <input type="checkbox" id="check7" name="checkbox" />
                            <label htmlFor="check7"><span>Depanneur in building</span></label>
                            </div>
                            <div className="single-checkbox d-flex">
                            <input type="checkbox" id="check8" name="checkbox" />
                            <label htmlFor="check8"><span>Depanneur in building</span></label>
                            </div>
                            <div className="single-checkbox d-flex">
                            <input type="checkbox" id="check9" name="checkbox" />
                            <label htmlFor="check9"><span>Depanneur in building</span></label>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="add-listing-form map-form mb-60">
                    <div className="map-box">
                        <iframe src="https://maps.google.com/maps?q=new%20york&t=&z=13&ie=UTF8&iwloc=&output=embed" /> 
                    </div>
                    </div>
                    <div className="add-listing-form timing-listing-form mb-60">
                    <h4 className="title">Opening Hours</h4>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="timeing-list">
                            <h5>Monday<span className="time">08 am - 05 pm</span></h5>
                        </div>
                        <div className="timeing-list">
                            <h5>Tuesday<span className="time">08 am - 05 pm</span></h5>
                        </div>
                        <div className="timeing-list">
                            <h5>Wednesday<span className="time">08 am - 05 pm</span></h5>
                        </div>
                        <div className="timeing-list">
                            <h5>Thursday<span className="time">08 am - 05 pm</span></h5>
                        </div>
                        <div className="timeing-list">
                            <h5>Friday<span className="time">08 am - 05 pm</span></h5>
                        </div>
                        <div className="timeing-list">
                            <h5>Saturday<span className="time">08 am - 05 pm</span></h5>
                        </div>
                        <div className="timeing-list">
                            <h5>Saturday<span className="time">08 am - 05 pm</span></h5>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </form>
            </div>
        </section>

    </Master>
  )
}
