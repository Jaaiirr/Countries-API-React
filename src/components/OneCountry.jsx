import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const OneCountry = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryInfo = async () => {
      const response =
        await fetch(`https://restcountries.eu/rest/v2/name/${name}
        `);
      const country = await response.json();
      setCountry(country);
      console.log(country);
    };

    fetchCountryInfo();
  }, []);
  return (
    <>
      <Link to="/" className="send-btn btn-light">
        <i className=" fas fa-arrow-left">Back Home</i>
      </Link>
      <section className="one-country">
        {country.map((countryData) => {
          const {
            numericCode,
            flag,
            name,
            capital,
            population,
            area,
            region,
            subregion,
            topLevelDomain,
            borders,
            languages,
          } = countryData;

          return (
            <article key={numericCode}>
              <div className="flag">
                <img src={flag} alt={name} />
              </div>
              <div className="country-data">
                <h2>{name}</h2>
                <h4>
                  Capital: <span>{capital}</span>
                </h4>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Area: <span>{area}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Sub Region: <span>{subregion}</span>
                </h4>
                <h4>
                  Domain: <span>{topLevelDomain}</span>
                </h4>
                <h4>
                  Languages: <span>{languages[0].name}</span>
                </h4>

                <div className="border">
                  <h4>Border:{borders}</h4>
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
