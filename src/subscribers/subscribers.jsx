import React,{useEffect,useState} from 'react'
import './subscribers.css'
import axios from'axios';

import { 
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Loader from '../loader/loader';
export default function Subscribers() {

    let [dataa , setdataa]=useState([])









    const FetchingSubscribers = async() => {
       
        const response = await axios.get(`/subscribers`)
        .catch((err) =>{
           console.log("Err",err)
        });
       console.log(response.data)
       setdataa(response.data)
   }
useEffect(()=>{
FetchingSubscribers()
},[])








  return (
    <>
    <div className="database">
        <div className="navbar">
                   <div className="head">
            <h2>Database</h2>
            <Link to={{ 
  pathname: `/`, 

}}>  <button>Back</button> </Link>
            
        </div> 
        </div>
    {dataa.map((dataa)=>{
      return <div className="containerss">
        <ol>  <p>{dataa.firstname} {dataa.lastname}</p><p>{dataa.email}</p><p><span><p>{dataa.address}</p></span></p>
</ol>
</div>
      
  })}
    </div>

    </>
  )
}
