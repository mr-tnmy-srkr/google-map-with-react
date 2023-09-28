import GoogleMapReact from "google-map-react";
import "./App.css";
import { FaMapMarkedAlt } from 'react-icons/fa';
import { googleAPIKey } from "./assets/googleAPIKey";

const AnyReactComponent = ({ text }) => (
  <div style={{ color: "red",fontSize:"30px" }}>
    <FaMapMarkedAlt></FaMapMarkedAlt>
  </div>
);

function App() {
  const defaultProps = {
    center: {
      lat: 23.232513,
      lng: 87.863419,
    },
    zoom: 14,
  };

  return (
    <>
      <div style={{ height: "500px", width: "500px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleAPIKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
          <AnyReactComponent
            lat={defaultProps.center.lat}
            lng={defaultProps.center.lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </>
  );
}

export default App;
