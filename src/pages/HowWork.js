import React from 'react'
import Master from '../Layout/Master'

export default function HowWork() {
  return (
    <Master>
        <section className="hero-area">
            <div className="breadcrumbs-wrapper">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="page-title">
                    <h1 className="title">Working Process</h1>
                    <ul className="breadcrumbs-link">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">Working Process</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="intro-area pt-115">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                <div className="section-title text-center mb-60">
                    <span className="sub-title">Working Process</span>
                    <h2>How Listing Works</h2>
                </div>
                </div>
            </div>
            <div className="intro-wrppaer-two bg_cover" style={{backgroundImage: 'url(assets/images/bg/video-bg-2.jpg)'}}>
                <div className="intro-content-box-one">
                <div className="play-content text-center">
                    <a href="https://www.youtube.com/watch?v=lJyzByVH1oQ" className="video-popup"><i className="flaticon-play-button" /></a>
                    <h5>Play Video</h5>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="work-process-area pt-120">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10">
                <div className="work-process-wrapper">
                    <div className="row single-process-step align-items-center">
                    <div className="col-lg-6">
                        <div className="process-content-box">
                        <div className="step-count">
                            01.
                        </div>
                        <div className="content">
                            <span className="line" />
                            <h3 className="title">Choose<br />
                            A Category</h3>
                            <p>Be seed saying our sign beginning face give spirit own beast and a darkness morning moveth green multipl she doin kind saying one shall, two which darkness have day image god their night his feed subdue so you rule can.</p>
                            <a href="listing-grid.html" className="btn-link icon-btn">Explore List</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="process-img">
                        <img src="assets/images/elements/step-1.jpg" alt="process Image" />
                        </div>
                    </div>
                    </div>
                    <div className="row single-process-step align-items-center">
                    <div className="col-lg-6">
                        <div className="process-content-box">
                        <div className="step-count">
                            02.
                        </div>
                        <div className="content">
                            <span className="line" />
                            <h3 className="title">Select<br />
                            Amazing Place</h3>
                            <p>Be seed saying our sign beginning face give spirit own beast and a darkness morning moveth green multipl she doin kind saying one shall, two which darkness have day image god their night his feed subdue so you rule can.</p>
                            <a href="listing-grid.html" className="btn-link icon-btn">Explore List</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="process-img">
                        <img src="assets/images/elements/step-2.jpg" alt="process Image" />
                        </div>
                    </div>
                    </div>
                    <div className="row single-process-step align-items-center">
                    <div className="col-lg-6">
                        <div className="process-content-box">
                        <div className="step-count">
                            03.
                        </div>
                        <div className="content">
                            <span className="line" />
                            <h3 className="title">Explore<br />  
                            Selected Place</h3>
                            <p>Be seed saying our sign beginning face give spirit own beast and a darkness morning moveth green multipl she doin kind saying one shall, two which darkness have day image god their night his feed subdue so you rule can.</p>
                            <a href="listing-grid.html" className="btn-link icon-btn">Explore List</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="process-img">
                        <img src="assets/images/elements/step-3.jpg" alt="process Image" />
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
