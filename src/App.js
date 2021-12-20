import logo from './logo.svg';
import './App.css';
import Home from './Componant/Home/Home';
import Navbar from './Componant/Navbar/Navbar';
import React, {createContext, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Footer from './Componant/Footer/Footer';
import Product from './Componant/Product/Product';
import Account from './Componant/Account/Account';
import Singin from './Componant/Account/Singin';
import Comunication from './Componant/Comunication/Comunication';
import About from './Componant/About/About';
import PD from './Componant/PD/PD';
import Cart from './Componant/Cart/Cart';
export const userContext = createContext();
function App() {
  const[idd,setId]= useState(0);
  const[quainty,setQuainty]= useState(0);
  const[price,setPrice]= useState(0);
  const[total,setTotal]= useState(0);
  const[user,setUser]=useState([]);
  return (
    <userContext.Provider value={[idd,setId,quainty,setQuainty,price,setPrice,user,setUser,total,setTotal]}>
      <Router>
      <Navbar/>
     <Switch>
     <Route path="/Product">
         <Product/>
       </Route>
       <Route   path="/Account">
         <Account/>
      
       </Route>
       <Route path="/Singin">
    
    <Singin/>
    
    </Route>
    <Route path="/Contract">
    
     <Comunication/>
     <Footer/>
     </Route>
   
     <Route path="/about">
    
     <About/>
     
     </Route>
     <Route path="/Cart">
   <Cart/>
    </Route>
     <Route path="/PD/:id">
    
    <PD/>
  
  </Route>

       <Route path="/">
    
     <Home/>
     <Footer/>
     </Route>
      
     </Switch>
   
     </Router>
     
    </userContext.Provider>
  );
}

export default App;
