import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import Worker from "../components/worker";



const PageThree: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle className="ion-text-center">PLUMBERS</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonToolbar color="light">
        <IonTitle>Plumber Available On Your Location</IonTitle>
      </IonToolbar>
      <IonContent fullscreen={true}>
        <Worker />
      </IonContent>
    </IonPage>
  );
};

export default PageThree;
