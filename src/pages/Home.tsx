import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Address from "../components/address";

import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">WELCOME</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Address  />
      </IonContent>
    </IonPage>
  );
};

export default Home;
