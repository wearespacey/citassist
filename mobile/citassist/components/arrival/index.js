import React, {useState} from 'react';
import {SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import ArrivalStyle from './arrival-style';
import Deaf from '../../assets/deaf.png'
import MentallyDisabled from '../../assets/mentally_disabled.png'
import PRM from '../../assets/prm.png'

export default ()=>{
    const [disabilities, setDisabilities] = useState(new Array());

    const addDisability = (disability)=>{
        var dis = disabilities;
        dis.push(disability)
        setDisabilities(dis);
    }

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={{padding: 20}}>
                    <Text style={ArrivalStyle.text}>Je suis</Text>
                    <View style={{padding: 20, flexDirection:'row'}}>
                        <TouchableOpacity onPress={()=>addDisability('Deaf')} style={ArrivalStyle.icon}>
                            <Image source={Deaf} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>addDisability('Mentally disabled')} style={ArrivalStyle.icon}>
                            <Image source={MentallyDisabled} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>addDisability('PRM')} style={ArrivalStyle.icon}>
                            <Image source={PRM} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};