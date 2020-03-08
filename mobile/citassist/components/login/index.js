import React from 'react';
import { TextInput, View, Button, Image, TouchableOpacity, Text, ActivityIndicator, Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Styles from '../../styles/styles';
import LoginStyles from './login-style';
import logo from '../../assets/welcome-logo.png';
import * as Api from '../../service/api';
import {AsyncStorage} from 'react-native';

export default function Login(props) {
    const [username, setUsername] = React.useState('TestLogin');
    const [password, setPassword] = React.useState('123Soleil');
    const [isConnecting, setIsConnecting] = React.useState(false);

    const connect = async ()=>{
        setIsConnecting(true)
        const token = await Api.login({
            login: username,
            password: password
        });
        if(token){
            AsyncStorage.setItem('TOKEN', token);
            props.navigation.replace('Home')
        }
       else{
           setIsConnecting(false);
           Alert.alert('Erreur de connexion', "Nom de compte/ mot de passe incorrect",
           [
               {
                   text: 'OK', 
                   onPress: () => {
                   }
               },
           ]            
       )
       }
    }

    return (
        <KeyboardAwareScrollView contentContainerStyle={{flex:1,justifyContent:'center', alignContent:'center', alignItems:'center'}}>
            <View style={{flex:1, justifyContent:'center'}}>
                <Image style={LoginStyles.logo2} source={logo} />
            </View>
            <View style={LoginStyles.login}>
                <TextInput
                    style={[LoginStyles.default, LoginStyles.username]}
                    onChangeText={(text)=>setUsername(text)}
                    value={username}
                    placeholder={"Nom d'utilisateur"}
                />
                <TextInput
                    style={[LoginStyles.default, LoginStyles.password]}
                    onChangeText={passwordInput =>
                        setPassword(passwordInput)
                    }
                    secureTextEntry={true} 
                    textContentType='password'
                    value={password}
                    placeholder={'Mot de passe'}
                />
                <TouchableOpacity disabled={isConnecting} onPress={() => connect()} style={LoginStyles.loginButton}>
                    {
                        isConnecting ?
                        <ActivityIndicator color='white' />
                        :
                        <Text style={LoginStyles.loginText}>
                            Connexion
                        </Text>
                    }
                </TouchableOpacity>        
            </View>
       </KeyboardAwareScrollView>

    );
}
