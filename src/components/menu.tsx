import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  IonToolbar,
  IonSearchbar,
  IonIcon,
  IonButton,
  IonList,
  IonItem,
  IonRow,
  IonCol,
  IonGrid,
  IonNavLink,
} from "@ionic/react";
import { locationOutline, search } from "ionicons/icons";
import PageThree from "../pages/pagethree";





const Menu: React.FC = () => {

  const data = ["Plumber", "Penter", "Electrician", "Mechanics"];
  // const [plumber, setPlumber] = useState([]);
  const [items, setItems] = useState([...data]);
  const [filterData, setFilterData] = useState(false);

  const counter  = useSelector((state: any) => state.address);
  const counter2 = useSelector((state: any) => state.address2);
  const counter3 = useSelector((state: any) => state.address3);
  const counter4 = useSelector((state: any) => state.address4);
  const counter5 = useSelector((state: any) => state.address5);

  const handleChange = (e: Event) => {
    let qurey = "";
    const target = e.target as HTMLIonSearchbarElement; 
   
    if (target) qurey = target.value!.toLowerCase();
    setItems(data.filter((d) => d.toLowerCase().indexOf(qurey) > -1));
    
   
    setFilterData(true)
  };
  

  // const showWorkers = () => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((result: any) => {
  //     result.json().then((resp: any) => {
  //       setPlumber(resp);
  //     });
  //   });
  // };

  return (
    <>
      <div>
        <IonToolbar color="light" slot="start">
          <h2>
            <IonIcon slot="start" icon={locationOutline} /> {counter.address},
            {counter2.address2},{counter3.address3},{counter4.address4},
            {counter5.address5}.
          </h2>
        </IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonSearchbar
                placeholder="Plumber,Electrician,Penter"
                showClearButton="focus"
                debounce={100}
                onIonChange={(e) => handleChange(e)}
              />
              <IonCol>
                <IonButton color="light">
                  <IonIcon slot="start" icon={search} />
                </IonButton>
              </IonCol>
            </IonCol>
          </IonRow>
        </IonGrid>
       {filterData &&<IonList>
          {items.map((result) => (
            <IonItem>{result}</IonItem>
          ))}
        </IonList>}
        <IonList>
          <IonNavLink
           routerDirection="forward"
           component={() => <PageThree/>}
          >
          <IonButton
            // onClick={showWorkers}
            size="large"
            fill="outline"
            color="tertiary"
          >
            Plumber
          </IonButton>
          </IonNavLink>
        </IonList>
      </div>
    </>
  );
};
export default Menu;
