import React from 'react'

const Fourth = () => {
    return (
        <section className='fourthcompo'>
            <div className='carrytexts'>
                <h1> Our Top Courses</h1>
                <h3> Take a look at some of our popular courses</h3>
                <p><a href="">View all courses<i class="fa-solid fa-chevron-right"></i></a></p>
            </div>
            <main className='carrycards'>
                <div className='card1'>
                    <img src={require('./Imageholder/software-engineering-630x330-1.webp')} alt="" />

                    <h1>software Engineering</h1>
                    <p>Software Engineering is one of the most in-demand jobs across the globe today.

                        Software Engineers are also known as programmers, developers or coders. They are the ones behind all the apps and software you use today either on your phone or computer within your browser. Software such as banking apps, booking apps, mailing apps (e.g Gmail), Chat apps (e.g WhatsApp) and other Social apps (e.g Twitter, Facebook) and many more are created by software engineers.</p>

                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Learn More</span>
                    </button>


                </div>
                <div className='card2'>
                    <img src={require('./Imageholder/DATA-SQI.jpg')} alt="" />

                    <h1>Data Science & Analysis</h1>
                    <p>The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.

                        Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies</p>

                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Learn More</span>
                    </button>
                </div>
                <div className='card3'>
                    <img src={require('./Imageholder/digital-literacy.jpg')} alt="" />

                    <h1>Data Science & Analysis</h1>
                    <p>The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.

                        Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies</p>

                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Learn More</span>
                    </button>
                </div>
                <div className='card4'>
                    <img src={require('./Imageholder/product.jpg')} alt="" />

                    <h1>Data Science & Analysis</h1>
                    <p>The eruption of data is transforming indiviuals and businesses. Companies either big or small are now expecting their business decisions to be based on data-led insight.

                        Data specialists have a tremendous impact on business strategies and marketing tactics because everyone now depends on data to formulate improved strategies for the future of their companies</p>

                    <button className="learn-more">
                        <span className="circle" aria-hidden="true">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Learn More</span>
                    </button>
                </div>

            </main>

        </section>
    )
}

export default Fourth