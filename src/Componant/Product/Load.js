import React from 'react';
import { Link } from 'react-router-dom';

const Load = (props) => {
    const{id,img,name,price,total}=props.data;
    return (
        <Link to={`/PD/${id}`}>
               <div class="row-4">
   
        <div class="write">
      
            <img src={img}/>
            <h2>{name}</h2>
            <p>প্রতি কেজির মূল্যঃ ৳ {price}</p>
            <p>পরিমাণ : {total}</p>
        
        </div>
      
        
       </div>
       </Link> 
      
    );
};

export default Load;