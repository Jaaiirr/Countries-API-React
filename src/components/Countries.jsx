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
        const { name, capital, region, population, area } = country;

        return <article key={name}>Country Info</article>;
      })}
    </>
  );
};

export default Countries;
