import React, { useState, useEffect } from "react";

const urlAPI = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryAPI = async () => {
    const response = await fetch(urlAPI);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  };

  useEffect(() => {
    fetchCountryAPI();
  }, []);

  return (
    <>
      {countries.map((country) => {
        const {
          numericCode,
          flag,
          name,
          population,
          capital,
          region,
          area,
          nativeName,
        } = country;

        return (
          <article key={numericCode}>
            <div>
              <img src={flag} alt={name} />
              <h3>
                Nombre: <span>{name}</span>
              </h3>
              <h4>
                Capital: <span>{capital}</span>
              </h4>
              <h4>
                Idioma Nativo: <span>{nativeName}</span>{" "}
              </h4>
              <h4>
                Poblacion: <span>{population} hab.</span>
              </h4>
              <h4>
                Region: <span>{region}</span>{" "}
              </h4>
              <h4>
                Area: <span>{area} km</span>
              </h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Countries;
