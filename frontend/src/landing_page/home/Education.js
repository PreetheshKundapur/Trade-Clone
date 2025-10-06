import React from 'react';

function Education() {
    return ( 
      <div className='container mt-5'>
            <div className='row'>
            <div className='col-6'>
              <img src='Media/education.svg'style={{width:"70%"}}/>
                  </div>
                 <div className='col-6'>
                    <h1 className='mb-3 fs-2'>Free And Open Market Education</h1>
                    <p>varsity, the largest online stock market education book in the world corving everthing from basic to advance trading.</p>
                     <a href=''style={{textDecoration:"none"}}>varsity<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                     <p className='mt-5'>TradingQ&A, The most active trading</p>
                      <a href=''style={{textDecoration:"none"}}>Trading Q&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                 </div>
            </div>

        </div>
     );
}

export default Education;