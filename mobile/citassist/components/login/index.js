import React from 'react';
import { TextInput, View, Button, Image, TouchableOpacity, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Styles from '../../styles/styles';
import LoginStyles from './login-style';
import logo from '../../assets/welcome-logo.png';

export default function Login(props) {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const connect = ()=>{
        props.navigation.navigate('Home')
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{justifyContent:'center', alignContent:'center', alignItems:'center'}} style={{flex:1,backgroundColor:'transparent'}}>
            <Image style={LoginStyles.logo2} source={logo} />
            <View style={LoginStyles.login}>
                <TextInput
                    style={[LoginStyles.default, LoginStyles.username]}
                    onChangeText={usernameInput =>
                    onChangeUsername(usernameInput)
                    }
                    value={username}
                    placeholder={"Nom d'utilisateur"}
                />
                <TextInput
                    style={[LoginStyles.default, LoginStyles.password]}
                    onChangeText={passwordInput =>
                        onChangePassword(passwordInput)
                    }
                    secureTextEntry={true} 
                    textContentType='password'
                    value={password}
                    placeholder={'Mot de passe'}
                />
                <TouchableOpacity onPress={() => connect()} style={LoginStyles.loginButton}>
                    <Text style={LoginStyles.loginText}>
                        Connexion
                    </Text>
                </TouchableOpacity>        
                </View>
       </KeyboardAwareScrollView>

    );
}
