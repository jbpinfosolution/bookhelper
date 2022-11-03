import {
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonAlert,
  IonNavLink,
} from "@ionic/react";
import React, { useState } from "react";
import SecondPage from "../pages/secondpage";
import "./ExploreContainer.css";
import { useDispatch } from "react-redux";

interface ContainerProps {}

const Address: React.FC<ContainerProps> = () => {
  const dispatch = useDispatch();
  const [showAddress, setShowAddress] = useState(false);
  const [error, setError] = useState<string>();
  const [address, setAddress] = useState({
    addressLine: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  const inputEvent = (e: any) => {
    console.log(e.target.value);
    console.log(e.target.name);

    const { value, name } = e.target;
    setAddress({ ...address, [name]: value });
  };
  const onSubmits = (e: any) => {
    console.log(address);
    setShowAddress(true);
    if (
      !address.addressLine ||
      !address.city ||
      !address.state ||
      !address.postalCode ||
      !address.country
    ) {
      setError("Address is required.");
      setShowAddress(false);
    }
    e.preventDefault();
  };
  const deleteAddress = (e: any) => {
    console.log(address);
    setShowAddress(false);
    address.addressLine = "";
    address.city = "";
    address.state = "";
    address.postalCode = "";
    address.country = "";
  };

  const clearError = () => {
    setError("");
  };

  return (
    <React.Fragment>
      <div className="container">
        <IonToolbar color="dark" slot="start">
          <h2>Enter Your Address</h2>
        </IonToolbar>
        <IonAlert
          isOpen={!!error}
          message={error}
          buttons={[{ text: "Okay", handler: clearError }]}
        />
        <form onSubmit={onSubmits}>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Address Line1</IonLabel>
              <IonInput
                type="text"
                name="addressLine"
                value={address.addressLine}
                onIonInput={inputEvent}
                placeholder="Enter Address"
              />
            </IonItem>
            <IonGrid>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">City</IonLabel>
                    <IonInput
                      type="text"
                      name="city"
                      value={address.city}
                      onIonInput={inputEvent}
                      placeholder="Enter City"
                    />
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">State</IonLabel>
                    <IonInput
                      type="text"
                      name="state"
                      value={address.state}
                      onIonInput={inputEvent}
                      placeholder="Enter State"
                    />
                  </IonItem>
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">Postal Code</IonLabel>
                    <IonInput
                      type="number"
                      name="postalCode"
                      value={address.postalCode}
                      onIonInput={inputEvent}
                      placeholder="Enter postel Code"
                    />
                  </IonItem>
                </IonCol>
                <IonCol>
                  <IonItem>
                    <IonLabel position="floating">Country</IonLabel>
                    <IonInput
                      type="text"
                      name="country"
                      value={address.country}
                      onIonInput={inputEvent}
                      placeholder="Enter Country"
                    />
                  </IonItem>
                </IonCol>
              </IonRow>
            </IonGrid>
            <IonButton type="submit" shape="round" color="success">
              Submit
            </IonButton>
          </IonList>
          {showAddress && (
            <IonCard color="light">
              <IonCardHeader>
                <IonCardTitle>Your Address</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <h2>
                  {address.addressLine} <br />
                  {address.city} <br />
                  {address.state}
                  <br />
                  {address.postalCode} <br />
                  {address.country}
                </h2>
              </IonCardContent>
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonNavLink
                      routerDirection="forward"
                      component={() => <SecondPage />}
                    >
                      <IonButton
                        shape="round"
                        color="success"
                        onClick={() =>
                          dispatch({
                            type: "showAddress",
                            payload: address.addressLine,
                            payload2: address.city,
                            payload3: address.state,
                            payload4: address.postalCode,
                            payload5: address.country,
                          })
                        }
                      >
                        Confirm
                      </IonButton>
                    </IonNavLink>
                  </IonCol>
                  <IonCol>
                    <IonButton
                      onClick={deleteAddress}
                      shape="round"
                      color="danger"
                    >
                      Reset
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCard>
          )}
        </form>
      </div>
    </React.Fragment>
  );
};

export default Address;
