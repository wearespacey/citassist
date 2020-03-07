import QRCodeScanner from 'react-native-qrcode-scanner';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LocateUserStyles from './locateUser-style';

export default function LocateUser() {
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
    };

    return (
        <QRCodeScanner
            onRead={() => onSuccess()}
            topContent={
                <Text style={LocateUserStyles.centerText}>
                    Go to{' '}
                    <Text style={LocateUserStyles.textBold}>
                        wikipedia.org/wiki/QR_code
                    </Text>{' '}
                    on your computer and scan the QR code.
                </Text>
            }
            bottomContent={
                <TouchableOpacity style={LocateUserStyles.buttonTouchable}>
                    <Text style={LocateUserStyles.buttonText}>OK. Got it!</Text>
                </TouchableOpacity>
            }
        />
    );
}
