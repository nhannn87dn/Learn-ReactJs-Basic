import axios from "axios"
import { useEffect, useState } from "react"
import { weatherConfig } from "../../data/weatherConfig"

interface Weather {
    id: number,
    main: string,
    description: string,
    icon: string
}

interface WeatherProps {
    base: string;
    main: {
        temp: number,
        feels_like: number,
        humidity: number, 
        temp_max: number,
        temp_min: number,
    },
    weather: Weather[]
}


const Weather = () => {
    const [weathers,setWeathers] = useState<WeatherProps | null>(null)

    useEffect(()=>{
        const fetchCurrentWeather = async ()=>{
            try {
                const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${weatherConfig.lat}&lon=${weatherConfig.lon}&appid=${weatherConfig.apiKey}&units=metric&lang=vi`)
                console.log(data);
                setWeathers(data)
            
            } catch (error) {
                console.log(error);
            }
        }
        fetchCurrentWeather();
    },[])
    
    const icon = `https://openweathermap.org/img/wn/${weathers?.weather[0].icon}@2x.png`;
  return (
    <div className='container mx-auto'>
        <h1>Weather</h1>
        <div>
            <img src={icon} />
        </div>
        <h2> {weathers?.main.temp} C</h2>
        <p>{weathers?.weather[0].description}</p>
    </div>
  )
}

export default Weather