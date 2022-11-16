import React from "react";
import {
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonBackButton,
    IonButtons,
    IonContent,
  } from "@ionic/react";
import Details from "../components/details";

  
  
  
  const DetailsPage: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="secondary">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle className="ion-text-center">DETAILS</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <Details/>
        </IonContent>
      </IonPage>
    );
  };
  
  export default DetailsPage;
  