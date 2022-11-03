import React from "react";
import { useSelector } from "react-redux";

import {
  IonToolbar,
  IonSearchbar,
  IonIcon,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { locationOutline, search } from "ionicons/icons";

const Menu: React.FC = () => {
  const counter = useSelector((state: any) => state.address);
  const counter2 = useSelector((state: any) => state.address2);
  const counter3 = useSelector((state: any) => state.address3);
  const counter4 = useSelector((state: any) => state.address4);
  const counter5 = useSelector((state: any) => state.address5);
  return (
    <div>
      <IonToolbar color="light" slot="start">
        <h2>
          <IonIcon slot="start" icon={locationOutline} /> {counter.address},
          {counter2.address2},{counter3.address3},{counter4.address4},
          {counter5.address5}.
        </h2>
        <IonSearchbar
          placeholder="Plumber,Electrician,Penter"
          showClearButton="focus"
        >
          <IonButton color="light">
            <IonIcon  slot="start" icon={search} />
          </IonButton>
        </IonSearchbar>
      </IonToolbar>
    </div>
  );
};
export default Menu;
