import {
  IonList,
  IonItem,
  IonButton,
  IonText,
 
  IonLabel,
} from "@ionic/react";
import React from "react";
import Data from "./data.json";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// import { useData } from "../hooks/useData";
// import DetailsPage from "../pages/detailspage";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoiaml0ZW5kcmE0NjIxIiwiYSI6ImNsYWZldnAwODE0Mm8zdm1pMWZlMDJlaGoifQ.5vUUkEpiMQlj_AYQhhXexg";

const Worker: React.FC = () => {
  // const [selectedLocation, setSelectedLocation] = useState<any>(null);
  // const [showPopup, setShowPopup] = useState(false);
  // const { data } = useData();
  // const open = (e: any) => {
  //   setShowPopup(true);
  //   console.log(setShowPopup);
  // };

  return (
    <>
      <div>
        <Map
          initialViewState={{
            latitude: 23.181467,
            longitude: 79.986404,
            zoom: 10,
          }}
          style={{ width: "100vw", height: "70vh" }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          {Data.map((location) => (
            <Marker
              key={location.id}
              longitude={location.geo.lng}
              latitude={location.geo.lat}
              color="red"
            >
              <IonButton
                fill="clear"
                expand="full"
                size="large"
                // onClick={e => {
                //   e.preventDefault();
                //   setSelectedLocation(location);
                //   console.log(e)
                // }}
                // onClick={open}
              >
                <img
                  src="./marker.png"
                  alt={location.name}
                  style={{ height: "5vh", width: "5vw" }}
                />
                <IonText color="dark">
                  <h6>{location.name}</h6>
                </IonText>
              </IonButton>
            </Marker>
          ))}

          {/* {showPopup &&
            Data.map((popup) => (
              <Popup
                key={popup.id}
                longitude={popup.geo.lng}
                latitude={popup.geo.lat}
                anchor="bottom"
                onClose={open}
              >
                {popup.name}
              </Popup>
            ))} */}
          {/* {selectedLocation ? (
            <Popup
              latitude={selectedLocation.geo.lat}
              longitude={selectedLocation.geo.lng}
            >
             <h2>{selectedLocation.name}</h2>
            </Popup>
          ) : null } */}

          {/* <Marker longitude={79.957532} latitude={23.219304} color="red"/> */}
        </Map>
        <IonList>
          {Data.map((plumbers:any, index) => (
            <IonItem
              key={index}
              routerLink={`/home/menu/worker/details/${plumbers.id}`}
            >
              <IonLabel>
                {plumbers.id}.{plumbers.name}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </div>
    </>
  );
};

export default Worker;
