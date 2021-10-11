import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonList, IonListHeader, IonItem } from '@ionic/react';
import './Home.css';
import { Player, playersData } from '../../data/data';
import ListCompoent from './ListComponent';

const HomePage: React.FC = () => {

  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    //1 másodperces timert ad
    setTimeout(() => {
      // Ez akkor fut le amikor az oldal betöltődik , []  helyére lehet írni a feltételt ha szeretnénk.
      setPlayers(playersData);
    }, 1000)
  }, []);
  return (
    <IonPage>  {/* mindig ezzel kezdődik az oldal */}
      <IonContent fullscreen>
        <IonList>
          <IonListHeader>A sportolók </IonListHeader>
          {
            //index változó bevezetésével a react követni tudja, hogy melyik komponensről van szó
            //ez később jó lesz akkor is amikor majd rákattintásra csinálunk valamit
            players.map((player: Player, index: number) => <ListCompoent player={player} key={index} />)
          }
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
