import React from 'react';
function Rightsection({productName, productDescription, learnMore, imageURL}) {
    return (
        <div className='container mb-5'>
            <div className='row mb-5'>
                <div className='col-5 mt-5 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className='col-1'></div>
                <div className='col-6'>
                    <img src={imageURL}/>
                </div>
            </div>
        </div>
    );
}

export default Rightsection;