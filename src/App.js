import {useState,useEffect} from 'react'
import  Axios from 'axios'
import './App.css';
import img from './wordpress.png'
import Loader from './loader/loader';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
 const url ="/"
  const [data, setData] = useState({
    email:"",
    firstname:"",
    lastname:"",
    address:"",
  });
  const [posting, setposting]=useState(false)
  const [exists, setexists]=useState(false)
  const [success, setSuccess]=useState(false)
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]= e.target.value
    setData(newdata)
    
  }
 

  const submit = async(e,)=>{
      e.preventDefault();
    setposting(true); 
     try {
              await Axios.post(url,{
  email: data.email,
    firstname: data.firstname,
    lastname: data.lastname,
    address: data.address
      
}).then(res => {

  setposting(false)

  setexists(false)
 setSuccess(true)

})
    } catch (error) {
      console.log("User Already exists")
      setposting(false)
   
        setexists(true)

        setSuccess(false)
    }


  }

        

const OnClicked = ()=>{

// console.log(data)


}


  return (
    <div className="container">
      <div id="toop" className="userexistance">
       <p>{exists? "⚠️ User already exists ":"" ||success? "Success ✅":""}</p>
      </div>
       <div className="wrapper">
          <div className="left">
             <h2>Get Everything You Need <br/>For Creating WordPress <br /> Websites</h2>

             <img src={img} alt="" />

             <h3>
              All-in-one Multifunctional Subscribe<br/> Service Perfect for launching All Kinds of<br/> WordPress Projects!
             </h3>
          </div>
          <div className="right">
<div className="top">
<img src="https://img.icons8.com/external-tanah-basah-glyph-tanah-basah/24/ffffff/external-cross-essentials-tanah-basah-glyph-tanah-basah.png"/>
</div>
<form className="middle" onSubmit={(e)=>submit(e)} >
  <div className="middle-top">
     <h3>SUBSCRIBE AND GET <br />YOUR  BONUS!</h3>
  </div>
  <div className="middle-mid">
  <input required type="email" placeholder="Email address" onChange={(e)=>handle(e)} value={data.email} id="email"/>
  <input required type="text" placeholder="First Name" onChange={(e)=>handle(e)} value={data.firstname} id="firstname"/>
  <input required type="text" placeholder="Last Name" onChange={(e)=>handle(e)} value={data.lastname} id="lastname"/>
  <input required type="text" placeholder="Address" onChange={(e)=>handle(e)} value={data.address} id="address"/>
  </div>
  <div className="middle-below">
  <button  onClick={OnClicked}>{posting? <Loader/>:"STAY UPDATED"}</button>
  </div>


</form>
<div className="bottom">
  <span>    <img src="https://img.icons8.com/ios-filled/16/8B8F9C/lock.png"/>
</span>
  <p>
    Your Information will never be <br /> shared with any third party.
  </p>

</div>
          </div>
       </div>
      <div className="explore-subscribers">
      
        <Link to={{ 
  pathname: `/subscribers`, 

}}>  <button>Explore Subscribers</button> </Link>
      </div>
    </div>
  );
}

export default App;
