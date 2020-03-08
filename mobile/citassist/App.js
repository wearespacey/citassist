import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/login';
import Home from './components/home';
import LocateUser from './components/locateUser';
import Arrival from './components/arrival';
import HomeNavigation from './components/home-navigation';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
            >
                <Stack.Screen
                    name='Login'
                    component={Login}
                    options={{ title: 'Connexion' }}
                />
                <Stack.Screen
                    name='Home'
                    component={HomeNavigation}
                    options={{ title: 'Accueil', headerLeft:false, gestureEnabled: false}}
                />
                <Stack.Screen
                    name='LocateUser'
                    component={LocateUser}
                    options={{ title: 'Localisation' }}
                />
                <Stack.Screen
                    name='Arrival'
                    component={Arrival}
                    options={{ title: 'Arrivée' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
