import React from 'react';
function Award() {
    return ( 
      <div className='container mt-5'>
<div className='row'>
<div className='col-6'>
<img src='Media/largestBroker.svg'/>
</div>
<div className='col-6 p-5 mt-5'>
    <h1>Largest Stock Broker in India</h1>
    <p className='mb-5'>5+ Million Clints Contribute Over 15% of All Retail Order Volumes in India by Trading and Invesrting </p>
    <div className='row'>
    <div className='col-6'>
         <ul>
        <li>
            <p>Future and Option</p>
        </li>

        <li>
            <p>Commodity  And Derivatives</p>
        </li>

        <li>
            <p>Currency And Derivatives</p>
        </li>

    </ul>
    </div>
    <div className='col-6'>
         <ul>
        <li>
            <p>Stocks And IPOs</p>
        </li>

        <li>
            <p>Derict Mutual Fund</p>
        </li>

        <li>
            <p>Bonds And Gov Securities</p>
        </li>

    </ul>
    </div>
    </div>
   <img src='Media/pressLogos.png' style={{width:"90%"}}/>
</div>
</div>
 </div>
     );
}

export default Award ;