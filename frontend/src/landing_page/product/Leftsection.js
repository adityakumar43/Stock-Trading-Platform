import React from 'react';
function Leftsection({ imageURL, productname, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container mb-5'>
            <div className='row  mb-5'>
                <div className='col-5 mt-5'>
                    <img src={imageURL} />
                </div>
                <div className='col-2'></div>
                <div className='col-5 p-5 mt-5'>
                    <h1>{productname}</h1>
                    <p>{productDescription}</p>
                    <div>
                        <a href={tryDemo} style={{textDecoration:"none"}}>Try demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <a href={learnMore} style={{marginLeft:'80px',textDecoration:"none"}}>Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay}><img src='https://zerodha.com/static/images/google-play-badge.svg' /></a>
                        <a href={appStore} style={{marginLeft:"20px"}}><img src='https://zerodha.com/static/images/appstore-badge.svg' /></a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Leftsection;