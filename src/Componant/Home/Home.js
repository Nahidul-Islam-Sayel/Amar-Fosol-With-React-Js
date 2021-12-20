import React from 'react';
import './Home.css'
import category1 from '../../Data/Img/catagory-1.jpg';
import category2 from '../../Data/Img/catagory-2.jpg';
import category3 from '../../Data/Img/catagory-3.jpg';
import dataf from '../Data/DataF';
const Home = () => {

    return (
        <div>
             <div class="container">
      <div class="row">
        <div class="col">
          <h3 class="header-subtitle">"আমাদের অঙ্গীকার কৃষকের অধিকার"</h3>
          <h1 class="header-title">আমার ফসল</h1>

          <br />
          <div>
            <a href="" class="banner-btn"> আরো দেখুন </a>
          </div>
        </div>
      </div>
    </div>
  
    <div class="row-2 clearfix">
      <div>
        <img src={category1} />
      </div>
      <div>
        <img src={category2} />
      </div>
      <div>
        <img src={category3} />
      </div>
      
    </div>
    <section class="product-section clearfix">
            <div>
        <h2 class="name">নতুন ফসল</h2>
      </div>
            {  
     dataf.map(data=>(
      <div class="row-4">
    
 
        <div class="write">
      
            <img src={data.img}/>
            <h2>{data.name}</h2>
            
        
        </div>
           
       </div>
     ))
    
    }
        </section>
  
   
    <section class="offer clearfix">
      <div class="offer-1">
        <h1 class="offer-title">"কৃষক বাঁচাও দেশ বাঁচাও"</h1>
        <a href="" class="banner-btn"> আরো দেখুন </a>
      </div>
    </section>
   

  </div>
        
    );
};

export default Home;