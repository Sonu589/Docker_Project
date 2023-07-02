import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from 'axios';
import React,{useState,useEffect} from "react"
import 'animate.css';
function App() {
  const apikey="Add_Your_Own_Api_Key"
  const [data,setData]=useState({});
  const [input,setInput]=useState("")
  const getWetherDetails=(cityName)=>{
    const apiURL="https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey
     if(!cityName) return
    axios.get(apiURL).then((res)=>{
      console.log("Response",res.data)
       setData(res.data)
     }).catch((err)=>{
       console.log("Error",err)
     })
  }
  const handle=(e)=>{
      setInput(e.target.value)
  }
  const handleSearch=()=>{
     getWetherDetails(input)
  }

  useEffect(()=>{
    getWetherDetails("delhi")
  },[])
  return (
    <div className="col-md-12">
      <div className="wetherBg">
         <h1 className="heading animate__animated animate__bounce animate__infinite" >WEATHER APP</h1>
            <div className="d-grid col-4 mt-4">
            <input type="text" className="form-control" placeholder="Enter The Location" onChange={handle}/>
            <button className="btn btn-success" type="button" onClick={handleSearch}>
                Search
            </button>
            </div>
      </div>
      <div className="col-md-12 text-center mt-5">
          <div className="shadow rounded wetherResultBox">
            <img className="weathorIcon" src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png" />
            <h5 className="weathorCity">{data?.name}</h5>
            <h6 className="weathorTemp">{((data?.main?.temp)-273.15).toFixed(2)}</h6>
          </div>
      </div>
    </div>
  );
}

export default App;
