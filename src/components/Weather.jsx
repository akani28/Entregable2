import React, { useState } from "react";

const Weather = ({ weatherInfo }) => {
  const [isCelsius, setIsCelsius] = useState(true)
  console.log(weatherInfo);
  const convertTemp = (temp) => {
    const tempCelsius = temp - 273.15;
    return tempCelsius.toFixed();
  };
  const kelvinToFarenheit=(tempkelvin)=>{

    return ((tempkelvin-273.15)*(9/5)+32).toFixed()

  }
  const handleConvertTemp=()=>{
    setIsCelsius(!isCelsius);

  }
  return (
    <section className="grid content-center gap-8">
      <section className="flex flex-row justify-between p-4">
        <div className="text-[#FFF] text-[19px] font-semibold">WeatherAkani</div>
        <div>
          <button className="bg-white rounded-xl px-2">dark/ligth</button>
        </div>
      </section>
{/*bg-[url('./images/bg1.png')]*/}
      <section>
        <section className=" fondo w-80 h-56 text-[#026EED] p-2 rounded-2xl">
          <div>
            <section className="content flex justify-between flex-row content-start text-[79px] font-light">

              <article className="content_info">
              <p className="tempNumber">
                {isCelsius ? (convertTemp(weatherInfo?.main.temp))+"°":(kelvinToFarenheit(weatherInfo?.main.temp))+"°"}
                {/* {convertTemp(weatherInfo?.main.temp)}° */}
                
                </p>

              <article className="properties flex flex-col text-[13px] text-[#56A5F1] font-semibold">
                <span>Wind_speed: {weatherInfo?.wind.speed}m/s</span>
                <span>Humidity: {weatherInfo?.main.humidity}%</span>
                <span>Pressure: {weatherInfo?.main.pressure}hPa</span>
              </article>
              </article>
           
            <img className="w-40 h-40"
                  src={`https://openweathermap.org/img/wn/${weatherInfo?.weather[0].icon}@4x.png`}
                  alt=""
                />
            
            </section>
            
            <section className="flex flex-row justify-between">
            
             
            </section>

            <section className=" flex flex-shrink justify-between text-[19px] font-semibold ">
              <h2>{weatherInfo?.name}, {weatherInfo?.sys.country}</h2>
              <p className="text-[12px] font-semibold">{weatherInfo?.weather[0].description}</p>
            </section>
          </div>
        </section>
      </section>
      <span className="grid justify-center content-center">
      <button onClick={handleConvertTemp} className="bg-[#38A1D8] text-[#FFFFFF] py-2 px-6 rounded-2xl">Cambiar a ºF</button>
      </span>
    
    </section>
  );
};

export default Weather;
