import { WiDayCloudy, WiCloud, WiDayCloudyWindy, WiDayRain, WiDayLightning } from "react-icons/wi";


const weathers = [
  {id: 1, label: "Mon", time: "02:27 PM", icon: <WiDayCloudy />},
  {id: 2, label: "Tue", time: "06:00 AM", icon: <WiCloud />},
  {id: 3, label: "Wen", time: "07:30 PM", icon: <WiDayCloudyWindy />},
  {id: 4, label: "Thu", time: "12:00 PM", icon: <WiDayRain />},
  {id: 5, label: "Fri", time: "04:00 PM", icon: <WiDayLightning />},
]

const Weathers = () => {
  return (
    <div className="flex gap-x-4 my-5">
        {
          weathers.map((weather)=>{
          const actived = weather.id === 2 ? 'bg-slate-200' : null;
          return (
              <div className={`flex flex-col items-center ${actived}`} key={weather.id}>
                {weather.icon}
                <strong>{weather.label}</strong> 
                <p>{weather.time}</p>
            </div>
            )
          })
        }
        
    </div>
  )
}

export default Weathers