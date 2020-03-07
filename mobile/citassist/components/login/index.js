import React from 'react';
import { TextInput, View, Button, Image } from 'react-native';
import Styles from '../../styles/styles';
import LoginStyles from './login-style';
import logo from '../../assets/welcome-logo.png';

export default function Login(props) {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    return (
        <View style={Styles.centeredView}>
            <Image style={LoginStyles.logo} source={logo} />
            <View style={LoginStyles.login}>
                <TextInput
                    style={[LoginStyles.default, LoginStyles.username]}
                    onChangeText={usernameInput =>
                        onChangeUsername(usernameInput)
                    }
                    value={username}
                    placeholder={"Entrez votre nom d'utilisateur"}
                />
                <TextInput
                    style={[LoginStyles.default, LoginStyles.password]}
                    onChangeText={passwordInput =>
                        onChangePassword(passwordInput)
                    }
                    value={password}
                    placeholder={'Entrez votre mot de passe'}
                />
                <Button
                    title='Connexion'
                    onPress={() => props.navigation.navigate('Home')}
                />
            </View>
        </View>
    );
}
