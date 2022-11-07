import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton
  } from "@ionic/react";
  import React from "react";
import Menu from "../components/menu";

  
  
  const  SecondPage: React.FC = () => {
    return (
      <IonPage>
        <IonContent>
        <IonHeader>
          <IonToolbar color="secondary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home"/>
            </IonButtons>
            <IonTitle className="ion-text-center">SERVICES</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Menu />
        </IonContent>
      </IonPage>
    );
  };
  
  export default SecondPage;