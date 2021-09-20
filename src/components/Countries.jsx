import React, { useState, useEffect } from "react";

const urlAPI = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryAPI = async () => {
    const response = await fetch(urlAPI);
    const countries = await response.json();
    setCountries(countries);
    console.log(countries[0].currencies[0].code);
  };

  useEffect(() => {
    fetchCountryAPI();
  }, []);

  return (
    <>
    <section className='gridLayout'>
    {countries.map((country) => {
        const {
          numericCode,
          flag,
          name,
          population,
          capital,
          region,
          area,
          topLevelDomain,
        } = country;

        return (
          <article key={numericCode}>
            <div>
              <img src={flag} alt={name} />
              <div className='lighterCard'>
              <h3>
                {name}
              </h3>
              <h4>
                Capital: <span>{capital}</span>
              </h4>
              <h4>
                Dominio: <span>{topLevelDomain}</span>
              </h4>
              <h4>
                Poblacion: <span>{population} hab.</span>
              </h4>
              <h4>
                Region: <span>{region}</span>
              </h4>
              <h4>
                Area: <span>{area} km<sup>2</sup></span>
              </h4> 
              {/* <button >ver mas</button> */}
              </div>

            </div>
          </article>
        );
      })}
    </section>
 
      
    </>
  );
};

export default Countries;
