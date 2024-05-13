import React from 'react'

const Firstcompo = () => {
    return (
        <section className='sector1'>
            <div className='div1'>
                <h1>Study to become a global talent</h1>
                <h6>Learn new tech skills using a world-class curriculum from top industry experts in an accredited institution.</h6>
                <div>
                    <button className='animated-button'>
                        <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                        <span className="text">Start now</span>
                        <span className="circle"></span>
                        <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
                            ></path>
                        </svg>
                    </button>

                </div>
            </div>
            <div className='div2'>
                <img src={require('./Imageholder/bg-header-sqi-1.png')} alt="" />
            </div>
        </section>
    )
}

export default Firstcompo