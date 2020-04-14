import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    text:{
        fontSize: 25,
        fontWeight:'bold',
        margin: 10
    },
    icon:{
        padding: 5,
        marginHorizontal: 10
    },
    imageSize:{
        width: 60,
        height: 60,
        resizeMode:'stretch',
        borderRadius: 80
    },
    imageIcon:{
        width:30,
        height:30,
        resizeMode:'contain',
        alignSelf:'center'
    },
    iconView:{
        borderRadius:100,
        backgroundColor:'rgb(47,94,136)',
        width: 60,
        height: 60,
        alignContent:'center',
        justifyContent:'center'
    },
    centerIcon:{
        alignSelf:'center'
    },
    assistButton:{
        backgroundColor:'rgb(78,157,45)',
        padding: 15,
        borderRadius: 10,
        width: '45%',
        alignSelf:'center',
        marginTop:25
    },
    assistText:{
        // color:'rgb(0,96,156)',
        color:'white',
        fontSize: 20,
        // fontWeight:'bold',
        alignSelf:'center',
        textAlign:'center'
    },
    label:{
        textAlign:'center',
        fontSize:10,
        fontWeight:'bold',
        alignSelf:'center'
    },
    view:{
        width:'25%'
    }
});