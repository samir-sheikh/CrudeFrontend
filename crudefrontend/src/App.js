import React,{useState} from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';
import Navbar from './Component/Navbar';
import AllStudent from './Component/AllStudent/AllStudent';
import Serch from './Component/Serch/Serch';



function App() {

  

  return (
    <div className="App">

   
   <div className="container" style={{marginTop:"50px"}}>
     <Navbar />
 
    <Switch>
    
      <Route exact path="/" component={Serch} />
   
      <Route path="/all" component={AllStudent} />

      <Route path="/serch" component={Serch} />


      
    </Switch>
    </div>



      
      </div>
   


    
    // </div>
  );
}

export default App;
