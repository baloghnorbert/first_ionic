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
  useEffect(() => { //ez az onloadnak megfelelő --> amikor az oldal töltödik be akkor csinálja meg 
    //1 másodperces timert ad
    setTimeout(() => {
      // Ez akkor fut le amikor az oldal betöltődik , []  helyére lehet írni a feltételt ha szeretnénk.
      setPlayers(playersData);
      //ide kell tenni a settelést mert async fog menni és ezért itt kell hívni. 
      setLoading(false);
    }, 1000)
  }, []);

  //a komponsens usestate segítségével tárolja az adatokat --> ha a state válozik akkor újra fogja renderelni

  const loader = (): JSX.Element =>
    <div className="loader">
      <Loader type="BallTriangle"
        color="red"
        height={100}
        width={100}
        visible={loading}
      />
    </div>

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
