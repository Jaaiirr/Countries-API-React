import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const OneCountry = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryInfo = async () => {
      const response =
        await fetch(`https://restcountries.com/v2/name/${name}

        `);
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };

    fetchCountryInfo();
  }, []);
  return (
    <>
      

      <section className="one-country">
        
      <Link to="/" className="send-btn btn-light">
        <i>Back Home</i>
      </Link>

        {country.map((countryData) => {
          const {
            numericCode,
            flags,
            name,
            capital,
            population,
            area,
            region,
            continent,
            topLevelDomain,
            borders,
            languages,
            currencies,
          } = countryData;

          return (
            <article key={numericCode}>
              <div className="fix">
              <div className="flag">
                <img src={flags[1]} alt={name} />
              </div>
              <div className="country-data">
                <h2>{name}</h2>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
                <h4>
                  Population: <span>{population} hab.</span>
                </h4>
                <h4>
                  Area: 
                  <span>
                    {area} km<sup>2</sup>
                    </span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Continent: <span>{continent}</span>
                </h4>
                <h4>
                  Domain: <span>{topLevelDomain}</span>
                </h4>
                <h4>
                  Languages: <span>{languages[0].name}</span>
                </h4>
              </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default OneCountry;
