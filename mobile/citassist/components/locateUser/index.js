import WifiManager from 'react-native-wifi-reborn';
import React, { useState } from 'react';
import { View, Text } from 'react-native';

export default function LocateUser() {
    const [ap, setAp] = useState();
    // Get BSSID
    WifiManager.getCurrentWifiSSID().then(
        ssid => {
            console.log('Your current connected wifi SSID is ' + ssid);
            setAp(ssid);
        },
        () => {
            console.log('Cannot get current SSID!');
        }
    );

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
