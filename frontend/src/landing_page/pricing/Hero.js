import React from 'react';
function Hero() {
    return (
        <div className='container mb-5'>
            <div className='text-center mt-5 p-5'>
                <h2 className='text-muted'>Charges</h2>
                <p className='text-muted mt-3 fs-4'>List of all charges and taxes</p>
            </div>
            <div className='row p-4 mt-5 text-center'>
                <div className='col-4'>
                    <img src='./images/pricingEquity.svg' style={{ width: "80%" }} />
                    <h2 className='fs-3 mb-4 text-muted mt-4'>Free equity delivery</h2>
                    <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free - ₹ 0 brokerage.</p>
                </div>
                <div className='col-4'>
                    <img src='./images/intradayTrades.svg' style={{ width: "80%" }} />
                    <h2 className='fs-3 mb-4 text-muted mt-4'>Intraday and F&O trades</h2>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 mb-5'>
                    <img src='./images/pricingEquity.svg' style={{ width: "80%" }} />
                    <h2 className='fs-3 mb-4 text-muted mt-4'>Free direct MF</h2>
                    <p className='text-muted'>All direct mutual fund investments are absolutely free - ₹ 0 commissions & DP charges.</p>
                </div>

            </div>
            <div className='mt-5 text-center mb-5'>
                <h1 className='mt-5'>Open a Zerodha account</h1>
                <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{ width: "20%", margin: "0 auto" }}>Sign Up for Free</button>
            </div>
        </div>


    );
}

export default Hero;