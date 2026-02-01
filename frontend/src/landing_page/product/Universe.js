import React from 'react';
function Universe() {
    return (
        <div className='container'>
            <div className='row text-center mt-5'>
                <h3 className='text-muted'>The Zerodha Universe</h3>
                <p className='mt-3'>Extend your trading and investement experience even further with our partner platforms</p>
                <div className='col-4 p-5'>
                    <img src='./images/zerodhaFundhouse.png' style={{width:"70%"}} />
                    <p className='mt-3 text-muted' style={{fontSize:"13px"}}>
                        Our asset management venture that is creating simple and transparent index funds to help you save for your goals.
                    </p>
                    <img src='./images/streakLogo.png' style={{width:"60%"}} className='mt-5'/>
                    <p className='mt-3 text-muted' style={{fontSize:"13px"}}>
                        Systematic teding platform that allows you to create and backtest strategies without coding.
                    </p>
                </div>
                <div className='col-4 p-5'>
                    <img src='./images/sensibullLogo.svg' style={{width:"80%"}}/>
                    <p className='mt-4 text-muted' style={{fontSize:"13px"}}>
                        Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.
                    </p>
                    <img src='./images/smallcaseLogo.png' className='mt-5' style={{width:"80%"}}/>
                    <p className='mt-3 text-muted' style={{fontSize:"13px"}}>
                        Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.
                    </p>
                </div>
                <div className='col-4 p-5'>
                    <img src='./images/goldenpiLogo.png' style={{width:"80%"}}/>
                    <p className='mt-3 text-muted' style={{fontSize:"13px"}}>
                        Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.
                    </p>
                    <img src='./images/dittoLogo.png' style={{width:"50%"}} className='mt-5'/>
                    <p className='mt-3 text-muted' style={{fontSize:"13px"}}>
                        Personalized advice on life and health insurance. No spam and no mis-selling. 
                    </p>
                </div>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>Sign Up for Free</button>
            </div>
        </div>
    );
}

export default Universe;