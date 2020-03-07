import { NetworkInfo } from 'react-native-network-info';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

export default function LocateUser() {
    const [ap, setAp] = useState();
    // Get BSSID
    NetworkInfo.getSSID().then(bssid => {
        console.log(bssid);
        setAp(bssid);
    });

    const accessPoints = ['Accueil', 'Parking', 'Urgences']; //Ceci est une API
    const isAtHospital = accessPoints.includes(ap);
    return (
        <View>
            <Text>
                {isAtHospital
                    ? "Quelqu'un est en route"
                    : "Vous n'êtes pas à l'hôpital"}
            </Text>
        </View>
    );
}
