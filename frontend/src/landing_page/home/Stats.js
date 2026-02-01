import React from 'react';
function Stats() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 mt-5' style={{width:"37%"}}>
                    <h1 className="mt-5 mb-5">Trust with confidence</h1>
                    <h5 className="mt-5">Customer-first always</h5>
                    <p className='text-muted'>That's why 1.3+ crore customerstrust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in india.</p>
                    <h5 className="mt-5">No spam or gimmicks</h5>
                    <p className='text-muted'>No gimmicks,spam, "gamification", or annoying push notifications. High quality apps that you use at you pace, the way you like.</p>
                    <h5 className="mt-5">The Zerodha universe</h5>
                    <p className='text-muted'>Not just an app, but a whole ecosystem. Our investmentsin 30+ fintech startuos offer you tailored services specific to your needs.</p>
                    <h5 className="mt-5">Do better with money</h5>
                    <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 mt-5 p-5'>
                    <img src='images/ecosystem.png' alt="ecosysytem" style={{width:"130%"}}/>
                    <div className='text-center'>
                        <a href='#' className='mx-5' style={{textDecoration:'none'}}>Explore our products <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                        <a href="#" className='' style={{textDecoration:'none'}}>Try Kite demo <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;