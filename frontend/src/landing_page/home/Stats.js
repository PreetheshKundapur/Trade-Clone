import React from 'react';

function Stats() {
    return ( 
      <div className='container p-3'>
        <div className='row p-5'>
            <div className='col-6 p-5'>
                <h1 className='fs-2 mb-5'>Trust With Confident</h1>
                <h2 className='fs-4'>Customer-First Always</h2>
                <p className='text-muted'>Thats Why 1.5+ crores People Trust This Platform to Invest over Worth of 3.5 lakh croes of investmen
                </p>
                <h2 className='fs-4'>No Spam or Gimmicks</h2>
                <p className='text-muted'>Thats Why 1.5+ crores People Trust This Platform to Invest over Worth of 3.5 lakh croes of investment
                </p>
                <h2 className='fs-4'>The Trade Universe</h2>
                <p className='text-muted'>Thats Why 1.5+ crores People Trust This Platform to Invest over Worth of 3.5 lakh croes of investment
                </p>
                <h2 className='fs-4'>Do Better With Money</h2>
                <p className='text-muted'>Thats Why 1.5+ crores People Trust This Platform to Invest over Worth of 3.5 lakh croes of investment
                </p>
            </div>
             <div className='col-6  p-5' >
                <img src='Media/ecosystem.png' style={{width:'90%'}}/>
                <div className='text-center'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore Our Product <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                     <a href=''style={{textDecoration:"none"}}>Try Kite Demo<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
             </div>
        </div>
      </div>
     );
}

export default Stats;