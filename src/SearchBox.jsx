import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import { useState } from 'react';

function SearchBox({updateinfo}){
    let [city,setcity]=useState("");
    let [error,seterror]=useState("");
    let [icon,seticon]=useState(SunnyIcon);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY=import.meta.env.VITE_WEATHER_API_KEY;
    
    let getwheatherinfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonres=await response.json();
            
            let result={
                city:city,
                
                temp:jsonres.main.temp,
                tempMin:jsonres.main.temp_min,
                tempMax:jsonres.main.temp_max,
                humidity:jsonres.main.humidity,
                feelslike:jsonres.main.feels_like,
                weather:jsonres.weather[0].description,
            }
            console.log(result);
            return result;
        }
        catch(error){
            throw error;
        }
        
    }
    
     
    let handlechange=(evt)=>{
        setcity(evt.target.value);
    };
    let handlesubmit=async(evt)=>{
        try{
            evt.preventDefault();
        
            console.log(city);
            setcity("");
            let newinfo=await getwheatherinfo();
            updateinfo(newinfo);
        }catch(err){
            seterror("no such place exist");
        }
        
    }
    

    return(
        <div className='SearchBox'>
            
            <form onSubmit={handlesubmit}>
                <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlechange}/>
                
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>No such place Exist</p>}
            </form>
        </div>
    );
}
export default SearchBox;
