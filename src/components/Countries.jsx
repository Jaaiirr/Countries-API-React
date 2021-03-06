import React, { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";

 const urlAPI = "https://restcountries.com/v2/all";
//  const urlAPI ="https://restcountries.com/v3/all";
// const urlAPI = "https://api.countrylayer.com/v2/all?access_key=4500149231cff155e458ac43dfd13aa0";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const {name} = useParams();

  const searchCountry = async () => {
    const response = await fetch ('https://restcountries.com/v2/name/${name}')
    const countries = await response.json();
    setCountries(countries);
  }
  
  const fetchCountryAPI = async () => {
    const response = await fetch(urlAPI);
    const countries = await response.json();
    setCountries(countries);
    //  console.log(countries[0].currencies[0].code);
    console.log(countries)
  };

  useEffect(() => {
    fetchCountryAPI();
    searchCountry();
  }, []);

  return (
    <div>

        <section className="search">
            <form  className="form">
                <input type="text " name="search" id="search"
                 placeholder="Search a Country" onChange = {(data) => searchCountry (data.target.value)}/>
            </form>
        </section>

      <section className="gridLayout">
        {
        countries.map((country) => {
          const { numericCode, flags, name, population, capital, area } =
            country;

          return (
            <article key={numericCode}>
              <div>
                <img src={flags[1]} alt={name} />
                <div className="lighterCard">
                  <h3>{name}</h3>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                  {/* <h4>
                    Dominio: <span>{topLevelDomain}</span>
                  </h4> */}
                  <h4>
                    Population: <span>{population} hab.</span>
                  </h4>
                  {/* <h4>
                    Region: <span>{region}</span>
                  </h4> */}
                  <h4>
                    Area:{" "}
                    <span>
                      {area} km<sup>2</sup>
                    </span>
                  </h4>
                  <Link to={`/countries/${name}`} className="send-btn">
                    View More
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Countries;
