import React from 'react';
function Pricing() {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-5 mb-5'>
                    <h3 className='mt-5 mb-4 fs-2'>Unbeatable pricing</h3>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                     <a href='#' style={{textDecoration:'none'}}>See pricing <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-6 mt-5 mb-5'>
                    <div className='row text-center'>
                            <div className='col p-3 border'>
                                <h1 className='mb-3'>₹0</h1>
                                <p>Free equity delivery and <br></br>direct mutuals funds</p>
                            </div>
                            <div className='col p-3 border'>
                                <h1 className='mb-3'>₹20</h1>
                                <p>Intraday F&O</p>
                            </div>
                    </div>
                    
                </div>
                  
                    
                    
            </div>
        </div>
    
    );
}

export default Pricing;