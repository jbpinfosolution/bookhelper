import React, { useState } from "react";
import { IonItem, IonList, IonTitle, IonToolbar, useIonViewWillEnter } from "@ionic/react";
import Data from "./data.json";
// import { useData } from "../hooks/useData";
// import { RouteComponentProps } from "react-router";

// interface PlumberDetailPageProps extends RouteComponentProps<{
//   id:any;
// }>{}

// const Details: React.FC<PlumberDetailPageProps> = ({match}) => {
  const Details: React.FC= () => {
  // const {getPlumberById} = useData()
  
  // const [plumber,setPlumber] = useState(null as any)

  // useIonViewWillEnter( () => {
  //   const plumber =  getPlumberById(match.params.id);
  // })

  return (
    <>
      <IonToolbar color="light">
        <IonTitle className="ion-text-center">{Data && Data[0].name}</IonTitle>
      </IonToolbar>
      <IonList>
        <IonItem>
          <h2>
            Address: {Data && Data[0].address.addressline},
            {Data && Data[0].address.city},{Data && Data[0].address.state},
            {Data && Data[0].address.zipcode}
          </h2>
        </IonItem>
        <IonItem>
            <h3>Phone: {Data && Data[0].phone}</h3>
        </IonItem>
        <IonItem>
            <h4>Service Timing: {Data && Data[0].servicetiming}</h4>
        </IonItem>
      </IonList>
    </>
  );
};

export default Details;
