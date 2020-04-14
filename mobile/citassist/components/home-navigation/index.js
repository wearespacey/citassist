import * as React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faQuestionCircle, faUser, faBirthdayCake, faVenusMars, faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import Arrival from '../arrival';
import patient from './patient_mock';
import Profile from '../profile';
import {AsyncStorage} from 'react-native';

function SettingsScreen(props) {
  const disconnect = ()=>{
    AsyncStorage.removeItem('TOKEN');
    props.navigation.replace('Login')
  }

  const formatDate = (date)=>{
    return `${fixFormat(date.getDate())}/${fixFormat(date.getMonth())}/${date.getFullYear()}`;
  }

  const fixFormat = (elem)=>{
    return elem.toString().length === 1 ? `0${elem.toString()}` : elem.toString();
  }

  return (
    <View style={{ flex: 1,  alignItems: 'center' }}>
      <View style={{flex:1}}>
        <Image source={{uri:'https://via.placeholder.com/150'}} style={{width:150, height:150, borderRadius: 200, resizeMode:'contain', margin: 50}}/>
      </View>
      <View style={{flex:1, marginTop: 100}}>
      <View style={{flexDirection:'row', width: '70%', justifyContent:'center', margin: 10}}>
        <View style={{flex:1}}>
          <FontAwesomeIcon style={{alignSelf:'center'}} icon={faUser} color='black' size={25} />
        </View>
        <Text style={{flex:1}}>{patient.firstName} {patient.lastName}</Text>
      </View>
      <View style={{flexDirection:'row', width: '70%', justifyContent:'center', margin: 10}}>
        <View style={{flex:1}}>
          <FontAwesomeIcon style={{alignSelf:'center'}} icon={faBirthdayCake} color='black' size={25} />
        </View>
        <Text style={{flex:1}}>{formatDate(patient.birthdate)}</Text>
      </View>
      <View style={{flexDirection:'row', width: '70%', justifyContent:'center', margin: 10}}>
        <View style={{flex:1}}>
          <FontAwesomeIcon style={{alignSelf:'center'}} icon={faVenusMars} color='black' size={25} />
        </View>
        <Text style={{flex:1}}>{patient.sexe}</Text>
      </View>
      <View style={{flexDirection:'row', width: '70%', justifyContent:'center', margin: 10}}>
        <View style={{flex:1}}>
          <FontAwesomeIcon style={{alignSelf:'center'}} icon={faMobileAlt} color='black' size={25} />
        </View>
        <Text style={{flex:1}}>{patient.phoneNumber}</Text>
      </View>
      </View>
      <View style={{flex:1,width:'45%', justifyContent:'flex-end', marginBottom: 50}}>
        <TouchableOpacity onPress={()=>disconnect()} style={{backgroundColor:'#d72323', borderRadius: 10, padding: 15, marginTop: 50,}}>
          <Text style={{textAlign:'center', color:'white'}}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default (props)=>{
    return (
    <NavigationContainer independent={true}>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Arrival') {
                    return (
                        <FontAwesomeIcon icon={faQuestionCircle} size={20} color={focused?'rgb(78,157,45)' : 'rgb(242,242,242)'} />
                    );
                    } else if (route.name === 'Profile') {
                    return (
                        <FontAwesomeIcon icon={faUser} size={20} color={focused?'rgb(78,157,45)' : 'rgb(242,242,242)'} />
                    );
                    }
                },
                })}
            tabBarOptions={{
            activeTintColor: 'rgb(78,157,45)',
            inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Arrival" component={Arrival} initialParams={{navigation: props}} />
            <Tab.Screen name="Profile" component={SettingsScreen} />
        </Tab.Navigator>
    </NavigationContainer>
    );
}