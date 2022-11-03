import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import React from "react";
import Menu from "../components/menu";
  
  
  const  SecondPage: React.FC = () => {
    return (
      <IonPage>
        <IonContent>
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle className="ion-text-center">SERVICES</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Menu/>
        </IonContent>
      </IonPage>
    );
  };
  
  export default SecondPage;