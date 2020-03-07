import React from 'react';
import { Text, Button } from 'react-native';

export default function Home(props) {
    const locateUser = () => {
        props.navigation.navigate('LocateUser');
    };

    return <Button title='Localisation' onPress={() => locateUser()} />;
}
