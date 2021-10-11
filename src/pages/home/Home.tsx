import React, { useState, useEffect } from 'react';
import { IonContent, IonPage, IonList, IonListHeader, IonItem } from '@ionic/react';
import './Home.css';
import { Player, playersData } from '../../data/data';
import ListCompoent from './ListComponent';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const HomePage: React.FC = () => {

  const [players, setPlayers] = useState<Player[]>([]); //players a getter setPlayers a setter
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    //1 másodperces timert ad
    setTimeout(() => {
      // Ez akkor fut le amikor az oldal betöltődik , []  helyére lehet írni a feltételt ha szeretnénk.
      setPlayers(playersData);
      //ide kell tenni a settelést mert async fog menni és ezért itt kell hívni. 
      setLoading(false);
    }, 1000)
  }, []);

  const loader = (): JSX.Element =>
    <Loader type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      visible={loading}
    />

  const list = (): JSX.Element =>
    <IonList>
      <IonListHeader>A sportolók </IonListHeader>
      {
        //index változó bevezetésével a react követni tudja, hogy melyik komponensről van szó
        //ez később jó lesz akkor is amikor majd rákattintásra csinálunk valamit
        players.map((player: Player, index: number) => <ListCompoent player={player} key={index} />)
      }
    </IonList>


  return (
    <IonPage>  {/* mindig ezzel kezdődik az oldal */}
      <IonContent fullscreen>
        {
          loading ? loader() : list()
        }
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
