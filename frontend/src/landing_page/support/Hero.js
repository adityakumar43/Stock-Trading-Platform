import React from 'react';
function Hero() {
    return (
        <section className='container-fluid' id='supportHero' style={{backgroundColor:"rgb(56,126,209"}}>
            <div className='container' id='supportWrapper'>
                <h4 className='mt-5'>Support Portal</h4>
                <a href='#' className='mt-5'><h5>Track Tickets</h5></a>
            </div>
            <div className='row p-3 mb-5' style={{marginLeft:"50px"}}>
                <div className='col-7 p-5'>
                    <h3 className='fs-3 mb-3'>Search for an answer or browse help topics to create a ticket</h3>
                    <input placeholder='Eg: how do I activate F&O, why is my order getting rejected..' className='mb-3'/><br/>
                    <a href='#'>Track account opening</a>
                    <a href='#' style={{marginLeft:"20px"}}>Track segment activation</a>
                    <a href='#' style={{marginLeft:"20px"}}>Intraday</a>
                    <br/>
                    <a href='#' >Margins</a>
                    <a href='#' style={{marginLeft:"20px"}}>Kite user manual</a>
                </div>
                <div className='col-5 p-5'>
                    <h3 className='fs-3'>Featured</h3>
                    <ol>
                        <li>
                            <a href='#'>Current Takeovers and Delisting - January 2024</a>
                        </li>
                        <li>
                            <a href='#' style={{lineHeight:"2.5"}}>Latest Intraday leverages - MIS & CO</a>
                        </li>
                    </ol>
                </div>
            </div>
        </section>
    );
}

export default Hero;