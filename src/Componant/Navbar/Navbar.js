import React from 'react';
import './Navbar.css'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { FcMenu } from "react-icons/fc";
import { IoIosBackspace } from  "react-icons/io";
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
    return (
        <div>
             <span class="nav-btn" id="nav-btn">
      <span onClick={toggleDrawer} class="fas fa-bars"><FcMenu/></span>
    </span>

    <Drawer open={isOpen} onClose={toggleDrawer} direction='left'>
      <div class="nav-header">
        <span class="nav-close" id="nav-close">
          <span onClick={toggleDrawer} class="fas fa-times"><IoIosBackspace/></span>
        </span>
      </div>
      
      <ul class="nav-items">
      <Link to="/"> <li><a href="" class="nav-link">প্রথম পাতা </a></li></Link> 
       <Link to="/Product"><li><a href="" class="nav-link">পণ্য </a></li></Link> 
       <Link to="/Cart"><li><a href="" class="nav-link">ক্রেতার ঝুড়ি </a></li></Link> 
      <Link to="/Account"> <li><a href="" class="nav-link">একাউন্ট </a></li></Link>
       <Link to="/about"><li><a href="" class="nav-link">আমাদের সর্ম্পকে </a></li></Link> 
     <Link to="Contract"> <li><a href="" class="nav-link">যোগাযোগ করুন </a></li></Link>  
        
      </ul>
      </Drawer>


        </div>
    );
   
};

export default Navbar;