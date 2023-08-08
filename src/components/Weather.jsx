import React from "react";

const Weather = ({ weatherInfo }) => {
  console.log(weatherInfo);
  const convertTemp=(temp)=>{
    const tempCelsius = temp-273.15;
    return tempCelsius.toFixed(1);

  }
  return (
    <section>
      <h2>{weatherInfo?.name}</h2>
      <section>
        {/*seccion superior*/}
        <section className=" clima2  text-[#026EED] p-3 rounded-2xl">
          <p>{weatherInfo?.weather[0].description}</p>
          <div>
            <p>{convertTemp(weatherInfo?.main.temp)}°C</p>icono
          </div>
        </section>
        <section className=" clima2  text-[#026EED] p-3 rounded-2xl">
          seccion inferior
          <article>
            <div>
              <img src="" alt="" />
            </div>
            <span>Viento</span>
          </article>
          <article>
            <div>
              <img src="" alt="" />
            </div>
            <span>Humedad</span>
          </article>

          <article>
            <div>
              <img src="" alt="" />
            </div>
            <span>Presion</span>
          </article>

        </section>
      </section>
      <button className="bg-[#38A1D8] text-[#FFFFFF]">Cambiar a ºF</button>
    </section>
  );
};

export default Weather;
