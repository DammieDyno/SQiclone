import React from 'react'

const Secondcompo = () => {
    return (
        <section className='sector2'>
            <div className='contdiv'>
                <h1>Start here. Change the world.</h1>
            </div>
            <div className='carrier'>
                <div className='one'>
                    <img src={require("./Imageholder/college.jpg")} alt="" />

                    <h2>National Innovative Diploma (NID)</h2>

                    <p>The National Innovation Diploma (NID) offered at SQI College of ICT is a 2 year approved academic program of the National Board for Technical Education (NBTE).</p>

                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Learn More</span>
                    </button>

                </div>
                <div className='two'>
                    <img src={require("./Imageholder/prof.jpg")} alt="" />

                    <h2>Professional Diploma Certificate</h2>

                    <p>The Professional Certificate Program is 1 year practical training with wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their career.</p>

                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Learn More</span>
                    </button>
                </div>
                <div className='three'>
                    <img src={require("./Imageholder/certificate.jpg")} alt="" />

                    <h2>Certificate Program</h2>

                    <p>The Certificate Program is a short-term training, 2 weeks to 6 months with a wide range of edge-cutting IT certification courses offered in SQI College of ICT to people who want to advance their careers</p>

                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Learn More</span>
                    </button>

                </div>
            </div>
        </section>
    )
}

export default Secondcompo