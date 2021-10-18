import React, { useState, useEffect } from "react";
import {
    IonPage, IonContent, IonToolbar, IonHeader, IonTitle, IonCard, IonCardHeader,
    IonCardSubtitle, IonCardTitle, IonCardContent, IonBackButton
} from "@ionic/react";
import { Player, playersData } from "../../data/data";
import {
    withRouter, RouteComponentProps
} from "react-router-dom"; //Erre figyelni kell, hogy ezt a DOM-osat kell használni!!!



interface IProps extends RouteComponentProps<{ id: string }> {

}

const ProfilePage: React.FC<IProps> = (props: IProps): JSX.Element => {
    const [player, setPlayer] = useState<Player>();
    useEffect(() => {
        const id: number = +props.match.params.id;  // így fogja kiveni az url-ből a id paramétert
        //typescriptben a + a stringet számmá alakítja
        const data: Player | undefined = playersData.find((x: Player) => x.id === id);
        setPlayer(data);
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>{player?.name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <img src={player?.imageLink} alt={player?.name} />
                    <IonCardHeader>
                        <IonCardSubtitle>{player?.birthPlace},{player?.birthday}</IonCardSubtitle>
                        <IonCardTitle>{player?.club}</IonCardTitle>
                    </IonCardHeader>
                    <IonCard>
                        <IonCardContent>
                            <p>Height: {player?.height} m</p>
                            <p>Weight: {player?.weight} kg</p>
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardContent>
                            <p>{player?.description}</p>
                        </IonCardContent>
                    </IonCard>
                </IonCard>
                <IonBackButton defaultHref="/"></IonBackButton>
            </IonContent>
        </IonPage>
    );
}
export default withRouter(ProfilePage);