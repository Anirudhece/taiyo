import React from "react";
import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // without this it wont work

function Map() {
  const fetchWorldwideData = async () => {
    const response = await fetch("https://disease.sh/v3/covid-19/all");
    return response.json();
  };

  const fetchCountryData = async () => {
    const response = await fetch(`https://disease.sh/v3/covid-19/countries/`);
    return response.json();
  };

  const { data: worldwideData, status: worldwideStatus } = useQuery(
    ["worldwideData"],
    fetchWorldwideData
  );
  const { data: countryData, status: countryStatus } = useQuery(
    ["countryData"],
    fetchCountryData
  );

  if (worldwideStatus === "loading" || countryStatus === "loading") {
    return <p>Loading data...</p>;
  }

  if (worldwideStatus === "error" || countryStatus === "error") {
    return <p>Error fetching data.</p>;
  }

  //       <Marker position={position}>
  //         <Popup>
  //           A pretty CSS3 popup. <br /> Easily customizable.
  //         </Popup>
  //       </Marker>
  const markers = countryData.map((country) => (
    <Marker
      key={country.country}
      position={[country.countryInfo.lat, country.countryInfo.long]}
    >
      <Popup>
        <div>
          <h3>{country.country}</h3>
          <p>Total Cases: {country.cases}</p>
          <p>Recovered: {country.recovered}</p>
          <p>Deaths: {country.deaths}</p>
        </div>
      </Popup>
    </Marker>
  ));

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <MapContainer
            style={{ width: "700px", height: "400px" }}
            center={[20, 80]}
            zoom={4}
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="we love bear"
            />
            {markers}
          </MapContainer>
        </Box>
      </Box>
    </>
  );
}

export default Map;

// const position = [20, 80];

//     <MapContainer center={position} zoom={4} scrollWheelZoom={true}>
//       <TileLayer
//         attribution="we love bear"
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       />
//       <Marker position={position}>
//         <Popup>
//           A pretty CSS3 popup. <br /> Easily customizable.
//         </Popup>
//       </Marker>
//     </MapContainer>
