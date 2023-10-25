import React, { useState } from 'react'
import './WeatherApp.css'
import search_icon from "../Asset/search.png"
import clear_icon from "../Asset/clear.png"
import cloud_icon from "../Asset/cloud.png"
import drizzle_icon from "../Asset/drizzle.png"
import humidity_icon from "../Asset/humidity.png"
import rain_icon from "../Asset/rain.png"
import snow_icon from "../Asset/snow.png"
import wind_icon from "../Asset/wind.png"



const WeatherApp = () => {
     

    const [wicon,setWicon]=useState(cloud_icon);

    let Api_key="b7880be47b321896cfd1f2981a55b880";
     
    const search = async() =>{
      const element=document.getElementsByClassName("cityInput");
      if(element[0].value==="")
      {
        
        return 0;
        
      }

      let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${Api_key}`;
      let response=await fetch(url);
      let data= await response.json();
      const humidity=document.getElementsByClassName("humidity-percent");
      const wind =document.getElementsByClassName("wind-rate");
      const temperature=document.getElementsByClassName("weather-temp");
      const location = document.getElementsByClassName("weather-location");

      humidity[0].innerHTML=data.main.humidity+" %";
      wind[0].innerHTML=data.wind.speed+" Km/hr";
      temperature[0].innerHTML=data.main.temp+" °C";
      location[0].innerHTML=data.name;

      if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
      setWicon(clear_icon);
      else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")
      setWicon(cloud_icon);
      else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")
      setWicon(drizzle_icon);
      else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")
      setWicon(drizzle_icon);
      else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")
      setWicon(rain_icon);
      else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")
      setWicon(rain_icon);
      else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")
      setWicon(snow_icon);
      else{
        setWicon(clear_icon);
      }
      



    }

  return (
    <div className='container'>
      <div className='top-bar'>
        <input className='cityInput' type='text' placeholder='search'/>
        <div className='search-icon' onClick={()=>{search()}}>
            <img src={search_icon} alt='' />
        </div>
      </div>

      <div className='weather-img'>
      <img src={wicon} alt=''/>
      </div>
      <div className='weather-temp'>24°C</div>
      <div className='weather-location'>London</div>
      <div className='data-container'>
        <div className='element'>
            <img  src={humidity_icon} alt='' className='icon'/>
            <div className='data'>
                <div className='humidity-percent'>64%</div>
                <div className='text'>Humidity</div>
            </div>
        </div>
                             {/* agla */}
        <div className='element'>
        <img  src={wind_icon} alt='' className='icon'/>
        <div className='data'>
            <div className='wind-rate'>18Km/hr</div>
            <div className='text'>Wind Speed</div>
        </div>
        </div>
      </div>

    </div>
  )
}

export default WeatherApp
