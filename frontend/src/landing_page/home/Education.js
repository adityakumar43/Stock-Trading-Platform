import React from 'react';
function Education() {
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-6 mt-5'>
              <img src='./images/education.svg' alt='education' style={{width:"70%"}}></img>
            </div>
            <div className='col-6 mt-5'>
              <h3 classname='fs-2'>Free and open market education</h3>
              <p className='mt-4 mb-4'>Varsity, the largest online stock market education book in the world <br></br>covering everything from the basics to advanced trading. </p>
              <a href='#'style={{textDecoration:'none'}}>Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
              <p className='mt-5' >TradingQ&A, the most active trading and investment community in <br></br>India for all your market releated queries.</p>
              <a href='#' style={{textDecoration:'none'}}>TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      );
}

export default Education;