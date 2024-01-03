import axios from "axios";
import { useEffect, useState } from "react";

interface ICurrentWeather {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const Weather = () => {
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather | null>(
    null
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json?key=c9a0ca46550648b29ce125849232709&q=Danang&aqi=no&lang=vi"
        );
        setCurrentWeather(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="bg-slate-900 w-full min-h-[500px] flex justify-center items-center">
      <div className="screen bg-white rounded-lg w-[430px] min-h-[475px] max-h-[475px] overflow-y-auto p-4">
        <div className="h-[1000px]">
          <strong>{currentWeather && currentWeather.location.name}</strong>
          <h1>{currentWeather && currentWeather.current.temp_c} ℃</h1>
          <h1>{currentWeather && currentWeather.current.condition.text}</h1>
          <p>
            {currentWeather && (
              <img src={currentWeather.current.condition.icon} alt="" />
            )}
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quae eum ducimus. Aspernatur asperiores iusto accusantium.
            Necessitatibus ullam quisquam reprehenderit. Laboriosam error
            veritatis, ducimus commodi harum quam repellat quos? Voluptatibus?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
