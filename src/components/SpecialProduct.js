import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

function SpecialProduct() {
  return (
    <div className='col-4'>
     <div className='special-product-card'>
       <div className='d-flex justify-content-between'>
         <div className='speacialimage'>
            <img  src='images/images/watch2.jpg' alt='watch' />
         </div>
         <div className='special-product-content'>
          <h5 className='brand'>Boat</h5>
          <h6 className='title'>
            Boat Xtend Max
          </h6>
          <ReactStars
             count={5}
             size={10}
             value="3"
             edit={false}
             activeColor="#ffd700"
             />
             <p className='price pfont'>
              <span className='text-red '>$100</span>&nbsp; <strike>$200</strike>
             </p>
             <div className='discount-till d-flex align-items-center gap-10 p-2'>
               <p className='pfont mb-0'>
                5 days 
               </p>
               </div>
               <div className='d-flex gap-10 align-items-center'>
                 <span className='badge rounded-circle bfont p-2  bg-warning'>1</span>:
                 <span className='badge rounded-circle bfont p-2 bg-warning'>1</span>:
                 <span className='badge rounded-circle bfont p-2 bg-warning'>1</span>
               </div>
             <div className='p-3'>
             <Link className='button p-2 f-3'>Add to Cart</Link>
             </div>
         </div>
       </div>
     </div>
    </div>
  )
}

export default SpecialProduct;