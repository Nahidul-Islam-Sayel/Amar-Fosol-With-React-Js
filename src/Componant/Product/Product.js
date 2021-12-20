import React from 'react';
import { Link } from 'react-router-dom';
import dataf from '../Data/DataF'
import Load from './Load';
const Product = () => {
    return (
        <div>
            <section class="product-section clearfix">
            <div>
        <h2 class="name">সকল পন্য</h2>
      </div>
   
            {  
     dataf.map(data=><Load data={data}></Load>)
    
    }
        </section>
        </div>
    );
};

export default Product;