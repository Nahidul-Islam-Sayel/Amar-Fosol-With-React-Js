import React, {  useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import { getDatabaseCart } from '../databaseManager';
import { UserContext } from '../PD/PD';
import dataf from '../Data/DataF';
import './Cart.css'
const Cart = () => {
    const {cart,setCart}= useState([]);
    const[idd,setId,quainty,setQuainty,price,setPrice,user,setUser,total,setTotal]= useContext(userContext);
    const [value,setValue]= useState(0);
    const [me,setMe]=useState(true);
   
    useEffect(()=>{
        const saveCart= getDatabaseCart();
        const id= Object.keys(saveCart);
        const counts = Object.values(saveCart);
    })
    const Remove = ()=>{
     
      setUser([]);
      setTotal(0);
    }
   
    const data= dataf.filter(cd=>cd.id==idd);
 
   
    return (
        <div>
                <div class="cart-title">
                    <h3 class="name ">আপনার ঝুড়ি</h3>
                  
                </div>
                <div class="table table-hover">
                    <thead>
                        <tr>
                            <th>পণ্য </th>
                            <th>পরিমাণ </th>
                            <th>প্রতি কেজি মূল্য </th>
                            <th class="text-center">মোট </th>
                        </tr>
              
                        
                
                    </thead>
               { 
         
            user.map(valuedata=>
                <thead>
                <tr>
                    <th><img id="img" src={valuedata[0].img} alt="" srcset=""/>  </th>
                    <th>{valuedata[0].Quainty} কেজি</th>
            <th>৳{valuedata[0].kg}</th>
                    <th class="text-center">৳{valuedata[0].Price}</th>
                 
                </tr>
      
                
        
            </thead>
            )
                }
                    <tbody id="cart-items">
                    </tbody>
                   
                    <tfoot>

                        <tr>
                            <td class="clear" onClick={Remove}><a href="javascript:;" class="btn-danger" data-pure-clear-basket >ঝুড়ি খালি করুন </a></td>
                            <td></td>

                            <td class="total">সর্বমোট  </td>
                            <td class="text-right total" id="total-value"><strong>৳{total}</strong></td>

                        </tr>

                    </tfoot>

                </div>

            </div>
    );
};

export default Cart;