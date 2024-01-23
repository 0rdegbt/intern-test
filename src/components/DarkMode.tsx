import React, { useEffect, useState } from 'react';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonRange,
  IonText,
  IonTitle,
  IonToggle,
  IonToolbar,
  ToggleCustomEvent,
} from '@ionic/react';

const ToggleDark: React.FC = () => {
  const toggleDarkModeHandler = () => document.body.classList.toggle("dark");
  return(<IonList inset={true}>
    <IonItem>
        <IonToggle onIonChange={toggleDarkModeHandler} justify="space-between">
        Dark Mode
        </IonToggle>
    </IonItem>
    </IonList>);
}

export default ToggleDark;