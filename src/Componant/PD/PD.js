import React, { useState, useEffect, createContext, useContext } from 'react'

import { Route, Switch, Link , useParams } from "react-router-dom";
import DataF from '../Data/DataF';
import { addToDatabaseCart, getDatabaseCart } from '../databaseManager';
import { Rating } from 'react-simple-star-rating';
import NumericInput from 'react-numeric-input';
import './PD.css';
import { userContext } from '../../App';
export const UserContext =  createContext();
const PD = () => {
    const[idd,setId,quainty,setQuainty,price,setPrice,user,setUser,total,setTotal]= useContext(userContext);
    const{id}= useParams();
    const data= DataF.filter(data=>data.id==id);
    setId(id);
    const [rating, setRating] = useState(0);
    const [value,setValue]= useState([]);

    const improve=()=>{
       const num = document.getElementById("math").value;
      
       setQuainty(num);
       setPrice(num*data[0].price);
       setTotal(total+(data[0].price*num))
       const img= data[0].img;
       console.log(img)
       const xyz=[{
        Quainty: num,
        Price: num*data[0].price,
        kg: data[0].price ,
        img: img,
        
    }]
   
    setUser([...user,xyz]);
    }
    
    const handleRating = (rate) => {
      setRating(rate)
    }
    const math=1;
  
    return (
       
  <UserContext.Provider value="Laptop">
      <div class="name">
    <h5>পণ্যটি সম্পর্কে বিস্তারিত </h5>
</div>
<div class="single-product clearfix">

<div class="productpage-1 clearfix">
    <img src={data[0].img}/>

</div>

<div>
    <div class="productpage-2 clearfix">
        <h1>{data[0].name} </h1>

        <h3>৳ {data[0].price}</h3>

        <div class="card-footer">
            <form action="" class="form" data-pure-form>
            
            <NumericInput  min={1} value={1} id="math"/>
             
{console.log(value)}
                <div class="button">
            
                    <input id="submit" class="btn btn-primary" value="ঝুড়িতে রাখুন " onClick={improve}/>
                
                </div>
            </form>

            <h4>পণ্যের বিবরণ </h4>
    <p>{data[0].Dea}</p>
            <p class="p-dis"></p>
            <div class="review">
                <h4> Review:</h4>
                <Rating
        onClick={handleRating}
        ratingValue={rating} 
      />
         </div>
        </div>
    </div>
</div>
</div>
  </UserContext.Provider>
    );


};

export default PD;