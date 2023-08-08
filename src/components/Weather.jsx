import React from "react";

const Weather = ({ weatherInfo }) => {
  console.log(weatherInfo);
  return (
    <section>
      <h2>lugar</h2>
      <section>
        {/*seccion superior*/}
        <section className=" clima2  text-[#026EED] p-3 rounded-2xl">
          <p>Cielo Despejado</p>
          <div>
            <p>21º</p>icono
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
