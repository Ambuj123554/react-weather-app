import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import BeachAccessIcon from '@mui/icons-material/BeachAccess'



function InfoBox({info}){
    const img="https://plus.unsplash.com/premium_photo-1667689956673-8737a299aa8c?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const hot="https://images.unsplash.com/photo-1600267209770-d4b797915157?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rain="https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold="https://images.unsplash.com/photo-1477468572316-36979010099d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


    
    return(
        <div className='weatherinfo'>
            
            <div className='weather-card'>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>75?rain:info.temp>15?hot:cold}
                    
                    title="green iguana"
                    
                />
                <CardContent>
                    
                    <Typography gutterBottom variant="h5" component="div">
                    
                    {info.city}{info.humidity>75?<BeachAccessIcon/>:info.temp>15?<SunnyIcon/>:<AcUnitIcon/>}
                    
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        
                    <p>Temprature : <b>{info.temp}&deg;C</b></p>
                    <p>Humidity : <b>{info.humidity}</b></p>
                    <p>Min-Temprature : <b>{info.tempMin}&deg;C</b></p>
                    <p>Max-Temprature : <b>{info.tempMax}&deg;C</b></p>
                    <p>The weather can be described an <b><i>{info.weather}</i></b> and feels like <b>{info.feelslike}&deg;C</b></p>
                    </Typography>
                </CardContent>
                
                </Card>
            </div>
        </div>
    );
}
export default InfoBox;