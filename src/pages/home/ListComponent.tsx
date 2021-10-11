import React from 'react';
import { IonItem, IonLabel, IonAvatar } from '@ionic/react';
import { Player } from '../../data/data';

interface IProps {
    player: Player;
}

const ListCompoent: React.FC<IProps> = (props: IProps): JSX.Element => {
    return (
        <IonItem>
            <IonAvatar slot="start">
                <img src={props.player.imageLink} alt={props.player.name} />
            </IonAvatar>
            <IonLabel>
                <h2>{props.player.name}</h2>
                <h3>{props.player.club}</h3>
                <p>{props.player.description}</p>
            </IonLabel>
        </IonItem>
    );
}

export default ListCompoent;