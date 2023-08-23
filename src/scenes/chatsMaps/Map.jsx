import React from "react";

function Map() {

  const fetchWorldwideData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/all");
    return response.json();
  };

  const fetchCountryData = async (countryCode) => {
    const response = await fetch(
      `https://disease.sh/v3/covid-19/countries/${countryCode}`
    );
    return response.json();
  };

  const { data: worldwideData, status: worldwideStatus } = useQuery(
    "worldwideData",
    fetchWorldwideData
  );
  const { data: countryData, status: countryStatus } = useQuery(
    "countryData",
    () => fetchCountryData("your_country_code")
  );

  if (worldwideStatus === "loading" || countryStatus === "loading") {
    return <p>Loading data...</p>;
  }

  if (worldwideStatus === "error" || countryStatus === "error") {
    return <p>Error fetching data.</p>;
  }
  return (
    <>
      <div>
        {/* A react leaflet map with markers that indicates the country name, total number
of active, recovered cases and deaths in that particular country as a popup. */}
        <h2>Worldwide COVID-19 Data</h2>
        <pre>{JSON.stringify(worldwideData, null, 2)}</pre>

        <h2>Country-Specific COVID-19 Data</h2>
        <pre>{JSON.stringify(countryData, null, 2)}</pre>
      </div>
    </>
  );
}

export default Map;
