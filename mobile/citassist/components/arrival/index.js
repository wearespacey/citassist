import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View, TouchableOpacity, Image} from 'react-native';
import ArrivalStyle from './arrival-style';
import Deaf from '../../assets/deaf.png'
import MentallyDisabled from '../../assets/mentally_disabled.png'
import PRM from '../../assets/prm.png'
import Pregnant from '../../assets/pregnant.png'
import Stretcher from '../../assets/stretcher.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMale, faDog, faSuitcase } from '@fortawesome/free-solid-svg-icons'

const Arrival = (props)=>{
    const [disabilities, setDisabilities] = useState(new Array());
    const [has, setHas] = useState(new Array());
    const [needs, setNeeds] = useState(new Array())
    const [i, setI] = useState(0);


    useEffect(()=>{

    });

    const assist = ()=>{
        props.route.params.navigation.navigation.navigate('LocateUser', {disabilities: disabilities, has: has, needs: needs})
    }

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
    };

    const setNeed = (need)=>{
        setI(i => i+1);
        var n = needs;
        if(n.includes(need))
            n.splice(n.indexOf(need), 1);
        else
            n.push(need)
        setNeeds(n);
    }

    return(
        <ScrollView>
            <View style={{paddingVertical: 5, paddingHorizontal: 20,}}>
                <Text style={ArrivalStyle.text}>Je suis</Text>
                <View style={{padding: 20, flexDirection:'row', alignSelf:'center'}}>
                    <View>
                        <TouchableOpacity onPress={()=>setDisability('Deaf')} style={[ArrivalStyle.icon, {backgroundColor: disabilities.includes('Deaf') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                            <Image style={ArrivalStyle.imageSize} source={Deaf} />
                        </TouchableOpacity>
                        <Text style={ArrivalStyle.label}>Sourd</Text>
                    </View>
                    <View style={{justifyContent:'center', alignContent:'center', alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>setDisability('Mentally disabled')} style={[ArrivalStyle.icon, {backgroundColor: disabilities.includes('Mentally disabled') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                            <Image  style={ArrivalStyle.imageSize} source={MentallyDisabled} />
                        </TouchableOpacity>
                        <Text numberOfLines={2} style={[ArrivalStyle.label, {width:'60%'}]}>Déficience mentale</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>setDisability('PMR')} style={[ArrivalStyle.icon, {backgroundColor: disabilities.includes('PMR') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                            <Image style={ArrivalStyle.imageSize} source={PRM} />
                        </TouchableOpacity>
                        <Text style={ArrivalStyle.label}>PMR</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>setDisability('Pregnant')} style={[ArrivalStyle.icon, {backgroundColor: disabilities.includes('Pregnant') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                            <Image style={ArrivalStyle.imageSize} source={Pregnant} />
                        </TouchableOpacity>
                        <Text style={ArrivalStyle.label}>Enceinte</Text>
                    </View>
                </View>
            </View>
            <View style={{paddingVertical: 5, paddingHorizontal: 20,}}>
                <Text style={ArrivalStyle.text}>J'ai</Text>
                <View style={{padding: 20, flexDirection:'row', alignSelf:'center'}}>
                    <View>
                        <TouchableOpacity onPress={()=>setHave('PRM')} style={[ArrivalStyle.icon, {backgroundColor: has.includes('PRM') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                            <Image style={ArrivalStyle.imageSize} source={PRM} />
                        </TouchableOpacity>
                        <Text style={ArrivalStyle.label}>Chaise</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>setHave('Companion')} style={[ArrivalStyle.icon, {backgroundColor: has.includes('Companion') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                            <View style={ArrivalStyle.iconView}>
                                <FontAwesomeIcon style={ArrivalStyle.centerIcon} icon={faMale} size={40} color='white'/>
                            </View>
                        </TouchableOpacity>
                        <Text style={ArrivalStyle.label}>Accompagnant</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>setHave('Dog')} style={[ArrivalStyle.icon, {backgroundColor: has.includes('Dog') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                            <View style={ArrivalStyle.iconView}>
                                <FontAwesomeIcon style={ArrivalStyle.centerIcon} icon={faDog} size={40} color='white'/>
                            </View>
                        </TouchableOpacity>
                        <Text style={ArrivalStyle.label}>Chien</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>setHave('Bag')} style={[ArrivalStyle.icon, {backgroundColor: has.includes('Bag') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                            <View style={ArrivalStyle.iconView}>
                                <FontAwesomeIcon style={ArrivalStyle.centerIcon} icon={faSuitcase} size={40} color='white'/>
                            </View>
                        </TouchableOpacity>
                        <Text style={ArrivalStyle.label}>Bagages</Text>
                    </View>
                </View>
            </View>
            <View style={{paddingVertical: 5, paddingHorizontal: 20,}}>
                <Text style={ArrivalStyle.text}>J'ai besoin</Text>
                <View style={{padding: 20, flexDirection:'row', alignSelf:'center'}}>
                     <View>
                        <TouchableOpacity onPress={()=>setNeed('WheelChair')} style={[ArrivalStyle.icon, {backgroundColor: needs.includes('WheelChair') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                            <Image style={ArrivalStyle.imageSize} source={PRM} />
                        </TouchableOpacity>
                        <Text style={ArrivalStyle.label}>Chaise</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>setNeed('Translator')} style={[ArrivalStyle.icon, {backgroundColor: needs.includes('Translator') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                            <View style={ArrivalStyle.iconView}>
                                <FontAwesomeIcon style={ArrivalStyle.centerIcon} icon={faMale} size={40} color='white'/>
                            </View>
                        </TouchableOpacity>
                        <Text style={ArrivalStyle.label}>Traducteur</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>setNeed('Stretcher')} style={[ArrivalStyle.icon, {backgroundColor: needs.includes('Stretcher') ? 'rgb(78,157,45)' : 'transparent', borderRadius:50}]}>
                            <View style={ArrivalStyle.iconView}>
                                <Image style={ArrivalStyle.imageIcon} source={Stretcher} />
                            </View>
                        </TouchableOpacity>
                        <Text style={ArrivalStyle.label}>Civière</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={()=>assist()} style={ArrivalStyle.assistButton}>
                <Text style={ArrivalStyle.assistText}>Valider</Text>
            </TouchableOpacity>
        </ScrollView>
    )
};

export default Arrival;