import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import ArrivalStyle from './arrival-style';
import Deaf from '../../assets/deaf.png'
import MentallyDisabled from '../../assets/mentally_disabled.png'
import PRM from '../../assets/prm.png'
import Pregnant from '../../assets/pregnant.png'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMale, faDog, faSuitcase } from '@fortawesome/free-solid-svg-icons'

const Arrival = (props)=>{
    const [disabilities, setDisabilities] = useState(new Array());
    const [has, setHas] = useState(new Array());
    const [i, setI] = useState(0);

    useEffect(()=>{

    });

    const setDisability = (disability)=>{
        setI(i => i+1);
        var dis = disabilities;
        if(dis.includes(disability))
            dis.splice(dis.indexOf(disability), 1);
        else
            dis.push(disability)
        setDisabilities(dis);
    }

    const setHave = (have)=>{
        setI(i => i+1);
        var h = has;
        if(h.includes(have))
            h.splice(h.indexOf(have), 1);
        else
            h.push(have)
        setHas(h);
    }

    return(
        <ScrollView>
            <View style={{padding: 20}}>
                <Text style={ArrivalStyle.text}>Je suis</Text>
                <View style={{padding: 20, flexDirection:'row', alignSelf:'center'}}>
                    <View>
                        <TouchableOpacity onPress={()=>setDisability('Deaf')} style={[ArrivalStyle.icon, {backgroundColor: disabilities.includes('Deaf') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                            <Image style={ArrivalStyle.imageSize} source={Deaf} />
                        </TouchableOpacity>
                        <Text style={{textAlign:'center'}}>Deaf</Text>
                    </View>
                    <TouchableOpacity onPress={()=>setDisability('Mentally disabled')} style={[ArrivalStyle.icon, {backgroundColor: disabilities.includes('Mentally disabled') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                        <Image  style={ArrivalStyle.imageSize} source={MentallyDisabled} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setDisability('PRM')} style={[ArrivalStyle.icon, {backgroundColor: disabilities.includes('PRM') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                        <Image style={ArrivalStyle.imageSize} source={PRM} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setDisability('Pregnant')} style={[ArrivalStyle.icon, {backgroundColor: disabilities.includes('Pregnant') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                        <Image style={ArrivalStyle.imageSize} source={Pregnant} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{padding: 20}}>
                <Text style={ArrivalStyle.text}>J'ai</Text>
                <View style={{padding: 20, flexDirection:'row', alignSelf:'center'}}>
                    <TouchableOpacity onPress={()=>setHave('PRM')} style={[ArrivalStyle.icon, {backgroundColor: has.includes('PRM') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                        <Image style={ArrivalStyle.imageSize} source={PRM} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setHave('Companion')} style={[ArrivalStyle.icon, {backgroundColor: has.includes('Companion') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                        <View style={ArrivalStyle.iconView}>
                            <FontAwesomeIcon style={ArrivalStyle.centerIcon} icon={faMale} size={40} color='white'/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setHave('Dog')} style={[ArrivalStyle.icon, {backgroundColor: has.includes('Dog') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                        <View style={ArrivalStyle.iconView}>
                            <FontAwesomeIcon style={ArrivalStyle.centerIcon} icon={faDog} size={40} color='white'/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setHave('Bag')} style={[ArrivalStyle.icon, {backgroundColor: has.includes('Bag') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                        <View style={ArrivalStyle.iconView}>
                            <FontAwesomeIcon style={ArrivalStyle.centerIcon} icon={faSuitcase} size={40} color='white'/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
};

export default Arrival;