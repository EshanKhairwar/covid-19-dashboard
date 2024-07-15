import React from "react";
import numeral from "numeral";
import '../css/Table.css'

const Table = ({ countries }) => {
  
  return (
    <div className="table-container">
      <table className="table">
        <tbody>
          {countries.map(({countryInfo, country, cases, key }) => (
            <tr key={key}>
             <td className="country-cell">
                <img src={countryInfo.flag} alt={'flag'} className="flag" />
                {country}
              </td>
              {/* <td>{country}</td> */}
              <td>
                <strong>{numeral(cases).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
