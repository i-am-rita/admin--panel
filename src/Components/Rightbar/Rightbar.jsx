import React from 'react';
import './Rightbar.css';
import Updates from '../Updates/Updates';
import Customereview from '../Customer-review/Customereview';
const Rightbar = () => {
    return(
        <div className='rightbar'>
        <div>
        <h3>Updates</h3>
            <Updates/>
        </div>
         <div>
             <h3>Customer Review</h3>
             <Customereview/>
         </div>
        </div>
    )
}

export default Rightbar;