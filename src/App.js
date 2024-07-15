import "./App.css";
import { useState, useEffect } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import InfoBox from "./components/InfoBox";
import { Card, CardContent } from "@mui/material";
import Map from "./components/Map";
import Table from "./components/Table";
import { sortData, prettyPrintStat } from "./utils/util";
import LineGraph from "./components/LineGraph";
import Footer from "./components/Footer";
import "leaflet/dist/leaflet.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState([34.80746, -40.4796]);
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country?.country,
            value: country?.countryInfo?.iso2,
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
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

    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCountry(countryCode);
        setCountryInfo(data);
        if (countryCode === "worldwide") {
          setMapCenter([34.80746, -40.4796]);
          setMapZoom(3);
        } else {
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          setMapZoom(5);
        }
      });
  };

  return (
  <>
      <div className="flex flex-col justify-evenly p-[20px] md:flex-row">
      <div className="app__left flex-[0.9]">
        <div className="flex justify-between align-middle mb-3">
          <h1 className="font-bold text-xl md:font-extrabold md:text-3xl">
            {" "}
            COVID-19 DASHBOARD{" "}
          </h1>
          <FormControl className="app_dropdown">
            <Select
              variant="outlined"
              onChange={onCountryChange}
              value={country}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country, key) => (
                <MenuItem key={key} value={country.value}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app_stats flex justify-between">
          <InfoBox
          isRed
          active={casesType === "cases"}
          onClick={e=>setCasesType('cases')}
            title="Coronavirus Cases"
            cases={prettyPrintStat(countryInfo?.todayCases)}
            total={countryInfo?.cases}
          />
          <InfoBox
         isRed
            title="Active Cases"
            cases={prettyPrintStat(countryInfo?.active)}
            total={countryInfo?.cases}
            />
          <InfoBox
          
          active={casesType === "recovered"}
            onClick={e=>setCasesType('recovered')}
            title="Recovered"
            cases={prettyPrintStat(countryInfo?.todayRecovered)}
            total={countryInfo?.recovered}
          />
          <InfoBox
          isRed
          active={casesType === "deaths"}
            onClick={e=>setCasesType('deaths')}
            title="Deaths"
            cases={prettyPrintStat(countryInfo?.todayDeaths)}
            total={countryInfo?.deaths}
          />
        </div>
        <div className="flex mb-4">
          <button
            className={`btn ${casesType === "cases" && "border-t-[10px] border-green-300"}`}
            onClick={() => setCasesType("cases")}
          >
            <strong>Cases</strong>
          </button>
          <button
            className={`btn ${casesType === "recovered" && "btn--active"}`}
            onClick={() => setCasesType("recovered")}
          >
            Recovered
          </button>
          <button
            className={`btn ${casesType === "deaths" && "btn--active"}`}
            onClick={() => setCasesType("deaths")}
          >
            Deaths
          </button>
        </div>
        <Map
          countries={mapCountries}
          center={mapCenter}
          zoom={mapZoom}
          casesType={casesType}
        />
      </div>
      <Card className="app-right mt-2 md:ml-3 md:h-[800px]  md:flex md:flex-col">
        <CardContent className="flex flex-col flex-grow-1">
          <h3 className="font-extrabold">Live Cases By Country</h3>
          <Table countries={tableData} />
          <h3 className="font-extrabold mt-[10px]">Worldwide New {casesType}</h3>
          <div className="lineGraph-container">
            <LineGraph className="app_graph" casesType={casesType} />
          </div>
        </CardContent>
      </Card>
    </div>
    <Footer/>
    </>
  );
}

export default App;
