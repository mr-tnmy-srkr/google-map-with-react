import GoogleMapReact from "google-map-react";
import "./App.css";
import { googleAPIKey } from "./assets/googleAPIKey";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <>
      {/* <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleAPIKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div> */}
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ex officiis quasi nemo perferendis sit, temporibus ipsa suscipit distinctio! Nemo dolor distinctio laboriosam similique? Dolore quae facilis magnam laboriosam eius officiis ut non culpa, quidem voluptatum temporibus quasi odit perferendis saepe tempora quam aliquam consequuntur eos assumenda labore incidunt molestiae nemo minus officia! Mollitia minima ullam ipsam dicta delectus. Ut possimus numquam, odit a sunt nostrum corporis similique inventore repellendus ullam veniam quidem accusamus. Voluptate dolores voluptatum rem perferendis, maiores rerum labore dolor! Est quod cumque asperiores labore officia id sint blanditiis magnam suscipit esse quia hic,  quis temporibus deserunt.</h2>
    </>
  );
}

export default App;
