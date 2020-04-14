import QRCodeScanner from 'react-native-qrcode-scanner';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Button } from 'react-native';
import LocateUserStyles from './locateUser-style';

export default function LocateUser(props) {
    onSuccess = e => {
        Alert.alert('Votre demande a été envoyée', "Vous serez notifiée lorsqu'elle sera prise en charge",
            [
                {
                    text: 'OK', 
                    onPress: () => {
                        props.navigation.pop()
                    }
                },
            ]            
        )
        
    };

    return (
        <QRCodeScanner
            onRead={() => onSuccess()}
            topContent={
                <View style={{justifyContent:'center', alignContent:'center'}}>
                    <Text style={LocateUserStyles.centerText}>
                        Scannez le QR Code afin d'indiquer l'étage auquel vous vous trouvez
                    </Text>
                </View>
            }

        />
        
    );
}
