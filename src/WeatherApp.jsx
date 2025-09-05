import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./WeatherApp.css";
import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Button } from "@mui/material";

function WeatherApp(){
    let [weatherinfo,setweatherinfo]=useState({
        city:"WonderLand",
        
        feelslike: 33.41,
        humidity: 53,
        temp: 31.1,
        tempMax: 31.1,
        tempMin: 31.1,
        weather: "overcast clouds",
    });

    const [darkMode, setDarkMode] = useState(false);
    const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#1976d2", // blue for buttons
      },
    },
  });




    let updateinfo=(newinfo)=>{
        setweatherinfo(newinfo);
    };

    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="weather-app">
                
                <h2 style={{color:"brown"}}>Weather App</h2>
                
                
                <IconButton onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <LightMode /> : <DarkMode />}
                </IconButton>
                

                <SearchBox updateinfo={updateinfo}/>
                <InfoBox info={weatherinfo}/>
            </div>
        </ThemeProvider>
    );
}

export default WeatherApp;