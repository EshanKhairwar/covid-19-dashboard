import React, { useEffect, useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
const FormContainer = () => {
  const [countries, setCountries] = useState(["USA", "UK", "INDIA"]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState();

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, //United States,India
            value: country.countryInfo.iso2, //UK,USA,IN
          }));
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (event) => {
    const countryCode = event.target.value;

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    // https://disease.sh/v3/covid-19/all
    // https://disease.sh/v3/covid-19/countries/[COUNTRY_CODE]

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        console.log(data);
        // All of the data...
        // from the country response
        setCountryInfo(data);
      });
  };

  console.log(countryInfo);

  return (
    <div>
      <FormControl className="app_dropdown">
        <Select variant="outlined" onChange={onCountryChange} value={country}>
          {/* Loop through all the countries and show  a drop down list of the options */}
          <MenuItem value="worldwide">Worldwide</MenuItem>
          {countries.map((country,key) => (
            <MenuItem key={key} value={country.value}>{country.name}</MenuItem>
          ))}

          {/* <MenuItem value="worldwide">Worldwide</MenuItem>
          <MenuItem value="worldwide">Option 2</MenuItem>
          <MenuItem value="worldwide">Option 3</MenuItem>
          <MenuItem value="worldwide">Y00000</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
};

export default FormContainer;
