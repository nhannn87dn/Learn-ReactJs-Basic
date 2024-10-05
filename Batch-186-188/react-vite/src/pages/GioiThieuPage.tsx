import React from "react";
import "./GioiThieu.css";
import axios from "axios";

type TWeather = {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
  };
};
const GioiThieuPage = () => {
  const [city, setCity] = React.useState("da nang");
  console.log("<<=== 🚀 city ===>>", city);
  const [weather, setWeather] = React.useState<TWeather | null>(null);

  const onHanldeSubmitCity = async (e) => {
    e.preventDefault();
    //city
    //di goi API thoi tiet theo city da nhap
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=c9a0ca46550648b29ce125849232709&q=${city}&aqi=no&lang=vi`
    );
    console.log("<<=== 🚀 data ===>>", response.data);
    setWeather(response.data);
  };

  return (
    <div className="flex justify-center">
      <div className="iphone_size">
        <form onSubmit={onHanldeSubmitCity}>
          <input
            onChange={(e) => {
              setCity(e.target.value);
            }}
            name="city"
            value={city}
            type="text"
          />
          <button type="submit" className="btn btn-default">
            Search
          </button>
        </form>

        {weather && (
          <>
            <p>{weather.current.temp_c} C</p>
          </>
        )}
      </div>
    </div>
  );
};

export default GioiThieuPage;
