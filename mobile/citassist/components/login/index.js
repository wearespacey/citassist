import React from 'react';
import { TextInput, View, Button, Alert } from 'react-native';
import Styles from '../../styles/styles';
import LoginStyles from './login-style';

export default function Login() {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={Styles.centeredView}>
            <TextInput
                onChangeText={usernameInput => onChangeUsername(usernameInput)}
                value={username}
                placeholder={"Entrez votre nom d'utilisateur"}
                style={LoginStyles.default}
            />
            <TextInput
                onChangeText={passwordInput => onChangePassword(passwordInput)}
                value={password}
                placeholder={'Entrez votre mot de passe'}
                style={LoginStyles.default}
            />
            <Button
                title='Connexion'
                onPress={() => Alert.alert('Bon courage sans DB...')}
            />
        </View>
    );
}
