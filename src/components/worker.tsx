import {
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonProgressBar,
} from "@ionic/react";
import React, { useState } from "react";
import Data from "./data.json";
import Map from "react-map-gl";

// import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

// const center = {
//   lat: 23.181467,
//   lng: 79.986404,
// };

const Worker: React.FC = () => {
  const [viewPort, setViewport] = useState({
    latitude: 23.181467,
    longitude: 79.986404,
    zoom: 10,
    width: "100vw",
    height: "100vh",
  });
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: "AIzaSyBaVMw1kIWR9UP69fRUPA2NFN51jgYsu3o",
  // });
  // if (!isLoaded) {
  //   return <IonProgressBar type="indeterminate" />;
  // }

  return (
    <>
      <div>
        <IonToolbar color="light">
          <IonTitle>Plumber Available On Your Location</IonTitle>
        </IonToolbar>
      
          <Map
            {...viewPort}
            mapboxAccessToken="pk.eyJ1Ijoiaml0ZW5kcmE0NjIxIiwiYSI6ImNsYTgxazN0djA0eGYzdnBidTU2cHo1OTYifQ.y6vv06lqVYa1JUjJruECJA"
          
          >
            marker
          </Map>
       
        {/* <div>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
          ></GoogleMap>
        </div> */}
        <IonList>
          {Data.map((plumbers: any) => (
            <IonItem key={plumbers.id}>{plumbers.name}</IonItem>
          ))}
        </IonList>
      </div>
    </>
  );
};

export default Worker;
